declare class WebController {
    /**
     * Constructor.
     * @since 8
     */
    constructor();

   /**
    * Means to load a piece of code and execute JS code in the context of the currently displayed page
    * @since 8
    */
    runJavaScript(jscode: string);

   /**
    * Indicates that a piece of code is loaded
    * @since 8
    */
    loadData(value: { baseUrl: string, data: string, mimeType: string, encoding: string, historyUrl: string });

   /**
    * Load the given URL
    * @since 8
    */
    loadUrl(url: string);
}

declare interface WebOptions {
   /**
    * Set the address of the web page to be displayed
    * @since 8
    */
    src: string | Resource;
    controller: WebController;
}

interface WebInterface {
    /**
     * Set Value.
     * @since 8
     */
    (value: WebOptions): WebAttribute;
}

declare class WebAttribute extends CommonMethod<WebAttribute> {
   /**
    * Set whether WebView allows JavaScript scripts to execute
    * @since 8
    */
    javaScriptAccess(javaScriptAccess: boolean): WebAttribute;

   /**
    * Enable or disable local file system access in WebView
    * @since 8
    */
    fileAccess(fileAccess: boolean): WebAttribute;

   /**
    * Triggered at the end of web page loading
    * @since 8
    */
    onPageEnd(callback: (event?: { url: string }) => void): WebAttribute;

   /**
    * Get WebView focus callback event
    * @since 8
    */
    onRequestSelected(event: () => void): WebAttribute;

   /**
    * Just use for genetate tsbundle
    * @ignore ide should ignore this arrtibute
    */
    create(value: WebOptions): WebAttribute;

   /**
    * Just use for genetate tsbundle
    * @ignore ide should ignore this arrtibute
    */
    debugLine(value: string): WebAttribute; 
}

declare const Web: WebInterface;
declare const WebInstance: WebAttribute;
