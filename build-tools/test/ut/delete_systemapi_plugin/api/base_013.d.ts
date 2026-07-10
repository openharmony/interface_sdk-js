/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit AbilityKit
 */
/**
 * Logger and monitoring types for testing systemapi deletion.
 *
 * @since 20
 */
export namespace LoggingMonitor {
  /**
   * Logger configuration options.
   *
   * @since 20
   * @systemapi
   */
  export interface LoggerConfig {
    level: LogLevel;
    output: LogOutput[];
    format: LogFormat;
    maxSize: number;
    rotation: RotationPolicy;
  }

  /**
   * Log level enumeration.
   *
   * @enum { number }
   * @since 20
   */
  export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    FATAL = 4
  }

  /**
   * Log output type.
   *
   * @enum { number }
   * @since 20
   * @systemapi
   */
  export enum LogOutput {
    CONSOLE = 0,
    FILE = 1,
    NETWORK = 2,
    MEMORY = 3
  }

  /**
   * Log format options.
   *
   * @since 20
   */
  export interface LogFormat {
    timestamp: boolean;
    level: boolean;
    source: boolean;
    colorize: boolean;
  }

  /**
   * Rotation policy for log files.
   *
   * @since 20
   */
  export interface RotationPolicy {
    maxSize: number;
    maxFiles: number;
    compress: boolean;
    interval?: number;
  }

  /**
   * Performance metrics interface.
   *
   * @since 20
   * @systemapi
   */
  export interface PerformanceMetrics {
    cpuUsage: number;
    memoryUsage: number;
    networkLatency: number;
    diskIO: number;
    timestamp: number;
  }

  /**
   * Monitor alert configuration.
   *
   * @since 20
   */
  export interface AlertConfig {
    threshold: number;
    duration: number;
    action: AlertAction;
    notify: boolean;
  }

  /**
   * Alert action types.
   *
   * @enum { number }
   * @since 20
   */
  export enum AlertAction {
    LOG = 0,
    NOTIFY = 1,
    SHUTDOWN = 2,
    RESTART = 3
  }

  /**
   * System monitor class.
   *
   * @since 20
   */
  export class SystemMonitor {
    private metrics: PerformanceMetrics[] = [];
    private alerts: AlertConfig[] = [];
    private active: boolean = false;

    /**
     * Starts monitoring.
     *
     * @since 20
     */
    public start(): void {
      this.active = true;
    }

    /**
     * Stops monitoring.
     *
     * @since 20
     */
    public stop(): void {
      this.active = false;
    }

    /**
     * Collects current metrics.
     *
     * @returns Current performance metrics
     * @since 20
     * @systemapi
     */
    public collect(): PerformanceMetrics {
      return {
        cpuUsage: 0,
        memoryUsage: 0,
        networkLatency: 0,
        diskIO: 0,
        timestamp: Date.now()
      };
    }

    /**
     * Gets historical metrics.
     *
     * @param count - Number of records to retrieve
     * @returns Array of metrics
     * @since 20
     */
    public getHistory(count: number): PerformanceMetrics[] {
      return this.metrics.slice(-count);
    }

    /**
     * Adds an alert configuration.
     *
     * @param config - Alert configuration
     * @since 20
     * @systemapi
     */
    public addAlert(config: AlertConfig): void {
      this.alerts.push(config);
    }

    /**
     * Clears all alerts.
     *
     * @since 20
     */
    public clearAlerts(): void {
      this.alerts = [];
    }
  }

  /**
   * Logger instance class.
   *
   * @since 20
   */
  export class Logger {
    private config: LoggerConfig;
    private entries: LogEntry[] = [];

    /**
     * Creates a new logger.
     *
     * @param config - Logger configuration
     * @since 20
     */
    constructor(config: LoggerConfig) {
      this.config = config;
    }

    /**
     * Logs a debug message.
     *
     * @param message - Message to log
     * @param context - Additional context
     * @since 20
     */
    public debug(message: string, context?: Record<string, any>): void {
      this.log(LogLevel.DEBUG, message, context);
    }

    /**
     * Logs an info message.
     *
     * @param message - Message to log
     * @param context - Additional context
     * @since 20
     */
    public info(message: string, context?: Record<string, any>): void {
      this.log(LogLevel.INFO, message, context);
    }

    /**
     * Logs an error message.
     *
     * @param message - Message to log
     * @param error - Error object
     * @since 20
     * @systemapi
     */
    public error(message: string, error?: Error): void {
      this.log(LogLevel.ERROR, message, { error });
    }

    /**
     * Internal log method.
     *
     * @param level - Log level
     * @param message - Message to log
     * @param context - Additional context
     * @since 20
     * @systemapi
     */
    private log(level: LogLevel, message: string, context?: Record<string, any>): void {
      this.entries.push({ level, message, context, timestamp: Date.now() });
    }

    /**
     * Gets log entries.
     *
     * @param level - Filter by level
     * @returns Log entries
     * @since 20
     */
    public getEntries(level?: LogLevel): LogEntry[] {
      if (level) {
        return this.entries.filter(e => e.level >= level);
      }
      return this.entries;
    }
  }

  /**
   * Log entry structure.
   *
   * @since 20
   */
  export interface LogEntry {
    level: LogLevel;
    message: string;
    context?: Record<string, any>;
    timestamp: number;
  }

  /**
   * Creates a new logger instance.
   *
   * @param config - Logger configuration
   * @returns New logger instance
   * @since 20
   * @systemapi
   */
  export function createLogger(config: LoggerConfig): Logger {
    return new Logger(config);
  }

  /**
   * Creates a new system monitor.
   *
   * @returns New monitor instance
   * @since 20
   */
  export function createMonitor(): SystemMonitor {
    return new SystemMonitor();
  }

  /**
   * Formats a log entry.
   *
   * @param entry - Entry to format
   * @param format - Format options
   * @returns Formatted string
   * @since 20
   */
  export function formatEntry(entry: LogEntry, format: LogFormat): string {
    let result = '';
    if (format.timestamp) result += `[${entry.timestamp}] `;
    if (format.level) result += `[${LogLevel[entry.level]}] `;
    result += entry.message;
    return result;
  }
}