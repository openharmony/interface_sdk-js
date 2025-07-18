/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 * @arkts 1.2
 */


// WARNING! THIS FILE IS AUTO-GENERATED, DO NOT MAKE CHANGES, THEY WILL BE LOST ON NEXT GENERATION!

import { memo, ComponentBuilder, __memo_context_type, __memo_id_type } from './../stateManagement/runtime'
import { CustomBuilder, TouchEvent, CommonMethod, DrawModifier, Rectangle, Callback_Array_TouchTestInfo_TouchResult, TouchTestInfo, TouchResult, PixelRoundPolicy, BackgroundEffectOptions, ForegroundEffectOptions, BorderImageOption, OutlineStyle, Callback_ClickEvent_Void, ClickEvent, Callback_Boolean_HoverEvent_Void, HoverEvent, AccessibilityCallback, Callback_MouseEvent_Void, MouseEvent, Callback_TouchEvent_Void, Callback_KeyEvent_Void, KeyEvent, Callback_KeyEvent_Boolean, AnimateParam, TransitionOptions, TransitionEffect, MotionBlurOptions, InvertOptions, TranslateOptions, ScaleOptions, RotateOptions, Callback_Area_Area_Void, Literal_Union_Number_Literal_Number_offset_span_lg_md_sm_xs, Literal_Number_offset_span, AlignRuleOption, LocalizedAlignRuleOptions, ClickEffect, Callback_DragEvent_String_Union_CustomBuilder_DragItemInfo, DragEvent, DragItemInfo, Callback_DragEvent_String_Void, Callback_PreDragStatus_Void, PreDragStatus, Type_CommonMethod_linearGradient_value, Tuple_ResourceColor_Number, Type_CommonMethod_sweepGradient_value, Tuple_Length_Length, Type_CommonMethod_radialGradient_value, MotionPathOptions, ShadowOptions, ShadowStyle, ProgressMask, StateStyles, PixelStretchEffectOptions, AttributeModifier, GestureModifier, BackgroundBrightnessOptions, Callback_GestureInfo_BaseGestureEvent_GestureJudgeResult, GestureRecognizerJudgeBeginCallback, ShouldBuiltInRecognizerParallelWithCallback, Callback_TouchEvent_HitTestMode, SizeChangeCallback, SafeAreaType, SafeAreaEdge, Literal_Alignment_align, BlurStyle, BackgroundBlurStyleOptions, ForegroundBlurStyleOptions, TransitionFinishCallback, BlurOptions, LinearGradientBlurOptions, EffectType, sharedTransitionOptions, ChainStyle, DragPreviewOptions, DragInteractionOptions, OverlayOptions, BlendMode, BlendApplyType, GeometryTransitionOptions, PopupOptions, CustomPopupOptions, MenuElement, MenuOptions, ContextMenuOptions, ModalTransition, ContentCoverOptions, SheetOptions, VisibleAreaChangeCallback, NestedScrollOptions } from './common'
import { Resource } from './../../../api/global/resource'
import { Position, PixelMap, VisualEffect, Filter, UniformDataType, Blender, Length, SizeOptions, ConstraintSizeOptions, ChainWeightOptions, Padding, LocalizedPadding, Margin, LocalizedMargin, ResourceColor, BorderOptions, EdgeStyles, EdgeWidths, LocalizedEdgeWidths, EdgeColors, LocalizedEdgeColors, BorderRadiuses, LocalizedBorderRadiuses, OutlineOptions, EdgeOutlineStyles, Dimension, EdgeOutlineWidths, OutlineRadiuses, Area, Edges, LocalizedEdges, LocalizedPosition, ResourceStr, AccessibilityOptions } from './units'
import { MenuType, EditMenuOptions } from './textCommon'
import { ComponentContent } from './../ComponentContent'
import { HitTestMode, ImageSize, Alignment, BorderStyle, ColoringStrategy, HoverEffect, Color, Visibility, ItemAlign, Direction, GradientDirection, ObscuredReasons, RenderFit, ImageRepeat, Axis, ResponseType, FunctionKey, ModifierKey, CopyOptions, NestedScrollMode } from './enums'
// FIXME when we have a @ohos.web.webview.d.ets replace this stub
type WebviewController = string
export type OnNavigationEntryCommittedCallback = (loadCommittedDetails: LoadCommittedDetails) => void;
export type OnSslErrorEventCallback = (sslErrorEvent: SslErrorEvent) => void;
export type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void;
export type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void;
export type OnOverrideUrlLoadingCallback = (webResourceRequest: WebResourceRequest) => boolean;
export type OnIntelligentTrackingPreventionCallback = (details: IntelligentTrackingPreventionDetails) => void;
export type OnNativeEmbedVisibilityChangeCallback = (nativeEmbedVisibilityInfo: NativeEmbedVisibilityInfo) => void;
export interface NativeMediaPlayerConfig {
    enable: boolean;
    shouldOverlay: boolean;
}
export type OnRenderProcessNotRespondingCallback = (data: RenderProcessNotRespondingData) => void;
export type OnRenderProcessRespondingCallback = () => void;
export type OnViewportFitChangedCallback = (viewportFit: ViewportFit) => void;
export type OnAdsBlockedCallback = (details: AdsBlockedDetails) => void;
export interface AdsBlockedDetails {
    url: string;
    adsBlocked: Array<string>;
}
export interface WebKeyboardOptions {
    useSystemKeyboard: boolean;
    enterKeyType?: number;
    customKeyboard?: CustomBuilder;
}
export interface WebKeyboardController {
    insertText(text: string): void
    deleteForward(length: number): void
    deleteBackward(length: number): void
    sendFunctionKey(key: number): void
    close(): void
}
export interface WebKeyboardCallbackInfo {
    controller: WebKeyboardController;
    attributes: Map<string, string>;
}
export type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions;
export enum MessageLevel {
    DEBUG = 0,
    Debug = 0,
    ERROR = 1,
    Error = 1,
    INFO = 2,
    Info = 2,
    LOG = 3,
    Log = 3,
    WARN = 4,
    Warn = 4
}
export enum MixedMode {
    ALL = 0,
    All = 0,
    COMPATIBLE = 1,
    Compatible = 1,
    NONE = 2,
    None = 2
}
export type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void;
export enum HitTestType {
    EDIT_TEXT = 0,
    EditText = 0,
    EMAIL = 1,
    Email = 1,
    HTTP_ANCHOR = 2,
    HttpAnchor = 2,
    HTTP_ANCHOR_IMG = 3,
    HttpAnchorImg = 3,
    IMG = 4,
    Img = 4,
    MAP = 5,
    Map = 5,
    PHONE = 6,
    Phone = 6,
    UNKNOWN = 7,
    Unknown = 7
}
export enum CacheMode {
    DEFAULT = 0,
    Default = 0,
    NONE = 1,
    None = 1,
    ONLINE = 2,
    Online = 2,
    ONLY = 3,
    Only = 3
}
export enum OverScrollMode {
    NEVER = 0,
    ALWAYS = 1
}
export enum WebDarkMode {
    OFF = 0,
    Off = 0,
    ON = 1,
    On = 1,
    AUTO = 2,
    Auto = 2
}
export enum WebCaptureMode {
    HOME_SCREEN = 0
}
export enum ThreatType {
    THREAT_ILLEGAL = 0,
    THREAT_FRAUD = 1,
    THREAT_RISK = 2,
    THREAT_WARNING = 3
}
export interface WebMediaOptions {
    resumeInterval?: number;
    audioExclusive?: boolean;
}
export interface ScreenCaptureConfig {
    captureMode: WebCaptureMode;
}
export interface FullScreenExitHandler {
    exitFullScreen(): void
}
export interface FullScreenEnterEvent {
    handler: FullScreenExitHandler;
    videoWidth?: number;
    videoHeight?: number;
}
export type OnFullScreenEnterCallback = (event: FullScreenEnterEvent) => void;
export enum RenderExitReason {
    PROCESS_ABNORMAL_TERMINATION = 0,
    ProcessAbnormalTermination = 0,
    PROCESS_WAS_KILLED = 1,
    ProcessWasKilled = 1,
    PROCESS_CRASHED = 2,
    ProcessCrashed = 2,
    PROCESS_OOM = 3,
    ProcessOom = 3,
    PROCESS_EXIT_UNKNOWN = 4,
    ProcessExitUnknown = 4
}
export type OnContextMenuHideCallback = () => void;
export enum SslError {
    INVALID = 0,
    Invalid = 0,
    HOST_MISMATCH = 1,
    HostMismatch = 1,
    DATE_INVALID = 2,
    DateInvalid = 2,
    UNTRUSTED = 3,
    Untrusted = 3
}
export enum FileSelectorMode {
    FILE_OPEN_MODE = 0,
    FileOpenMode = 0,
    FILE_OPEN_MULTIPLE_MODE = 1,
    FileOpenMultipleMode = 1,
    FILE_OPEN_FOLDER_MODE = 2,
    FileOpenFolderMode = 2,
    FILE_SAVE_MODE = 3,
    FileSaveMode = 3
}
export enum WebLayoutMode {
    NONE = 0,
    FIT_CONTENT = 1
}
export enum RenderProcessNotRespondingReason {
    INPUT_TIMEOUT = 0,
    NAVIGATION_COMMIT_TIMEOUT = 1
}
export interface FileSelectorParam {
    getTitle(): string
    getMode(): FileSelectorMode
    getAcceptType(): Array<string>
    isCapture(): boolean
}
export interface JsResult {
    handleCancel(): void
    handleConfirm(): void
    handlePromptConfirm(result: string): void
}
export interface FileSelectorResult {
    handleFileList(fileList: Array<string>): void
}
export interface HttpAuthHandler {
    confirm(userName: string, password: string): boolean
    cancel(): void
    isHttpAuthInfoSaved(): boolean
}
export interface SslErrorHandler {
    handleConfirm(): void
    handleCancel(): void
}
export interface ClientAuthenticationHandler {
    confirm(priKeyFile: string, certChainFile: string): void

