import {Comment} from "../../../typedef/parser/Comment";
import {ErrorMessage, ErrorTagFormat} from "../../../typedef/checker/result_type";
import {CommonFunctions} from "../../../utils/checkUtils";

export class CheckErrorCode {

    static errorCodeList: number[] = [201, 202, 203, 301, 401, 501, 502, 801, 901];

    static isArrayNotEmpty(arr: any): boolean {
        return Array.isArray(arr) && arr.length > 0;
    }

    static hasNumberInArray(arr1: number[], arr2: number[]): boolean {
        return arr1.every(num => arr2.includes(num));
    }

    static checkErrorCode(apiJsdoc: Comment.JsDocInfo): ErrorTagFormat {
        const checkResult: ErrorTagFormat = {
            state: true,
            errorInfo: '',
        };

        const errorCodes = apiJsdoc.errorCodes.filter(number => number >= 100 && number < 1000);;
        if (this.isArrayNotEmpty(errorCodes)) {
            if (!this.hasNumberInArray(errorCodes, this.errorCodeList)) {
                checkResult.state = false;
                checkResult.errorInfo = ErrorMessage.ERROR_ERROR_CODE;
            }
        }
        return checkResult;
    }
}