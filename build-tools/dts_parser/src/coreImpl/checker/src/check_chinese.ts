import {
    ErrorTagFormat,
    NameDictionaryType,
    NameScenarioType,
    ErrorMessage,
} from '../../../typedef/checker/result_type';
import {ApiInfo} from '../../../typedef/parser/ApiInfoDefination';
import {CommonFunctions} from '../../../utils/checkUtils';
import {Comment} from "../../../typedef/parser/Comment";

const nameDictionary = require('../config/name_dictionary.json');
const nameScenarioScope = require('../config/name_scenario_scope.json');

export class ChineseCheck {

    static isChinese(str: string): boolean {
        return /[\u4e00-\u9fa5]/.test(str);
    }

    /**
     * 检查是否有中文
     * @param comment
     * @param node
     * @param sourcefile
     * @param fileName
     * @param JSocIndex
     * @returns {{errorInfo: string, checkResult: boolean}}
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
            console.log(tag.tokenSource)

            for (let i = 0; i < tag.tokenSource.length; i++) {
                if (this.isChinese(tag.tokenSource[i].source)) {
                    checkResult.state = false;
                    checkResult.errorInfo = CommonFunctions.createErrorInfo(ErrorMessage.ERROR_HAS_CHINESE, [tag.tag]);
                }
            }

        });
        console.log(checkResult )
        return checkResult;
    }


}


