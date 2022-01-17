declare class WebController {
    constructor();
   /**
    * Means to load a piece of code and execute JS code in the context of the currently displayed page
    * @since 8
    */
    evaluateJavaScript(jscode: string);
   /**
    * Indicates that a piece of code is loaded
    * @since 8
    */
    loadDataWithBaseURL(value : {baseUrl: string, data: string, mimeType:string, encoding:string, historyUrl: string});
   /**
    * Load the given URL
    * @since 8
    */
    loadUrl(url : string);
}
declare interface WebOptions {
   /**
    * Set the address of the web page to be displayed
    * @since 8
    */
    src: string | Resource;
    controller: WebController;
}
interface Web extends WebAttribute<Web> {
    (value: WebOptions): Web;
}
declare class WebAttribute<T> extends CommonMethod<T> {
   /**
    * Triggered at the end of web page loading
    * @since 8
    */
    onPageFinish(callback: (event?:{ url: string }) => void): T;
   /**
    * Get WebView focus callback event
    * @since 8
    */
    onRequestFocus(event: () => void): T;
   /**
    * Set whether WebView allows JavaScript scripts to execute
    * @since 8
    */
    javaScriptEnabled(value: boolean): T;
   /**
    * Enable or disable local file system access in WebView
    * @since 8
    */
    fileAccessEnabled(value: boolean): T;
}
declare class WebExtend<T> extends WebAttribute<T> {
}
declare const Web: Web;