    cancel(): void
    ignore(): void
}
export enum ProtectedResourceType {
    MIDI_SYSEX = 'TYPE_MIDI_SYSEX',
    MidiSysex = 'TYPE_MIDI_SYSEX',
    VIDEO_CAPTURE = 'TYPE_VIDEO_CAPTURE',
    AUDIO_CAPTURE = 'TYPE_AUDIO_CAPTURE',
    SENSOR = 'TYPE_SENSOR'
}
export interface PermissionRequest {
    deny(): void
    getOrigin(): string
    getAccessibleResource(): Array<string>
    grant(resources: Array<string>): void
}
export interface ScreenCaptureHandler {
    getOrigin(): string
    grant(config: ScreenCaptureConfig): void
    deny(): void
}
export interface DataResubmissionHandler {
    resend(): void
    cancel(): void
}
export interface ControllerHandler {
    setWebController(controller: WebviewController): void
}
export enum ContextMenuSourceType {
    NONE = 0,
    None = 0,
    MOUSE = 1,
    Mouse = 1,
    LONG_PRESS = 2,
    LongPress = 2
}
export enum ContextMenuMediaType {
    NONE = 0,
    None = 0,
    IMAGE = 1,
    Image = 1
}
export enum ContextMenuInputFieldType {
    NONE = 0,
    None = 0,
    PLAIN_TEXT = 1,
    PlainText = 1,
    PASSWORD = 2,
    Password = 2,
    NUMBER = 3,
    Number = 3,
    TELEPHONE = 4,
    Telephone = 4,
    OTHER = 5,
    Other = 5
}
export enum NativeEmbedStatus {
    CREATE = 0,
    UPDATE = 1,
    DESTROY = 2,
    ENTER_BFCACHE = 3,
    LEAVE_BFCACHE = 4
}
export enum ContextMenuEditStateFlags {
    NONE = 0,
    CAN_CUT = 1,
    CAN_COPY = 2,
    CAN_PASTE = 4,
    CAN_SELECT_ALL = 8
}
export enum WebNavigationType {
    UNKNOWN = 0,
    MAIN_FRAME_NEW_ENTRY = 1,
    MAIN_FRAME_EXISTING_ENTRY = 2,
    NAVIGATION_TYPE_NEW_SUBFRAME = 4,
    NAVIGATION_TYPE_AUTO_SUBFRAME = 5
}
export enum RenderMode {
    ASYNC_RENDER = 0,
    SYNC_RENDER = 1
}
export enum ViewportFit {
    AUTO = 0,
    CONTAINS = 1,
    COVER = 2
}
export interface WebContextMenuParam {
    x(): number
    y(): number
    getLinkUrl(): string
    getUnfilteredLinkUrl(): string
    getSourceUrl(): string
    existsImageContents(): boolean
    getMediaType(): ContextMenuMediaType
    getSelectionText(): string
    getSourceType(): ContextMenuSourceType
    getInputFieldType(): ContextMenuInputFieldType
    isEditable(): boolean
    getEditStateFlags(): number
    getPreviewWidth(): number
    getPreviewHeight(): number
}
export interface WebContextMenuResult {
    closeContextMenu(): void
    copyImage(): void
    copy(): void
    paste(): void
    cut(): void
    selectAll(): void
}
export interface ConsoleMessage {
    getMessage(): string
    getSourceId(): string
    getLineNumber(): number
    getMessageLevel(): MessageLevel
}
export interface WebResourceRequest {
    getRequestHeader(): Array<Header>
    getRequestUrl(): string
    isRequestGesture(): boolean
    isMainFrame(): boolean
    isRedirect(): boolean
    getRequestMethod(): string
}
export interface WebResourceResponse {
    getResponseData(): string
    getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined
    getResponseEncoding(): string
    getResponseMimeType(): string
    getReasonMessage(): string
    getResponseHeader(): Array<Header>
    getResponseCode(): number
    setResponseData(data: string | number | Resource | ArrayBuffer): void
    setResponseEncoding(encoding: string): void
    setResponseMimeType(mimeType: string): void
    setReasonMessage(reason: string): void
    setResponseHeader(header: Array<Header>): void
    setResponseCode(code: number): void
    setResponseIsReady(IsReady: boolean): void
    getResponseIsReady(): boolean
}
export interface Header {
    headerKey: string;
    headerValue: string;
}
export interface WebResourceError {
    getErrorInfo(): string
    getErrorCode(): number
}
export interface JsGeolocation {
    invoke(origin: string, allow: boolean, retain: boolean): void
}
export interface WebCookie {
    setCookie(): undefined
    saveCookie(): undefined
}
export interface EventResult {
    setGestureEventResult(result: boolean): void
}
export interface Literal_String_script_Callback_String_Void_callback_ {
    script: string;
    callback_?: ((breakpoints: string) => void);
}
export interface Literal_String_baseUrl_data_encoding_historyUrl_mimeType {
    data: string;
    mimeType: string;
    encoding: string;
    baseUrl?: string;
    historyUrl?: string;
}
export interface Literal_Union_String_Resource_url_Array_Header_headers {
    url: string | Resource;
    headers?: Array<Header>;
}
export interface Literal_Object_object__String_name_Array_String_methodList {
    object_: Object;
    name: string;
    methodList: Array<string>;
}
export interface WebController {
    onInactive(): void
    onActive(): void
    zoom(factor: number): void
    clearHistory(): void
    runJavaScript(options: Literal_String_script_Callback_String_Void_callback_): undefined
    loadData(options: Literal_String_baseUrl_data_encoding_historyUrl_mimeType): undefined
    loadUrl(options: Literal_Union_String_Resource_url_Array_Header_headers): undefined
    refresh(): undefined
    stop(): undefined
    registerJavaScriptProxy(options: Literal_Object_object__String_name_Array_String_methodList): undefined
    deleteJavaScriptRegister(name: string): undefined
    getHitTest(): HitTestType
    requestFocus(): undefined
    accessBackward(): boolean
    accessForward(): boolean
    accessStep(step: number): boolean
    backward(): undefined
    forward(): undefined
    getCookieManager(): WebCookie
}
export interface WebOptions {
    src: string | Resource;
    controller: WebController | WebviewController;
    renderMode?: RenderMode;
    incognitoMode?: boolean;
    sharedRenderProcessToken?: string;
}
export interface ScriptItem {
    script: string;
    scriptRules: Array<string>;
}
export interface LoadCommittedDetails {
    isMainFrame: boolean;
    isSameDocument: boolean;
    didReplaceEntry: boolean;
    navigationType: WebNavigationType;
    url: string;
}
export interface IntelligentTrackingPreventionDetails {
    host: string;
    trackerHost: string;
}
export type WebInterface = (value: WebOptions) => WebAttribute;
export interface NativeEmbedInfo {
    id?: string;
    type?: string;
    src?: string;
    position?: Position;
    width?: number;
    height?: number;
    url?: string;
    tag?: string;
    params?: Map<string, string>;
}
export interface NativeEmbedDataInfo {
    status?: NativeEmbedStatus;
    surfaceId?: string;
    embedId?: string;
    info?: NativeEmbedInfo;
}
export interface NativeEmbedVisibilityInfo {
    visibility: boolean;
    embedId: string;
}
export interface NativeEmbedTouchInfo {
    embedId?: string;
    touchEvent?: TouchEvent;
    result?: EventResult;
}
export interface FirstMeaningfulPaint {
    navigationStartTime?: number;
    firstMeaningfulPaintTime?: number;
}
export interface LargestContentfulPaint {
    navigationStartTime?: number;
    largestImagePaintTime?: number;
    largestTextPaintTime?: number;
    imageBPP?: number;
    largestImageLoadStartTime?: number;
    largestImageLoadEndTime?: number;
}
export interface RenderProcessNotRespondingData {
    jsStack: string;
    pid: number;
    reason: RenderProcessNotRespondingReason;
}
export interface OnPageEndEvent {
    url: string;
}
export interface OnPageBeginEvent {
    url: string;
}
export interface OnProgressChangeEvent {
    newProgress: number;
}
export interface OnTitleReceiveEvent {
    title: string;
}
export interface OnGeolocationShowEvent {
    origin: string;
    geolocation: JsGeolocation;
}
export interface OnAlertEvent {
    url: string;
    message: string;
    result: JsResult;
}
export interface OnBeforeUnloadEvent {
    url: string;
    message: string;
    result: JsResult;
}
export interface OnConfirmEvent {
    url: string;
    message: string;
    result: JsResult;
}
export interface OnPromptEvent {
    url: string;
    message: string;
    value: string;
    result: JsResult;
}
export interface OnConsoleEvent {
    message: ConsoleMessage;
}
export interface OnErrorReceiveEvent {
    request: WebResourceRequest;
    error: WebResourceError;
}
export interface OnHttpErrorReceiveEvent {
    request: WebResourceRequest;
    response: WebResourceResponse;
}
export interface OnDownloadStartEvent {
    url: string;
    userAgent: string;
    contentDisposition: string;
    mimetype: string;
    contentLength: number;
}
export interface OnRefreshAccessedHistoryEvent {
    url: string;
    isRefreshed: boolean;
}
export interface OnRenderExitedEvent {
    renderExitReason: RenderExitReason;
}
export interface OnShowFileSelectorEvent {
    result: FileSelectorResult;
    fileSelector: FileSelectorParam;
}
export interface OnResourceLoadEvent {
    url: string;
}
export interface OnScaleChangeEvent {
    oldScale: number;
    newScale: number;
}
export interface OnHttpAuthRequestEvent {
    handler: HttpAuthHandler;
    host: string;
    realm: string;
}
export interface OnInterceptRequestEvent {
    request: WebResourceRequest;
}
export interface OnPermissionRequestEvent {
    request: PermissionRequest;
}
export interface OnScreenCaptureRequestEvent {
    handler: ScreenCaptureHandler;
}
export interface OnContextMenuShowEvent {
    param: WebContextMenuParam;
    result: WebContextMenuResult;
}
export interface OnSearchResultReceiveEvent {
    activeMatchOrdinal: number;
    numberOfMatches: number;
    isDoneCounting: boolean;
}
export interface OnScrollEvent {
    xOffset: number;
    yOffset: number;
}
export interface OnSslErrorEventReceiveEvent {
    handler: SslErrorHandler;
    error: SslError;
    certChainData?: Array<ArrayBuffer>;
}
export interface OnClientAuthenticationEvent {
    handler: ClientAuthenticationHandler;
    host: string;
    port: number;
    keyTypes: Array<string>;
    issuers: Array<string>;
}
export interface OnWindowNewEvent {
    isAlert: boolean;
    isUserTrigger: boolean;
    targetUrl: string;
    handler: ControllerHandler;
}
export interface OnTouchIconUrlReceivedEvent {
    url: string;
    precomposed: boolean;
}
export interface OnFaviconReceivedEvent {
    favicon: PixelMap;
}
export interface OnPageVisibleEvent {
    url: string;
}
export interface OnDataResubmittedEvent {
    handler: DataResubmissionHandler;
}
export interface OnAudioStateChangedEvent {
    playing: boolean;
}
export interface OnFirstContentfulPaintEvent {
    navigationStartTick: number;
    firstContentfulPaintMs: number;
}
export interface OnLoadInterceptEvent {
    data: WebResourceRequest;
}
export interface OnOverScrollEvent {
    xOffset: number;
    yOffset: number;
}
export interface JavaScriptProxy {
    object_: Object;
    name: string;
    methodList: Array<string>;
    controller: WebController | WebviewController;
    asyncMethodList?: Array<string>;
    permission?: string;
}
export enum WebKeyboardAvoidMode {
    RESIZE_VISUAL = 0,
    RESIZE_CONTENT = 1,
    OVERLAYS_CONTENT = 2
}
export enum WebElementType {
    IMAGE = 1
}
export enum WebResponseType {
    LONG_PRESS = 1
}
export interface SelectionMenuOptionsExt {
    onAppear?: (() => void);
    onDisappear?: (() => void);
    preview?: CustomBuilder;
    menuType?: MenuType;
}
export type Callback_OnPageEndEvent_Void = (parameter: OnPageEndEvent) => void;
export type Callback_OnPageBeginEvent_Void = (parameter: OnPageBeginEvent) => void;
export type Callback_OnProgressChangeEvent_Void = (parameter: OnProgressChangeEvent) => void;
export type Callback_OnTitleReceiveEvent_Void = (parameter: OnTitleReceiveEvent) => void;
export type Callback_OnGeolocationShowEvent_Void = (parameter: OnGeolocationShowEvent) => void;
export type Callback_OnAlertEvent_Boolean = (parameter: OnAlertEvent) => boolean;
export type Callback_OnBeforeUnloadEvent_Boolean = (parameter: OnBeforeUnloadEvent) => boolean;
export type Callback_OnConfirmEvent_Boolean = (parameter: OnConfirmEvent) => boolean;
export type Callback_OnPromptEvent_Boolean = (parameter: OnPromptEvent) => boolean;
export type Callback_OnConsoleEvent_Boolean = (parameter: OnConsoleEvent) => boolean;
export type Callback_OnErrorReceiveEvent_Void = (parameter: OnErrorReceiveEvent) => void;
export type Callback_OnHttpErrorReceiveEvent_Void = (parameter: OnHttpErrorReceiveEvent) => void;
export type Callback_OnDownloadStartEvent_Void = (parameter: OnDownloadStartEvent) => void;
export type Callback_OnRefreshAccessedHistoryEvent_Void = (parameter: OnRefreshAccessedHistoryEvent) => void;
export interface Literal_Union_String_WebResourceRequest_data {
    data: string | WebResourceRequest;
}
export type Type_WebAttribute_onUrlLoadIntercept_callback = (event?: Literal_Union_String_WebResourceRequest_data) => boolean;
export interface Literal_Function_handler_Object_error {
    handler: Function0<void>;
    error: Object;
}
export type Callback_Literal_Function_handler_Object_error_Void = (event?: Literal_Function_handler_Object_error) => void;
export type Callback_OnRenderExitedEvent_Void = (parameter: OnRenderExitedEvent) => void;
export type Callback_OnShowFileSelectorEvent_Boolean = (parameter: OnShowFileSelectorEvent) => boolean;
export interface Literal_Object_detail {
    detail: Object;
}
export type Callback_Literal_Object_detail_Boolean = (event?: Literal_Object_detail) => boolean;
export interface Literal_Function_callback__Object_fileSelector {
    callback_: Function0<void>;
    fileSelector: Object;
}
export type Type_WebAttribute_onFileSelectorShow_callback = (event?: Literal_Function_callback__Object_fileSelector) => void;
export type Callback_OnResourceLoadEvent_Void = (parameter: OnResourceLoadEvent) => void;
export type Callback_OnScaleChangeEvent_Void = (parameter: OnScaleChangeEvent) => void;
export type Callback_OnHttpAuthRequestEvent_Boolean = (parameter: OnHttpAuthRequestEvent) => boolean;
export type Callback_OnInterceptRequestEvent_WebResourceResponse = (parameter: OnInterceptRequestEvent) => WebResourceResponse;
export type Callback_OnPermissionRequestEvent_Void = (parameter: OnPermissionRequestEvent) => void;
export type Callback_OnScreenCaptureRequestEvent_Void = (parameter: OnScreenCaptureRequestEvent) => void;
export type Callback_OnContextMenuShowEvent_Boolean = (parameter: OnContextMenuShowEvent) => boolean;
export type Callback_OnSearchResultReceiveEvent_Void = (parameter: OnSearchResultReceiveEvent) => void;
export type Callback_OnScrollEvent_Void = (parameter: OnScrollEvent) => void;
export type Callback_OnSslErrorEventReceiveEvent_Void = (parameter: OnSslErrorEventReceiveEvent) => void;
export type Callback_OnClientAuthenticationEvent_Void = (parameter: OnClientAuthenticationEvent) => void;
export type Callback_OnWindowNewEvent_Void = (parameter: OnWindowNewEvent) => void;
export type Callback_OnTouchIconUrlReceivedEvent_Void = (parameter: OnTouchIconUrlReceivedEvent) => void;
export type Callback_OnFaviconReceivedEvent_Void = (parameter: OnFaviconReceivedEvent) => void;
export type Callback_OnPageVisibleEvent_Void = (parameter: OnPageVisibleEvent) => void;
export type Callback_OnDataResubmittedEvent_Void = (parameter: OnDataResubmittedEvent) => void;
export type Callback_OnAudioStateChangedEvent_Void = (parameter: OnAudioStateChangedEvent) => void;
export type Callback_OnFirstContentfulPaintEvent_Void = (parameter: OnFirstContentfulPaintEvent) => void;
export type Callback_OnLoadInterceptEvent_Boolean = (parameter: OnLoadInterceptEvent) => boolean;
export type Callback_OnOverScrollEvent_Void = (parameter: OnOverScrollEvent) => void;
export type Callback_NativeEmbedDataInfo_Void = (event: NativeEmbedDataInfo) => void;
export type Callback_NativeEmbedTouchInfo_Void = (event: NativeEmbedTouchInfo) => void;
export interface WebAttribute extends CommonMethod {
    @memo
    javaScriptAccess(value: boolean): this;
    @memo
    fileAccess(value: boolean): this;
    @memo
    onlineImageAccess(value: boolean): this;
    @memo
    domStorageAccess(value: boolean): this;
    @memo
    imageAccess(value: boolean): this;
    @memo
    mixedMode(value: MixedMode): this;
    @memo
    zoomAccess(value: boolean): this;
    @memo
    geolocationAccess(value: boolean): this;
    @memo
    javaScriptProxy(value: JavaScriptProxy): this;
    @memo
    password(value: boolean): this;
    @memo
    cacheMode(value: CacheMode): this;
    @memo
    darkMode(value: WebDarkMode): this;
    @memo
    forceDarkAccess(value: boolean): this;
    @memo
    mediaOptions(value: WebMediaOptions): this;
    @memo
    tableData(value: boolean): this;
    @memo
    wideViewModeAccess(value: boolean): this;
    @memo
    overviewModeAccess(value: boolean): this;
    @memo
    overScrollMode(value: OverScrollMode): this;
    @memo
    textZoomAtio(value: number): this;
    @memo
    textZoomRatio(value: number): this;
    @memo
    databaseAccess(value: boolean): this;
    @memo
    initialScale(value: number): this;
    @memo
    userAgent(value: string): this;
    @memo
    metaViewport(value: boolean): this;
    @memo
    onPageEnd(value: ((parameter: OnPageEndEvent) => void)): this;
    @memo
    onPageBegin(value: ((parameter: OnPageBeginEvent) => void)): this;
    @memo
    onProgressChange(value: ((parameter: OnProgressChangeEvent) => void)): this;
    @memo
    onTitleReceive(value: ((parameter: OnTitleReceiveEvent) => void)): this;
    @memo
    onGeolocationHide(value: (() => void)): this;
    @memo
    onGeolocationShow(value: ((parameter: OnGeolocationShowEvent) => void)): this;
    @memo
    onRequestSelected(value: (() => void)): this;
    @memo
    onAlert(value: ((parameter: OnAlertEvent) => boolean)): this;
    @memo
    onBeforeUnload(value: ((parameter: OnBeforeUnloadEvent) => boolean)): this;
    @memo
    onConfirm(value: ((parameter: OnConfirmEvent) => boolean)): this;
    @memo
    onPrompt(value: ((parameter: OnPromptEvent) => boolean)): this;
    @memo
    onConsole(value: ((parameter: OnConsoleEvent) => boolean)): this;
    @memo
    onErrorReceive(value: ((parameter: OnErrorReceiveEvent) => void)): this;
    @memo
    onHttpErrorReceive(value: ((parameter: OnHttpErrorReceiveEvent) => void)): this;
    @memo
    onDownloadStart(value: ((parameter: OnDownloadStartEvent) => void)): this;
    @memo
    onRefreshAccessedHistory(value: ((parameter: OnRefreshAccessedHistoryEvent) => void)): this;
    @memo
    onUrlLoadIntercept(value: ((event?: Literal_Union_String_WebResourceRequest_data) => boolean)): this;
    @memo
    onSslErrorReceive(value: ((event?: Literal_Function_handler_Object_error) => void)): this;
    @memo
    onRenderExited(value: ((parameter: OnRenderExitedEvent) => void)): this;
    @memo
    onShowFileSelector(value: ((parameter: OnShowFileSelectorEvent) => boolean)): this;

