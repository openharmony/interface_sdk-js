# API Check Plugin 性能监控说明

## 概述

本模块提供了 API Check Plugin 的性能监控功能，采用**树形结构**清晰展示各阶段耗时关系。

## 打点层级结构

```
apiCheck.callback
├── initConfig
│   ├── readPermissions
│   ├── readCardPageSet
│   ├── readSystemModules
│   └─ readSyscapInfo
└── checkExpression
    ├── getContext
    ├── getLegacy
    └── traverseFiles
        └── file_1, file_2, ...
            └── checkId
                ├── getDecl
                └── checkJsDoc
                    └── getJsDoc
```

## 报告格式说明

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    API Check Performance Report                              ║
╚═══════════════════════════════════════════════════════════════════════════════╝

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
        ├─ getContext           cnt:   1  total:    5.2ms  self:    5.2ms (100%) avg:    5.20ms
        ├─ getLegacy            cnt:   1  total:    0.1ms  self:    0.1ms (100%) avg:    0.10ms
        └─ traverseFiles        cnt:  15  total: 1026.3ms  self:   31.4ms (3%)  avg:   68.42ms
            └─ file_1            cnt:1523  total:  995.0ms  self:   22.1ms (2%)  avg:    0.65ms
                └─ checkId       cnt:1523  total:  972.9ms  self:  450.2ms (46%) avg:    0.64ms
                    ├─ getDecl   cnt:1523  total:  119.0ms  self:  119.0ms (100%) avg:    0.08ms
                    └─ checkJsDoc cnt:1480  total:  403.7ms  self:    2.3ms (1%)  avg:    0.27ms
                        └─ getJsDoc cnt:1480  total:  401.4ms  self:  401.4ms (100%) avg:    0.27ms

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

### 分析要点

- **total vs self**: total 是包含子节点的总时间，self 是除去子节点后的自身时间
- **百分比**: 表示自身逻辑耗时占比，百分比越高说明该节点自身逻辑越重
- **ArkTS 接口**: `getDecl`、`getJsDoc` 等 ArkTS 接口调用会单独统计

## 开关控制

**修改配置文件**: `utils/performance_monitor.ts`

```typescript
export const PERF_MONITOR_CONFIG: PerformanceMonitorConfig = {
  enabled: false,             // 测试时改为 true
  includeDebugLogs: false,    // 是否输出详细日志
  reportThreshold: 0,         // 报告阈值
  reportSummary: true,        // 生成报告文件
  reportToConsole: false,     // 控制台输出
  outputDir: '.'              // 保存目录
};
```

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

### 3. 优化建议

1. **减少不必要的检查**: 通过缓存配置跳过已检查的节点
2. **优化 JSDoc 读取**: 考虑批量读取或缓存 JSDoc 信息
3. **文件过滤优化**: 提前过滤不需要检查的文件

## 注意事项

1. **生产环境**: 保持 `enabled: false`，避免影响用户体验
2. **测试环境**: 修改配置文件设置 `enabled: true` 启用监控
3. **性能影响**: 监控本身会带来约 1-2% 的额外开销
4. **内存使用**: 统计数据会占用少量内存，每次编译后会自动重置
5. **报告位置**: 报告文件生成在 `outputDir` 指定的目录下
