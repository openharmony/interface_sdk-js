import {ErrorMessage, ErrorTagFormat,} from '../../../typedef/checker/result_type';
import {CommonFunctions} from '../../../utils/checkUtils';
import {Comment} from "../../../typedef/parser/Comment";

export class ChineseCheck {

    static isChinese(str: string): boolean {
        return /[\u4e00-\u9fa5]/.test(str);
    }

    /**
     * 校验注释是否有中文
     *
     * @param {Comment.JsDocInfo} apiJsdoc
     * @return {ErrorTagFormat}
     */
    static checkChinese(apiJsdoc: Comment.JsDocInfo): ErrorTagFormat {
        const checkResult: ErrorTagFormat = {
            state: true,
            errorInfo: '',
        };

        if (this.isChinese(apiJsdoc.description)) {
            checkResult.state = false;
            checkResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_HAS_CHINESE, [
                apiJsdoc.description
            ]);
        }

        const tagsName: Comment.CommentTag[] | undefined = apiJsdoc.tags;
        if (tagsName === undefined) {
            return checkResult;
        }
        tagsName.forEach((tag) => {
            for (let i = 0; i < tag.tokenSource.length; i++) {
                if (this.isChinese(tag.tokenSource[i].source)) {
                    checkResult.state = false;
                    checkResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_HAS_CHINESE, [tag.tag]);
                }
            }
        });
        return checkResult;
    }
}


