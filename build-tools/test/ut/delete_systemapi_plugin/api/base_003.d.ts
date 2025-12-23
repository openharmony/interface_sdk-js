/**
 * @since 20
 * @systemapi
 */
export namespace TestModuleB {
  /**
   * @since 20
   * @systemapi
   */
  import { TestResult, OperationStatus } from './TestModuleA';

  /**
   * @since 20
   * @systemapi
   */
  export class ResponseHandler {
    /**
     * @since 20
     * @systemapi
     */
    private responses: TestResult<any>[] = [];

    /**
     * @since 20
     * @systemapi
     */
    public addResponse<T>(result: TestResult<T>): void {
      this.responses.push(result);
    }

    /**
     * @since 20
     * @systemapi
     */
    public getLastStatus(): OperationStatus {
      const lastResponse = this.responses[this.responses.length - 1];
      return lastResponse?.success ? OperationStatus.COMPLETED : OperationStatus.FAILED;
    }

    /**
     * @since 20
     * @systemapi
     */
    public getAllResults(): TestResult<any>[] {
      return [...this.responses];
    }
  }

  /**
   * @since 20
   * @systemapi
   */
  export type LocalTypeOnly = {
    id: string;
    name: string;
    value: number;
  };

  /**
   * @since 20
   * @systemapi
   */
  export enum ResponseCode {
    /**
     * @since 20
     * @systemapi
     */
    OK = 200,
    /**
     * @since 20
     * @systemapi
     */
    CREATED = 201,
    /**
     * @since 20
     * @systemapi
     */
    BAD_REQUEST = 400,
    /**
     * @since 20
     * @systemapi
     */
    UNAUTHORIZED = 401,
    /**
     * @since 20
     * @systemapi
     */
    NOT_FOUND = 404,
    /**
     * @since 20
     * @systemapi
     */
    INTERNAL_ERROR = 500
  }

  /**
   * @since 20
   * @systemapi
   */
  export interface ProcessingOptions {
    /**
     * @since 20
     * @systemapi
     */
    maxRetries: number;
    /**
     * @since 20
     * @systemapi
     */
    timeout: number;
    /**
     * @since 20
     * @systemapi
     */
    fallbackEnabled: boolean;
    /**
     * @since 20
     * @systemapi
     */
    logging: {
      level: 'debug' | 'info' | 'warn' | 'error';
      format: 'json' | 'text';
    };
  }

  /**
   * @since 20
   * @systemapi
   */
  export function processWithOptions(
    options: ProcessingOptions,
    handler: ResponseHandler
  ): TestResult<ProcessingOptions> {
    return {
      success: true,
      data: options,
      timestamp: new Date(),
      metadata: {
        handlerType: handler.constructor.name,
        processedAt: Date.now()
      }
    };
  }
}