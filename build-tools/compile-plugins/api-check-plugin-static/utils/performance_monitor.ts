/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs';
import path from 'path';

/**
 * 性能监控配置
 */
export interface PerformanceMonitorConfig {
  enabled: boolean;           // 是否启用性能监控
  includeDebugLogs: boolean;  // 是否包含调试日志
  reportThreshold: number;    // 报告阈值(ms)，超过此阈值才记录
  reportSummary: boolean;     // 是否报告汇总信息
  reportToConsole: boolean;   // 是否同时输出到控制台
  outputDir: string;          // 报告输出目录
}

/**
 * 性能监控开关配置文件（测试时修改此文件）
 */
export const PERF_MONITOR_CONFIG: PerformanceMonitorConfig = {
  enabled: false,             // 测试时设为 true
  includeDebugLogs: false,    // 测试时设为 true 查看详细日志
  reportThreshold: 0,
  reportSummary: true,
  reportToConsole: false,
  outputDir: 'D://'
};

/**
 * 单个打点的原始统计数据
 */
interface RawStatData {
  count: number;
  totalTime: number;
  maxTime: number;
  minTime: number;
}

/**
 * 树形节点统计数据
 */
export interface TreeNode {
  name: string;               // 节点名称（不含父级前缀）
  fullName: string;           // 完整名称
  level: number;              // 层级深度
  count: number;
  total: number;              // 总耗时（含子节点）
  self: number;               // 自身耗时（不含子节点）
  avg: number;
  max: number;
  min: number;
  children: TreeNode[];
}

/**
 * 调用栈帧
 */
interface CallStackFrame {
  name: string;
  startTime: number;
}

/**
 * 性能监控器类
 * 使用点号命名约定表示层级关系，如：parent.child.grandchild
 */
export class PerformanceMonitor {
  private config: PerformanceMonitorConfig;
  private stats: Map<string, RawStatData>;
  private callStack: CallStackFrame[];
  private globalStart: number;

  constructor(config?: Partial<PerformanceMonitorConfig>) {
    const getCwd = (): string => {
      try {
        type GlobalWithProcess = typeof globalThis & { process?: { cwd?: () => string } };
        return (globalThis as GlobalWithProcess).process?.cwd?.() || '.';
      } catch {
        return '.';
      }
    };

    this.config = {
      enabled: config?.enabled ?? false,
      includeDebugLogs: config?.includeDebugLogs ?? false,
      reportThreshold: config?.reportThreshold ?? 0,
      reportSummary: config?.reportSummary ?? true,
      reportToConsole: config?.reportToConsole ?? false,
      outputDir: config?.outputDir ?? getCwd()
    };
    this.stats = new Map();
    this.callStack = [];
    this.globalStart = 0;
  }

  enable(): void { this.config.enabled = true; }
  disable(): void { this.config.enabled = false; }
  isEnabled(): boolean { return this.config.enabled; }

  startGlobal(): void {
    if (!this.config.enabled) {return;}
    this.globalStart = performance.now();
  }

  endGlobal(): void {
    if (!this.config.enabled || this.globalStart === 0) {return;}
    const elapsed = performance.now() - this.globalStart;
    console.log(`[API_CHECK_PERF] Total time: ${elapsed.toFixed(2)}ms`);
    this.globalStart = 0;
  }

  /**
   * 开始计时
   * @param name 计时名称，使用点号表示层级，如 'parent.child'
   */
  start(name: string): void {
    if (!this.config.enabled) {return;}
    this.callStack.push({ name, startTime: performance.now() });
  }

  /**
   * 结束计时并记录
   * @param name 计时名称，必须与 start 时的名称匹配
   */
  end(name: string): void {
    if (!this.config.enabled) {return;}
    const idx = this.callStack.findIndex((item) => item.name === name);
    if (idx === -1) {return;}

    const frame = this.callStack[idx];
    const elapsed = performance.now() - frame.startTime;
    this.callStack.splice(idx, 1);

    // 记录当前节点的耗时
    if (!this.stats.has(name)) {
      this.stats.set(name, { count: 0, totalTime: 0, maxTime: 0, minTime: Infinity });
    }
    const stat = this.stats.get(name)!;
    stat.count++;
    stat.totalTime += elapsed;
    stat.maxTime = Math.max(stat.maxTime, elapsed);
    stat.minTime = Math.min(stat.minTime, elapsed);

    // 调试日志
    if (this.config.includeDebugLogs && elapsed >= this.config.reportThreshold) {
      const indent = '  '.repeat(name.split('.').length - 1);
      console.log(`[API_CHECK_PERF] ${indent}${name.split('.').pop()}: ${elapsed.toFixed(2)}ms`);
    }
  }

