# API Check Plugin 性能监控说明

## 概述

本模块提供了 API Check Plugin 的性能监控功能，采用**树形结构**清晰展示各阶段耗时关系。打点名称通过 `utils/perf_constants.ts` 统一定义，监控逻辑位于 `utils/performance_monitor.ts`。

## 打点层级结构

```
apiCheck.callback
├── initConfig
│   ├── readPermissions
│   ├── readCardPageSet
│   ├── readSystemModules
│   └─ readSyscapInfo
└── checkExpression
    ├── checkExpression.total
    ├── getContext
    ├── getLegacy
    └── traverseFiles
        └── file_1, file_2, ...
            └── checkId
                ├── getDecl
                ├── getCheckConfig
                └── checkJsDoc
                    ├── parseJSDoc
                    ├── getCurrentJSDoc
                    ├── getAddress
                    ├── checkValidCallback
                    │   ├── checkAvailableDecorator
                    │   ├── checkSystemApiTag
                    │   ├── checkSinceValue
                    │   ├── checkSyscapTag
                    │   ├── checkPermissionTag
                    │   └─ checkStageModuleValue
                    └─ getJsDoc
```

说明：
- `checkExpression.total` 为 `checkExpression` 的整体计时包装（在 `api_check_wrapper.ts` 中与子节点并列 `start/end`，用于度量该阶段含子节点的总耗时）。
- `file_*` 为按文件动态生成的节点名，非 `perf_constants.ts` 常量。
- 各节点定义见 `utils/perf_constants.ts` 中的 `PERF` 常量。

## 报告格式说明

报告由「当次运行树形报告」和「累加统计」两部分组成，追加写入按日期命名的 `api-check-perf-YYYY-MM-DD.log`。

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    API Check Performance Report (Current Run)                   ║
╚═══════════════════════════════════════════════════════════════════════════════╝

Run Time: 2026-09-18T...
Total Time: 1234.5ms

Legend:
  cnt    : 调用次数
  total  : 总耗时（包含子节点）
  self   : 自身耗时（不含子节点）
  (xx%)  : 自身耗时占总耗时的百分比

───────────────────────────────────────────────────────────────────────────────
└─ callback                     cnt:   1  total: 1234.5ms  self:   45.6ms (4%)  avg: 1234.50ms
    ├─ initConfig               cnt:   1  total:  120.3ms  self:    8.9ms (7%)  avg:  120.30ms
    │   ├─ readPermissions      cnt:   1  total:    2.1ms  self:    2.1ms (100%) avg:    2.10ms
    │   ├─ readCardPageSet      cnt:   1  total:   15.2ms  self:   15.2ms (100%) avg:   15.20ms
    │   ├─ readSystemModules    cnt:   1  total:   89.3ms  self:   89.3ms (100%) avg:   89.30ms
    │   └─ readSyscapInfo       cnt:   1  total:    4.8ms  self:    4.8ms (100%) avg:    4.80ms
    └─ checkExpression          cnt:   1  total: 1068.6ms  self:   36.7ms (3%)  avg: 1068.60ms
        ├─ total                cnt:   1  total: 1068.6ms  self:    0.0ms (0%)  avg: 1068.60ms
        ├─ getContext           cnt:   1  total:    5.2ms  self:    5.2ms (100%) avg:    5.20ms
        ├─ getLegacy            cnt:   1  total:    0.1ms  self:    0.1ms (100%) avg:    0.10ms
        └─ traverseFiles        cnt:  15  total: 1026.3ms  self:   31.4ms (3%)  avg:   68.42ms
            └─ checkId          cnt:1523  total:  972.9ms  self:  450.2ms (46%) avg:    0.64ms
                ├─ getDecl      cnt:1523  total:  119.0ms  self:  119.0ms (100%) avg:    0.08ms
                ├─ getCheckConfig cnt:1523 total:   0.0ms  self:    0.0ms (0%)  avg:    0.00ms
                └─ checkJsDoc   cnt:1480  total:  403.7ms  self:    2.3ms (1%)  avg:    0.27ms
                    ├─ parseJSDoc   ...
                    ├─ getCurrentJSDoc ...
                    ├─ getAddress      ...
                    ├─ checkValidCallback ...
                    │   ├─ checkAvailableDecorator ...
                    │   ├─ checkSystemApiTag ...
                    │   ├─ checkSinceValue ...
                    │   ├─ checkSyscapTag ...
                    │   ├─ checkPermissionTag ...
                    │   └─ checkStageModuleValue ...
                    └─ getJsDoc     cnt:1480  total: 401.4ms  self: 401.4ms (100%) avg:    0.27ms

