import call from '@ohos.telephony.call';
import { common } from '@kit.AbilityKit';

export type MarkType = call.MarkType;

/**
 * Provides methods related to call management.
 *
 * @namespace call
 * @syscap SystemCapability.Telephony.CallManager
 * @atomicservice
 * @since 11
 */
declare namespace numberLookup {

  export interface MarkNumberParams {
    markType: MarkType;
    accountNumber: string;
    formatNumber: string;
    customMark?: string;
  }

  function setNumberMarkInfo(
    context: common.Context, 
    accountNumber: string, 
    markType: call.MarkType, 
    customMark?: string
  ): Promise<void>;

  function getNumberMarkInfo(
    context: common.Context,
    accountNumber: string,
  ): Promise<call.NumberMarkInfo>;

  function getNumberLocations(
    context: common.Context,
    accountNumber: string,
  ): Promise<call.NumberMarkInfo>;

    function getNumberLocation(
    context: common.Context,
    accountNumber: string,
    isExactMatch?: boolean
  ): Promise<string>;

    function getNumberLocations(
    context: common.Context,
    accountNumbers: Array<string>
  ): Promise<Array<string>>;

}

export default numberLookup;