  async measure<T>(name: string, fn: () => Promise<T>): Promise<T> {
    if (!this.config.enabled) { return fn(); }
    this.start(name);
    try {
      return await fn();
    } finally {
      this.end(name);
    }
  }

  measureSync<T>(name: string, fn: () => T): T {
    if (!this.config.enabled) { return fn(); }
    this.start(name);
    try {
      return fn();
    } finally {
      this.end(name);
    }
  }

  /**
   * 构建层级树结构
   * 自动创建缺失的中间层级节点
   */
  private buildTree(): TreeNode[] {
    const roots: TreeNode[] = [];
    const nodeMap = new Map<string, TreeNode>();

    // 创建所有实际存在的节点
    this.stats.forEach((stat, fullName) => {
      const parts = fullName.split('.');
      const name = parts[parts.length - 1];
      const level = parts.length;

      const node: TreeNode = {
        name,
        fullName,
        level,
        count: stat.count,
        total: stat.totalTime,
        self: stat.totalTime,
        avg: stat.count > 0 ? stat.totalTime / stat.count : 0,
        max: stat.maxTime,
        min: stat.minTime === Infinity ? 0 : stat.minTime,
        children: []
      };

      nodeMap.set(fullName, node);

      // 创建缺失的中间层级（虚拟节点）
      for (let i = parts.length - 2; i >= 0; i--) {
        const parentFullName = parts.slice(0, i + 1).join('.');
        if (!nodeMap.has(parentFullName)) {
          const parentName = parts[i];
          const parentLevel = i + 1;
          nodeMap.set(parentFullName, {
            name: parentName,
            fullName: parentFullName,
            level: parentLevel,
            count: 0,
            total: 0,
            self: 0,
            avg: 0,
            max: 0,
            min: 0,
            children: []
          });
        }
      }
    });

    // 建立父子关系，找出根节点
    nodeMap.forEach((node, fullName) => {
      const parts = fullName.split('.');
      if (parts.length === 1) {
        // 单层级节点，作为根节点
        if (!roots.includes(node)) {
          roots.push(node);
        }
      } else {
        // 多层级节点，找到父节点
        const parentName = parts.slice(0, -1).join('.');
        const parent = nodeMap.get(parentName);
        if (parent) {
          if (!parent.children.includes(node)) {
            parent.children.push(node);
          }
        } else {
          // 找不到父节点，作为根节点
          if (!roots.includes(node)) {
            roots.push(node);
          }
        }
      }
    });

    // 计算自身耗时（total - 子节点total）
    const calcSelf = (node: TreeNode): void => {
      if (node.children.length === 0) {return;}
      let childrenTotal = 0;
      node.children.forEach(child => {
        calcSelf(child);
        childrenTotal += child.total;
      });
      node.self = node.total - childrenTotal;
    };
    roots.forEach(root => calcSelf(root));

    return roots;
  }

  /**
   * 生成树形报告
   */
  private formatTree(nodes: TreeNode[], indent: string = ''): string[] {
    const lines: string[] = [];

    nodes.forEach((node, index) => {
      const isLast = index === nodes.length - 1;
      const prefix = isLast ? '└─ ' : '├─ ';
      const childIndent = indent + (isLast ? '    ' : '│   ');

      // 节点行
      const selfPercent = node.total > 0 ? ((node.self / node.total) * 100).toFixed(0) : '0';
      const displaySelf = node.self < 0 ? 0 : node.self;  // 虚拟节点的 self 可能为负数
      const displayPercent = node.total > 0 && node.self < 0 ? 'N/A' : `${selfPercent}%`;
      const nodeLine =
        indent + prefix +
        `${node.name} `.padEnd(30) +
        `cnt:${node.count.toString().padStart(4)} ` +
        `total:${node.total.toFixed(1).padStart(6)}ms ` +
        `self:${displaySelf.toFixed(1).padStart(6)}ms (${displayPercent}) ` +
        `avg:${node.avg.toFixed(2).padStart(5)}ms`;
      lines.push(nodeLine);

      // 子节点
      if (node.children.length > 0) {
        lines.push(...this.formatTree(node.children, childIndent));
      }
    });

    return lines;
  }