───────────────────────────────────────────────────────────────────────────────

===== ACCUMULATED STATISTICS =====
Previous Total Time: ...ms
Current Total Time: ...ms
Accumulated Total Time: ...ms

Name                                               Count   Total(ms)    Avg(ms)    Max(ms)
...
───────────────────────────────────────────────────────────────────────────────
```

### 字段说明

| 字段 | 说明 |
|------|------|
| `cnt` | 调用次数 |
| `total` | 总耗时（包含所有子节点） |
| `self` | 自身耗时（total 减去子节点 total） |
| `(xx%)` | self 占 total 的百分比 |
| `avg` | 平均每次调用耗时 |

### 累加统计（ACCUMULATED STATISTICS）

- 每次运行报告会追加写入当天的 `api-check-perf-YYYY-MM-DD.log`。
- 下一次运行会读取同一文件中此前未带跳过标记的「ACCUMULATED STATISTICS」段，累加到本次统计后输出。
- 若日志末尾出现跳过标记 `》》》》》》》》》》》》》》》》》`，则本次跳过累加（用于隔离某些不需要纳入统计的运行）。

### 分析要点

- **total vs self**: total 是包含子节点的总时间，self 是除去子节点后的自身时间
- **百分比**: 表示自身逻辑耗时占比，百分比越高说明该节点自身逻辑越重
- **虚拟节点**: 未直接打点但作为中间层级的节点（如纯容器节点）self 可能为 0 或负数，报告中负数会被截断为 0 并标记 `N/A`
- **ArkTS 接口**: `getDecl`、`getJsDoc` 等 ArkTS 接口调用会单独统计

## 开关控制

### 1. 监控总配置

修改 `utils/performance_monitor.ts`：

```typescript
export const PERF_MONITOR_CONFIG: PerformanceMonitorConfig = {
  enabled: false,             // 测试时设为 true
  includeDebugLogs: false,    // 测试时设为 true 查看详细日志
  reportThreshold: 0,         // 报告阈值(ms)，超过才记录调试日志
  reportSummary: true,        // 生成报告文件
  reportToConsole: false,    // 控制台输出
  outputDir: undefined        // 默认 undefined，运行时回退到 __dirname
};
```

### 2. 插件总开关

```typescript
// utils/performance_monitor.ts
export const API_CHECK_PLUGIN_ENABLED = true;
```

设为 `false` 时，index 入口回调直接返回，整个 api-check 插件不执行（测试时用于隔离插件）。

## 性能分析要点

### 1. 整体业务耗时拆分

| 阶段 | 预期占比 | 说明 |
|------|----------|------|
| `initConfig` | 2-5% | 配置初始化，主要是 I/O 操作 |
| `checkExpression` | 95-98% | 核心检查逻辑 |

### 2. 核心热点

| 节点 | 说明 |
|------|------|
| `getJsDoc` | ArkTS 接口，获取 JSDoc 注释，最频繁调用 |
| `getDecl` | ArkTS 接口，获取声明节点 |
| `checkId` | 标识符检查，每个 Identifier 都会触发 |
| `checkValidCallback` | JSDoc 标签校验聚合节点，含 6 个子检查项 |

### 3. 优化建议

1. **减少不必要的检查**: 通过缓存配置跳过已检查的节点
2. **优化 JSDoc 读取**: 考虑批量读取或缓存 JSDoc 信息
3. **文件过滤优化**: 提前过滤不需要检查的文件

## 注意事项

1. **生产环境**: 保持 `enabled: false`，避免影响用户体验
2. **测试环境**: 修改配置文件设置 `enabled: true` 启用监控
3. **性能影响**: 监控本身会带来约 1-2% 的额外开销
4. **内存使用**: 统计数据会占用少量内存，每次编译后会自动重置
5. **报告位置**: 报告文件按日追加生成在 `outputDir`（默认 `__dirname`）下的 `api-check-perf-YYYY-MM-DD.log`