    @memo
    onFileSelectorShow(value: ((event?: Literal_Function_callback__Object_fileSelector) => void)): this;
    @memo
    onResourceLoad(value: ((parameter: OnResourceLoadEvent) => void)): this;
    @memo
    onFullScreenExit(value: (() => void)): this;
    @memo
    onFullScreenEnter(value: OnFullScreenEnterCallback): this;
    @memo
    onScaleChange(value: ((parameter: OnScaleChangeEvent) => void)): this;
    @memo
    onHttpAuthRequest(value: ((parameter: OnHttpAuthRequestEvent) => boolean)): this;
    @memo
    onInterceptRequest(value: ((parameter: OnInterceptRequestEvent) => WebResourceResponse)): this;
    @memo
    onPermissionRequest(value: ((parameter: OnPermissionRequestEvent) => void)): this;
    @memo
    onScreenCaptureRequest(value: ((parameter: OnScreenCaptureRequestEvent) => void)): this;
    @memo
    onContextMenuShow(value: ((parameter: OnContextMenuShowEvent) => boolean)): this;
    @memo
    onContextMenuHide(value: OnContextMenuHideCallback): this;
    @memo
    mediaPlayGestureAccess(value: boolean): this;
    @memo
    onSearchResultReceive(value: ((parameter: OnSearchResultReceiveEvent) => void)): this;
    @memo
    onScroll(value: ((parameter: OnScrollEvent) => void)): this;
    @memo
    onSslErrorEventReceive(value: ((parameter: OnSslErrorEventReceiveEvent) => void)): this;
    @memo
    onSslErrorEvent(value: OnSslErrorEventCallback): this;
    @memo
    onClientAuthenticationRequest(value: ((parameter: OnClientAuthenticationEvent) => void)): this;
    @memo
    onWindowNew(value: ((parameter: OnWindowNewEvent) => void)): this;
    @memo
    onWindowExit(value: (() => void)): this;
    @memo
    multiWindowAccess(value: boolean): this;
    @memo
    onInterceptKeyEvent(value: ((parameter: KeyEvent) => boolean)): this;
    @memo
    webStandardFont(value: string): this;
    @memo
    webSerifFont(value: string): this;
    @memo
    webSansSerifFont(value: string): this;
    @memo
    webFixedFont(value: string): this;
    @memo
    webFantasyFont(value: string): this;
    @memo
    webCursiveFont(value: string): this;
    @memo
    defaultFixedFontSize(value: number): this;
    @memo
    defaultFontSize(value: number): this;
    @memo
    minFontSize(value: number): this;
    @memo
    minLogicalFontSize(value: number): this;
    @memo
    defaultTextEncodingFormat(value: string): this;
    @memo
    forceDisplayScrollBar(value: boolean): this;
    @memo
    blockNetwork(value: boolean): this;
    @memo
    horizontalScrollBarAccess(value: boolean): this;
    @memo
    verticalScrollBarAccess(value: boolean): this;
    @memo
    onTouchIconUrlReceived(value: ((parameter: OnTouchIconUrlReceivedEvent) => void)): this;
    @memo
    onFaviconReceived(value: ((parameter: OnFaviconReceivedEvent) => void)): this;
    @memo
    onPageVisible(value: ((parameter: OnPageVisibleEvent) => void)): this;
    @memo
    onDataResubmitted(value: ((parameter: OnDataResubmittedEvent) => void)): this;
    @memo
    pinchSmooth(value: boolean): this;
    @memo
    allowWindowOpenMethod(value: boolean): this;
    @memo
    onAudioStateChanged(value: ((parameter: OnAudioStateChangedEvent) => void)): this;
    @memo
    onFirstContentfulPaint(value: ((parameter: OnFirstContentfulPaintEvent) => void)): this;
    @memo
    onFirstMeaningfulPaint(value: OnFirstMeaningfulPaintCallback): this;
    @memo
    onLargestContentfulPaint(value: OnLargestContentfulPaintCallback): this;
    @memo
    onLoadIntercept(value: ((parameter: OnLoadInterceptEvent) => boolean)): this;
    @memo
    onControllerAttached(value: (() => void)): this;
    @memo
    onOverScroll(value: ((parameter: OnOverScrollEvent) => void)): this;
    @memo
    onSafeBrowsingCheckResult(value: OnSafeBrowsingCheckResultCallback): this;
    @memo
    onNavigationEntryCommitted(value: OnNavigationEntryCommittedCallback): this;
    @memo
    onIntelligentTrackingPreventionResult(value: OnIntelligentTrackingPreventionCallback): this;
    @memo
    javaScriptOnDocumentStart(value: Array<ScriptItem>): this;
    @memo
    javaScriptOnDocumentEnd(value: Array<ScriptItem>): this;
    @memo
    layoutMode(value: WebLayoutMode): this;
    @memo
    nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt): this;
    @memo
    enableNativeEmbedMode(value: boolean): this;
    @memo
    onNativeEmbedLifecycleChange(value: ((event: NativeEmbedDataInfo) => void)): this;
    @memo
    onNativeEmbedVisibilityChange(value: OnNativeEmbedVisibilityChangeCallback): this;
    @memo
    onNativeEmbedGestureEvent(value: ((event: NativeEmbedTouchInfo) => void)): this;
    @memo
    copyOptions(value: CopyOptions): this;
    @memo
    onOverrideUrlLoading(value: OnOverrideUrlLoadingCallback): this;
    @memo
    textAutosizing(value: boolean): this;
    @memo
    enableNativeMediaPlayer(value: NativeMediaPlayerConfig): this;
    @memo
    onRenderProcessNotResponding(value: OnRenderProcessNotRespondingCallback): this;
    @memo
    onRenderProcessResponding(value: OnRenderProcessRespondingCallback): this;
    @memo
    selectionMenuOptions(value: Array<ExpandedMenuItemOptions>): this;
    @memo
    onViewportFitChanged(value: OnViewportFitChangedCallback): this;
    @memo
    onInterceptKeyboardAttach(value: WebKeyboardCallback): this;
    @memo
    onAdsBlocked(value: OnAdsBlockedCallback): this;
    @memo
    keyboardAvoidMode(value: WebKeyboardAvoidMode): this;
    @memo
    editMenuOptions(value: EditMenuOptions): this;
    @memo
    enableHapticFeedback(value: boolean): this;
}
export interface SslErrorEvent {
    handler: SslErrorHandler;
    error: SslError;
    url: string;
    originalUrl: string;
    referrer: string;
    isFatalError: boolean;
    isMainFrame: boolean;
}
export interface Literal_String_plainText {
    plainText: string;
}
export type Callback_Literal_String_plainText_Void = (selectedText: Literal_String_plainText) => void;
export interface ExpandedMenuItemOptions {
    content: ResourceStr;
    startIcon?: ResourceStr;
    action: ((selectedText: Literal_String_plainText) => void);
}
export interface NestedScrollOptionsExt {
    scrollUp?: NestedScrollMode;
    scrollDown?: NestedScrollMode;
    scrollRight?: NestedScrollMode;
    scrollLeft?: NestedScrollMode;
}
@memo
@ComponentBuilder
export declare function Web(
    value: WebOptions, 
    @memo
    content_?: () => void,
): WebAttribute