  report(): void {
    if (!this.config.enabled || !this.config.reportSummary) {return;}

    if (this.stats.size === 0) {
      if (this.config.reportToConsole) {
        console.log('[API_CHECK_PERF] No performance data collected.');
      }
      return;
    }

    // 计算本次运行总耗时
    let currentTotalTime = 0;
    this.stats.forEach(stat => {
      currentTotalTime = Math.max(currentTotalTime, stat.totalTime);
    });

    const timestamp = new Date().toISOString();
    const dateStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

    const lines: string[] = [];

    // === 当次运行的树形结构报告 ===
    lines.push('╔═══════════════════════════════════════════════════════════════════════════════╗');
    lines.push('║                    API Check Performance Report (Current Run)                   ║');
    lines.push('╚═══════════════════════════════════════════════════════════════════════════════╝');
    lines.push('');
    lines.push(`Run Time: ${timestamp}`);
    lines.push(`Total Time: ${currentTotalTime.toFixed(2)}ms`);
    lines.push('');
    lines.push('Legend:');
    lines.push('  cnt    : 调用次数');
    lines.push('  total  : 总耗时（包含子节点）');
    lines.push('  self   : 自身耗时（不含子节点）');
    lines.push('  (xx%)  : 自身耗时占总耗时的百分比');
    lines.push('');
    lines.push('───────────────────────────────────────────────────────────────────────────────');

    const tree = this.buildTree();
    lines.push(...this.formatTree(tree));

    lines.push('───────────────────────────────────────────────────────────────────────────────');
    lines.push('');

    // === 读取并累加之前的统计数据 ===
    const accumulatedStats = this.loadAccumulatedStats();
    const shouldSkipAccumulate = this.checkSkipAccumulate();

    if (!shouldSkipAccumulate) {
      lines.push('===== ACCUMULATED STATISTICS =====');
      lines.push(`Previous Total Time: ${this.getPreviousTotalTime().toFixed(2)}ms`);
      lines.push(`Current Total Time: ${currentTotalTime.toFixed(2)}ms`);
      lines.push(`Accumulated Total Time: ${(this.getPreviousTotalTime() + currentTotalTime).toFixed(2)}ms`);
      lines.push('');
      lines.push('───────────────────────────────────────────────────────────────────────────────');
      lines.push('Name'.padEnd(50) + 'Count'.padStart(10) + 'Total(ms)'.padStart(12) + 'Avg(ms)'.padStart(12) + 'Max(ms)'.padStart(12));
      lines.push('───────────────────────────────────────────────────────────────────────────────');

      // 按名称排序输出累加统计
      const sortedNames = Array.from(accumulatedStats.keys()).sort();
      sortedNames.forEach(name => {
        const stat = accumulatedStats.get(name)!;
        const avg = stat.count > 0 ? stat.totalTime / stat.count : 0;
        lines.push(
          name.padEnd(50) +
          stat.count.toString().padStart(10) +
          stat.totalTime.toFixed(2).padStart(12) +
          avg.toFixed(2).padStart(12) +
          stat.maxTime.toFixed(2).padStart(12)
        );
      });

      lines.push('───────────────────────────────────────────────────────────────────────────────');
      lines.push('');

      // 更新累加统计数据
      this.updateAccumulatedStats();
    } else {
      lines.push('===== ACCUMULATED STATISTICS =====');
      lines.push('》》》》》》》》》》》》》》》》》》 SKIP ACCUMULATION');
      lines.push('───────────────────────────────────────────────────────────────────────────────');
      lines.push('');
    }

    const reportContent = lines.join('\n');

    if (this.config.reportToConsole) {
      console.log('\n' + reportContent);
    }

    // 追加写入按日期命名的文件
    try {
      const fileName = `api-check-perf-${dateStr}.log`;
      const filePath = path.join(this.config.outputDir, fileName);
      fs.appendFileSync(filePath, reportContent + '\n', 'utf-8');
      console.log(`[API_CHECK_PERF] Report appended to: ${filePath}`);
    } catch (e) {
      console.error('[API_CHECK_PERF] Failed to write report:', e);
    }
  }

