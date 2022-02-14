declare enum MessageLevel {
  /**
   * Debug level.
   * @since 8
   */
  Debug,

  /**
   * Error level.
   * @since 8
   */
  Error,

  /**
   * Info level.
   * @since 8
   */
  Info,

  /**
   * Log level.
   * @since 8
   */
  Log,

  /**
   * Warn level.
   * @since 8
   */
  Warn
}

declare class JsResult {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Handle the user's JavaScript result if cancel the dialog.
   * @since 8
   */
  handleCancel(): void;

  /**
   * Handle the user's JavaScript result if confirm the dialog.
   * @since 8
   */
  handleConfirm(): void;
}

declare class ConsoleMessage {
  /**
   * Constructor.
   * @since 8
   */
  constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel);

  /**
   * Get the message of a console message.
   *
   * @return Return the message of a console message.
   * @since 8
   */
  getMessage(): string;

  /**
   * Get the source id of a console message.
   *
   * @return Return the source id of a console message.
   * @since 8
   */
  getSourceId(): string;

  /**
   * Get the line number of a console message.
   *
   * @return Return the line number of a console message.
   * @since 8
   */
  getLineNumber(): number;

  /**
   * Get the message level of a console message.
   *
   * @return Return the message level of a console message, which can be {@link MessageLevel}.
   * @since 8
   */
  getMessageLevel(): MessageLevel;
}

declare class WebResourceRequest {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Get request headers.
   *
   * @return Return a map of the request headers
   * @since 8
   */
  getRequestHeader(): Map<string, string>;

  /**
   * Get the request url.
   *
   * @return Return the request url.
   * @since 8
   */
  getRequestUrl(): string;

  /**
   * Check whether the request is associated with gesture.
   *
   * @return Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
   * @since 8
   */
  isRequestGesture(): boolean;

  /**
   * Check whether the request is for getting the main frame.
   *
   * @return Return {@code true} if the request is associated with gesturefor getting the main frame; return {@code false} otherwise.
   * @since 8
   */
  isMainFrame(): boolean;

  /**
   * Check whether the request redirects.
   *
   * @return Return {@code true} if the request redirects; return {@code false} otherwise.
   * @since 8
   */
  isRedirect(): boolean;
}

declare class WebResourceError {
  /**
   * Constructor.
   * @since 8
   */
  constructor();

  /**
   * Get the info of the web resource error.
   *
   * @return Return the info of the web resource error.
   * @since 8
   */
  getErrorInfo(): string;

  /**
   * Get the code of the web resource error.
   *
   * @return Return the code of the web resource error.
   * @since 8
   */
  getErrorCode(): number;
}

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

  /**
  * Check whether the web page can go back
  * @since 8
  */
  accessBackward(): boolean;

  /**
  * Check whether the web page can go forward
  * @since 8
  */
  accessForward(): boolean;

  /**
  * Check whether the web page can go back or forward the given number of steps
  * @since 8
  */
  accessStep(step: number): boolean;

  /**
  * Go back in the history of the web
  * @since 8
  */
  backward();

  /**
  * Go forward in the history of the web
  * @since 8
  */
  forward();

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
   * Triggered when the web page wants to display a JavaScript alert() dialog.
   *
   * @param callback The triggered function when the web page wants to display a JavaScript alert() dialog.
   * @since 8
   */
  onAlert(callback: (event?: { url: string, message: string, result: JsResult }) => boolean): WebAttribute;

  /**
   * Triggered when the web page wants to confirm navigation from JavaScript onbeforeunload.
   *
   * @param callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
   * @since 8
   */
  onBeforeUnload(callback: (event?: { message: string, result: JsResult }) => boolean): WebAttribute;

  /**
   * Triggered when the web page wants to display a JavaScript confirm() dialog.
   *
   * @param callback The Triggered function when the web page wants to display a JavaScript confirm() dialog.
   * @since 8
   */
  onConfirm(callback: (event?: {url: string, message: string, result: JsResult }) => boolean): WebAttribute;

  /**
   * Triggered when the web page receives a JavaScript console message.
   *
   * @param callback The triggered function when the web page receives a JavaScript console message.
   * @since 8
   */
  onConsole(callback: (event?: {message: ConsoleMessage}) => boolean): WebAttribute;

  /**
   * Triggered when the web page receives a web resource loading error.
   *
   * @param callback The triggered function when the web page receives a web resource loading error.
   * @since 8
   */
  onErrorReceive(callback: (event?: {request: WebResourceRequest, error: WebResourceError}) => void): WebAttribute;

  /**
   * Triggered when the web page receives a web resource loading HTTP error.
   *
   * @param callback The triggered function when the web page receives a web resource loading HTTP error.
   * @since 8
   */
  onHttpErrorReceive(callback: (event?: {request: WebResourceRequest, error: WebResourceError}) => void): WebAttribute;

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