  /**
   * 检查是否跳过累加
   * 通过检查文件中是否存在跳过标记来判断
   */
  private checkSkipAccumulate(): boolean {
    try {
      const dateStr = new Date().toISOString().slice(0, 10);
      const fileName = `api-check-perf-${dateStr}.log`;
      const filePath = path.join(this.config.outputDir, fileName);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        // 检查最后500个字符中是否有跳过标记
        const lastContent = content.slice(-500);
        return lastContent.includes('》》》》》》》》》》》》》》》》》');
      }
    } catch (e) {
      // 忽略错误
    }
    return false;
  }

  /**
   * 获取之前的累加总耗时
   */
  private getPreviousTotalTime(): number {
    try {
      const dateStr = new Date().toISOString().slice(0, 10);
      const filePath = path.join(this.config.outputDir, `api-check-perf-${dateStr}.log`);
      if (!fs.existsSync(filePath)) {return 0;}

      const content = fs.readFileSync(filePath, 'utf-8');
      const matches = content.match(/Accumulated Total Time: ([\d.]+)ms/g);
      if (!matches || matches.length === 0) {return 0;}

      const lastMatch = matches[matches.length - 1];
      const value = lastMatch.match(/([\d.]+)/);
      return value ? parseFloat(value[1]) : 0;
    } catch {
      return 0;
    }
  }

  /**
   * 从文件中加载累加统计数据
   */
  private loadAccumulatedStats(): Map<string, RawStatData> {
    const accumulated = new Map<string, RawStatData>();
    this.stats.forEach((stat, name) => {
      accumulated.set(name, { ...stat });
    });

    try {
      const dateStr = new Date().toISOString().slice(0, 10);
      const filePath = path.join(this.config.outputDir, `api-check-perf-${dateStr}.log`);
      if (!fs.existsSync(filePath)) {return accumulated;}

      const content = fs.readFileSync(filePath, 'utf-8');
      const accumSections = content.split('===== ACCUMULATED STATISTICS =====');
      for (let i = 1; i < accumSections.length; i++) {
        const section = accumSections[i];
        if (!section.includes('》》》》》》》》》》》》》》》》》')) {
          this.parseAccumSection(section, accumulated);
        }
      }
    } catch (e) {
      console.warn('[API_CHECK_PERF] Failed to load accumulated stats:', e);
    }

    return accumulated;
  }

  private parseAccumSection(section: string, accumulated: Map<string, RawStatData>): void {
    for (const line of section.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('─') || trimmed.startsWith('Name') ||
          trimmed.startsWith('Previous') || trimmed.startsWith('Current') ||
          trimmed.startsWith('Accumulated')) {continue;}

      const match = trimmed.match(/^(.+?)\s+(\d+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)$/);
      if (!match) {continue;}

      const name = match[1].trim();
      const count = parseInt(match[2], 10);
      const total = parseFloat(match[3]);
      const existing = accumulated.get(name);
      if (existing) {
        existing.count += count;
        existing.totalTime += total;
        existing.maxTime = Math.max(existing.maxTime, total);
        existing.minTime = Math.min(existing.minTime, 0);
      } else {
        accumulated.set(name, { count, totalTime: total, maxTime: total, minTime: 0 });
      }
    }
  }

  /**
   * 更新累加统计数据（用于下次读取）
   * 实际上数据已经在 loadAccumulatedStats 中累加了
   * 这个方法可以用来保存中间状态（如果需要）
   */
  private updateAccumulatedStats(): void {
    // 数据已经在 loadAccumulatedStats 中累加了
    // 这个方法可以作为扩展点，如果需要保存中间状态的话
  }

  reset(): void {
    this.stats.clear();
    this.callStack = [];
    this.globalStart = 0;
  }
}

let globalMonitor: PerformanceMonitor | null = null;

export function getGlobalMonitor(config?: Partial<PerformanceMonitorConfig>): PerformanceMonitor {
  if (!globalMonitor) {
    globalMonitor = new PerformanceMonitor(config ?? PERF_MONITOR_CONFIG);
  }
  return globalMonitor;
}

export function setGlobalMonitor(monitor: PerformanceMonitor): void {
  globalMonitor = monitor;
}

export function resetGlobalMonitor(): void {
  globalMonitor = null;
}
