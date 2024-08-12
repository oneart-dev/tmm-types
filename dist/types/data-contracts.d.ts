export interface ControllersAPiKeyCreateResponse {
    data?: ServicesApiKey;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersAnalyzerNotesResponse {
    data?: Record<string, ServicesAnalyzerNote[]>;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersAnalyzerWeekResponse {
    balanceGain?: string;
    balanceHistory?: string;
    data?: ServicesTradeSummary[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiErrorResponse {
    message?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiKeysList {
    data?: ServicesApiKey[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesTeamTopRow {
    data?: ServicesTeamTopRow[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesTeam {
    data?: ServicesTeam;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesTeamMember {
    data?: ServicesTeamMember;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesTeamWithStatsAndMember {
    data?: ServicesTeamWithStatsAndMember;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessString {
    data?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessResponse {
    data?: any;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiUsersListResponse {
    data?: ServicesApiUser[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiWarningResponse {
    message?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersBulkSignUpSuccessResponse {
    data?: ServicesBulkSignUpResponse[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersCategoriesListResponse {
    data?: ControllersCategoryWithCounter[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersCategoryWithCounter {
    id?: number;
    name?: string;
    order?: number;
    trades_user_count?: number;
    user_id?: number;
}
export interface ControllersDashboardCreateResponse {
    data?: ServicesDashboard;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersDashboardListResponse {
    data?: ServicesDashboard[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersDiscordListResponse {
    data?: ServicesDiscordConnect[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersDiscountResponse {
    data?: ServicesTransactionDiscount;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersExchange {
    enabled?: number;
    id?: ServicesExchangeID;
    name?: string;
}
export interface ControllersExchangesListResponse {
    data?: ControllersExchange[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersFilesResponse {
    data?: ServicesFile[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersFilterPresetsListResponse {
    data?: ServicesFilterPreset[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersHotCoins {
    "15M"?: string[];
    "1H"?: string[];
    "24H"?: string[];
    "5M"?: string[];
}
export interface ControllersHotCoinsResponse {
    data?: ControllersHotCoins;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersLatestNotificationsResponse {
    data?: ServicesNotificationPublic[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersLoginSuccessResponse {
    access_token?: string;
    expires_at?: number;
    status?: string;
}
export interface ControllersMeSuccessResponse {
    data?: ServicesUserWithRelations;
    status?: string;
}
export interface ControllersMentorGroupResponse {
    data?: ServicesMentorGroup;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersMentorGroupsActiveResponse {
    data?: ServicesMentorGroup[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersMentorListResponse {
    data?: ServicesMentorGroup[];
    join_requests?: ServicesStudent[];
    joined?: ServicesMentorGroup[];
    publicGroups?: ServicesMentorGroup[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersMentorResponse {
    data?: ServicesMentorGroup;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersOrdersListResponse {
    data?: ServicesOrder[];
    status?: ControllersResponseStatusMessage;
    trades?: ServicesTrade[];
}
export interface ControllersPublicProfileResponse {
    data?: ServicesPublicProfile;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersPublicProfileStatsResponse {
    data?: ServicesPublicProfileStats;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersPublicTradeGroupResponse {
    data?: ServicesTrade[];
    from?: number;
    public_profile?: ServicesPublicProfile;
    status?: ControllersResponseStatusMessage;
    to?: number;
}
export interface ControllersPublicTradeResponse {
    data?: ServicesTrade;
    drawings?: string;
    public_profile?: ServicesPublicProfile;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersReferralSummaryResponse {
    data?: ServicesUserReferralSummary;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersRefreshSuccessResponse {
    access_token?: string;
    expires_at?: number;
    status?: string;
}
export declare enum ControllersResponseStatusMessage {
    ResponseStatusSuccess = "success",
    ResponseStatusError = "error",
    ResponseStatusWarning = "warning"
}
export interface ControllersServerStatsResponse {
    data?: ServicesPublicStats;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersShortUrlResponse {
    data?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersSseConnectResponse {
    data?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersTagsResponse {
    data?: ServicesTag[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersTelegramListResponse {
    data?: ServicesTelegramConnect[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersTickersListResponse {
    data?: string[];
    info?: Record<string, ServicesTickersInfo>;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersTopTradersSuccessResponse {
    daily_top?: ServicesTop[];
    data?: any;
    last_daily_winners?: ServicesTopWinner[];
    last_monthly_winners?: ServicesTopWinner[];
    monthly_top?: ServicesTop[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersTradeChartDrawingsResponse {
    data?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersTransactionCreateResponse {
    data?: any;
    redirect_url?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersTransactionsListResponse {
    data?: ServicesTransaction[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersUIDataResponse {
    data?: ServicesUIData;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersUnauthorizedResponse {
    message?: string;
    status?: ControllersResponseStatusMessage;
}
export interface DtoAnalyzerNoteForm {
    desc?: string;
    id?: number;
    note_at: string;
    rating?: number;
    type: 2 | 3 | 4;
}
export interface DtoApiKeyCreateForm {
    balances?: DtoBalanceRecord[];
    enabled?: number;
    exchange_id?: number;
    extra_info?: string;
    key_private?: string;
    key_public: string;
    name: string;
}
export interface DtoApiKeyUpdateForm {
    extra_info?: string;
    key_private?: string;
    key_public: string;
    name: string;
}
export interface DtoApiKeyUpdateNameForm {
    name: string;
}
export interface DtoApiUserUpdateForm {
    ip?: string[];
    name: string;
    userID?: number;
}
export interface DtoBalanceRecord {
    balance_usd: number;
    updated_at: number;
}
export interface DtoCategoryForm {
    id?: number;
    name: string;
    order?: number;
}
export interface DtoCategoryListForm {
    categories: DtoCategoryForm[];
}
export interface DtoDashboardCreateForm {
    name: string;
}
export interface DtoDashboardSort {
    id: number;
    order: number;
}
export interface DtoDashboardUpdateForm {
    filters?: string;
    layouts?: string;
    name: string;
}
export interface DtoDashboardsSortForm {
    dashboards: DtoDashboardSort[];
}
export interface DtoFilterPresetCreateForm {
    name: string;
    preset: string;
}
export interface DtoGlobalChartDataForm {
    api_key_id: number;
    data?: string;
}
export interface DtoLoginCredentials {
    email: string;
    password: string;
}
export interface DtoMentorGroupForm {
    date_end?: string;
    date_start?: string;
    email?: string;
    invite_code?: string;
    language: "ru" | "en";
    limit?: number;
    name: string;
    private_text?: string;
    public_group?: 0 | 1;
    public_text?: string;
    sub_user_id?: number;
}
export interface DtoMentorGroupJoinRequestForm {
    contact_details?: string;
    invite_code?: string;
    name: string;
}
export interface DtoMentorNoteUpdateForm {
    text?: string;
}
export interface DtoNewPasswordCredentials {
    email: string;
    password: string;
    token: string;
}
export interface DtoPasswordResetCredentials {
    email: string;
}
export interface DtoPublicProfileLayout {
    h?: number;
    i?: number;
    model?: DtoWidgetCreateForm;
    w?: number;
    x?: number;
    y?: number;
}
export interface DtoPublicProfileUpdateForm {
    api_keys: number[];
    desc?: string;
    discord?: string;
    facebook?: string;
    hide_trades_extra?: number;
    instagram?: string;
    layout?: DtoPublicProfileLayout[];
    show_pnl?: number;
    show_roi?: number;
    show_trades?: number;
    show_trades_interval?: 0 | 1 | 7 | 30 | 90;
    start_at_date?: string;
    status: number;
    telegram?: string;
    top_trader?: number;
    top_trader_api_key_id?: number;
    twitch?: string;
    twitter?: string;
    url: string;
    vk?: string;
    website?: string;
    youtube?: string;
}
export interface DtoRiskManagementCreateForm {
    api_key_id?: number;
    enabled?: boolean;
    max_leverage?: string;
    per_day?: string;
    per_trade?: string;
}
export interface DtoRiskManagementUpdateForm {
    api_key_id?: number;
    id?: number;
    max_leverage?: string;
    per_day?: string;
    per_trade?: string;
}
export interface DtoSignUpCredentials {
    email: string;
    language: "ru" | "en";
    name: string;
    password: string;
    promo?: string;
    ref?: string;
    timezone: string;
}
export interface DtoSymbolChartForm {
    api_key_id?: number;
    date?: string;
    interval: string;
    user_id?: number;
}
export interface DtoTagForm {
    column?: 1 | 2;
    id?: number;
    name?: string;
}
export interface DtoTagsSort {
    id: number;
    order: number;
}
export interface DtoTagsSortForm {
    tags: DtoTagsSort[];
}
export interface DtoTeamCreateForm {
    description?: string;
    invite_code?: string;
    name: string;
    required_show_pnl?: 1 | 2;
    status: 1 | 2;
}
export interface DtoTeamMemberCreateForm {
    invite_code?: string;
    show_pnl: 1 | 2;
}
export interface DtoTeamMemberUpdateForm {
    invite_code?: string;
    show_pnl: 1 | 2;
    status?: 2 | 3 | 4;
}
export interface DtoTeamUpdateForm {
    description?: string;
    invite_code?: string;
    name: string;
    status: 1 | 2;
}
export interface DtoTelegramConnectForm {
    api_keys: number[];
    close_trade_notification?: 1 | 2;
    language: "ru" | "en";
    name: string;
    new_trade_notification?: 0 | 1 | 2 | 3;
    preview?: 0 | 1 | 2;
    privacy_mode?: 0 | 1;
}
export interface DtoTradeChartDataForm {
    data?: string;
}
export interface DtoTradeChartForm {
    interval: string;
    user_id?: number;
}
export interface DtoTradeDrawingForm {
    user_id?: number;
}
export interface DtoTradeFilters {
    api_key_id?: number[];
    api_key_id_params?: "not:";
    category?: number[];
    category_params?: "not:";
    closeBetween?: string;
    daysOfWeek?: number[];
    durationBetween?: string;
    durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
    exit_tags?: number[];
    exit_tags_params?: "not:" | "all:" | "not:all:" | "only:";
    extraInfo?: "conclusion:empty" | "conclusion:not-empty" | "desc:empty" | "desc:not-empty" | "mentor_note:not-empty" | "mentor_note:empty";
    groupBy?: "minute" | "hour" | "month" | "date" | "week";
    headers?: string[];
    id?: number;
    ids?: number[];
    leverageBetween?: string;
    maeBetween?: string;
    mfeBetween?: string;
    multiplier?: string;
    openBetween?: string;
    percentBetween?: string;
    profitBetween?: string;
    profitDepositBetween?: string;
    side?: "LONG" | "SHORT";
    state?: 0 | 1 | 2;
    symbol?: string[];
    symbol_params?: "not:";
    tags?: number[];
    tags_params?: "not:" | "all:" | "not:all:" | "only:";
    trade_time?: string;
    user_id?: number;
    volumeBetween?: string;
    volumeFrom?: number;
    volumeTo?: number;
    with_archive?: boolean;
}
export interface DtoTradeGroupShortLink {
    id: number[];
}
export interface DtoTradeUpdateDescForm {
    conclusion?: string;
    description?: string;
    video_link?: string;
}
export interface DtoTradeUpdateTagsBulkForm {
    column?: 1 | 2;
    tags: DtoTagForm[];
    trade_id: number[];
}
export interface DtoTradeUpdateTagsForm {
    column?: 1 | 2;
    tags?: DtoTagForm[];
}
export interface DtoTradesCategoryForm {
    category_id?: number;
    id: number[];
}
export interface DtoTradesMergeForm {
    id: number[];
}
export interface DtoTransactionCreateForm {
    gateway: string;
    level: string;
    months: number;
}
export interface DtoUIData {
    data: string;
}
export interface DtoUserLanguage {
    language: "en" | "ru";
}
export interface DtoUserReferralCode {
    referral_code: string;
}
export interface DtoUserTheme {
    dark: boolean;
}
export interface DtoUserUpdateForm {
    default_group_field?: 1 | 2;
    default_time_frame?: "1m" | "5m" | "15m" | "30m" | "1h" | "4h" | "12h" | "1d";
    email: string;
    language: "ru" | "en";
    name: string;
    password: string;
    timezone: string;
}
export interface DtoWidgetCreateForm {
    filters?: DtoWidgetFilters;
    source: string;
    title: string;
    type: string;
    type2?: string;
    type3?: string;
}
export interface DtoWidgetFilters {
    color?: string;
    disabledCounter?: boolean;
    filter?: DtoTradeFilters;
    ma?: number;
    mini?: boolean;
    private?: boolean;
    simpleSortBy?: "value_ask" | "value_desc" | "key_asc" | "key_desc";
}
export interface DtoWidgetUpdateForm {
    filters?: DtoWidgetFilters;
    title: string;
    type2?: string;
}
export interface ServicesAnalyzerNote {
    created_at?: string;
    desc?: string;
    id?: number;
    note_at?: string;
    rating?: number;
    type?: ServicesNoteType;
    updated_at?: string;
    user_id?: number;
}
export interface ServicesAnalyzerWeekListResponse {
    data?: ServicesTradeCountByWeek[];
}
export interface ServicesApiKey {
    created_at?: string;
    enabled?: ServicesApiKeyEnabledStatus;
    exchange_id?: ServicesExchangeID;
    extra_info?: string;
    id?: number;
    key_public?: string;
    name?: string;
    partner?: ServicesPartnerID;
    updated_at?: string;
    user_id?: number;
    websocket_status?: ServicesApiKeyWebsocketStatus;
    websocket_updated_at?: number;
}
export declare enum ServicesApiKeyEnabledStatus {
    API_KEY_WS_ENABLED = 1,
    API_KEY_WS_DISABLED = 0,
    API_KEY_WS_FROZEN = 2
}
export declare enum ServicesApiKeyWebsocketStatus {
    API_KEY_WS_DISCONNECTED = 0,
    API_KEY_WS_CONNECTED = 1,
    API_KEY_WS_CONNECTING = 2,
    API_KEY_WS_ERROR = 3,
    API_KEY_WS_RECONNECTING = 4
}
export interface ServicesApiKeysListPagination {
    current_page?: number;
    data?: ServicesApiKey[];
    defaultSort?: boolean;
    last_page?: number;
    per_page?: number;
    per_page_limit?: number;
    sortBy?: string;
    sortDesc?: boolean;
    sort_fields?: string[];
    total?: number;
}
export interface ServicesApiUser {
    api_key?: string;
    created_at?: string;
    id?: number;
    ip?: string[];
    name?: string;
    updated_at?: string;
    user?: ServicesSafeUser;
    user_id?: number;
}
export interface ServicesBulkSignUpResponse {
    api_key?: string;
    dashboard_id?: number;
    email?: string;
    error?: ServicesBulkSignUpResponseError;
    user_id?: number;
}
export declare enum ServicesBulkSignUpResponseError {
    BulkSignUpResponseEmptyEmailList = "empty email list",
    BulkSignUpResponseErrorEmailAlreadyExists = "email already exists",
    BulkSignUpSavingError = "saving error",
    BulkSignUpCreateDashboardError = "create dashboard error",
    BulkSignUpCreateApiKeyError = "create api key error"
}
export declare enum ServicesCVizorStatus {
    CVizorStatusDisabled = 0,
    CVizorStatusEnabledTrends = 1,
    CVizorStatusEnabledPRO = 2
}
export interface ServicesDashboard {
    filters?: ServicesWidgetFilters;
    id?: number;
    layouts?: string;
    name?: string;
    order?: number;
    over_limit?: boolean;
    user_id?: number;
    widgets?: ServicesWidget[];
}
export declare enum ServicesDefaultGroupField {
    DefaultGroupFieldOpenTime = 1,
    DefaultGroupFieldCloseTime = 2
}
export declare enum ServicesDiscordCloseNotification {
    DiscordCloseNotificationEnabled = 1,
    DiscordCloseNotificationDisabled = 2
}
export interface ServicesDiscordConnect {
    api_keys?: number[];
    channel_id?: number;
    close_trade_notification?: ServicesDiscordCloseNotification;
    created_at?: string;
    guild_id?: number;
    hash?: string;
    id?: number;
    language?: string;
    name?: string;
    new_trade_notification?: ServicesDiscordNotification;
    owner_id?: number;
    preview?: ServicesTelegramConnectPreview;
    privacy_mode?: ServicesDiscordConnectPrivacy;
    status?: ServicesDiscordConnectStatus;
    updated_at?: string;
    user_id?: number;
    username?: string;
}
export declare enum ServicesDiscordConnectPrivacy {
    DiscordConnectPrivacyEnabled = 1,
    DiscordConnectPrivacyDisabled = 0
}
export declare enum ServicesDiscordConnectStatus {
    DiscordConnectStatusNew = 1,
    DiscordConnectStatusConnected = 2
}
export declare enum ServicesDiscordNotification {
    DiscordNotificationDisabled = 0,
    DiscordNotificationTradeAll = 1,
    DiscordNotificationTradeOpenOnly = 2,
    DiscordNotificationTradeExecutionOnly = 3
}
export declare enum ServicesExchangeID {
    EXCHANGE_BINANCE_FUTURES = 1,
    EXCHANGE_BYBIT_LINEAR = 2,
    EXCHANGE_FTX = 3,
    EXCHANGE_BINANCE_SPOT = 4,
    EXCHANGE_BYBIT_INVERSE = 5,
    EXCHANGE_BYBIT_SPOT = 6,
    EXCHANGE_BITGET_FUTURES = 7,
    EXCHANGE_OKX_PERP_SWAPS = 8,
    EXCHANGE_OKX_SPOT = 9,
    EXCHANGE_BINGX_FUTURES = 10,
    EXCHANGE_GATEIO_SPOT = 40,
    EXCHANGE_WLC_FUTURES = 11,
    EXCHANGE_WLC_SPOT = 21,
    EXCHANGE_WLC_BYBIT_SPOT = 23,
    EXCHANGE_WLC_BYBIT_LINEAR = 24,
    EXCHANGE_WLC_BYBIT_INVERSE = 25,
    EXCHANGE_TIGER_FUTURES = 12,
    EXCHANGE_TIGER_SPOT = 22,
    EXCHANGE_TIGER_BYBIT_SPOT = 13,
    EXCHANGE_TIGER_BYBIT_LINEAR = 14,
    EXCHANGE_TIGER_BYBIT_INVERSE = 15,
    EXCHANGE_TIGER_OKX_FUTURES = 32,
    EXCHANGE_TIGER_OKX_SPOT = 33
}
export interface ServicesFile {
    file_path?: string;
    id?: number;
    type?: ServicesFileOwnerType;
    user_id?: number;
}
export declare enum ServicesFileOwnerType {
    FileOwnerTypeTrade = "Trade",
    FileOwnerTypeTradePreview = "TradePreview",
    FileOwnerTypeTradePreviewPrivate = "TradePreviewPrivate",
    FileOwnerTypeTeam = "Team",
    FileOwnerTypeTeamBG = "TeamBG",
    FileOwnerTypeUser = "User",
    FileOwnerTypePublicProfile = "PublicProfile"
}
export interface ServicesFilterPreset {
    id?: number;
    name?: string;
    preset?: string;
    user_id?: number;
}
export interface ServicesGuideProgress {
    guide_closed?: number;
    guide_step: number;
}
export interface ServicesKline {
    close?: number;
    high?: number;
    low?: number;
    open?: number;
    timestamp?: number;
    volume?: number;
}
export interface ServicesLoadBoardResponseChunk {
    errors?: string;
    serverData?: string;
    widget?: ServicesWidget;
    widget_id?: number;
}
export declare enum ServicesLoadLevel {
    LoadLevelNone = "empty",
    LoadLevelLow = "low",
    LoadLevelMed = "med",
    LoadLevelHigh = "high",
    LoadLevelCritical = "critical"
}
export declare enum ServicesMembership {
    LEVEL_NOVICE = "novice",
    LEVEL_NOVICE_PLUS = "novice_plus",
    LEVEL_TRADER = "trader",
    LEVEL_PRO = "pro",
    OWNER = "owner",
    ADMIN = "administrator",
    SUPPORT = "support",
    DEFAULT_MEMBERSHIP = "novice"
}
export interface ServicesMentorGroup {
    created_at?: string;
    id?: number;
    invite_code?: string;
    language?: string;
    limit?: number;
    name?: string;
    private_text?: string;
    public_group?: number;
    public_text?: string;
    status?: number;
    students?: ServicesStudent[];
    sub_user?: ServicesSafeUser;
    sub_user_id?: number;
    time_end?: number;
    time_start?: number;
    updated_at?: string;
    user?: ServicesSafeUser;
    user_id?: number;
}
export interface ServicesMentorNote {
    created_at?: string;
    id?: number;
    mentor?: ServicesSafeUser;
    seen?: number;
    sub_user_id?: number;
    text?: string;
    trade?: ServicesTrade;
    trade_id?: number;
    updated_at?: string;
    user?: ServicesSafeUser;
    user_id?: number;
}
export declare enum ServicesNoteType {
    NoteTypeMonth = 4,
    NoteTypeWeek = 3,
    NoteTypeDay = 2
}
export declare enum ServicesNotificationInteract {
    NotificationInteractNo = 0,
    NotificationInteractYes = 1
}
export interface ServicesNotificationPublic {
    id?: number;
    interact?: ServicesNotificationInteract;
    link?: string;
    link_title?: string;
    seen?: ServicesNotificationSeen;
    text?: string;
    timestamp?: number;
    title?: string;
}
export declare enum ServicesNotificationSeen {
    NotificationSeenNo = 0,
    NotificationSeenYes = 1
}
export interface ServicesOrder {
    api_key_id?: number;
    avg_price?: string;
    buyer?: number;
    close_position?: number;
    commission?: string;
    commission_asset?: string;
    exchange_ref_id?: number;
    executed_qty?: string;
    id?: number;
    maker?: number;
    order_id?: number;
    orig_qty?: string;
    orig_type?: ServicesOrigType;
    price?: string;
    qty?: string;
    realized_pnl?: string;
    reduce_only?: number;
    side?: ServicesOrderSide;
    status?: string;
    stop_price?: string;
    symbol?: string;
    time?: number;
    trade_avg_price_entry?: string;
    trade_avg_price_exit?: string;
    trade_id?: number;
    trade_net_profit?: string;
    trade_percent?: string;
    type?: ServicesOrderType;
    update_time?: string;
    user_id?: number;
}
export declare enum ServicesOrderSide {
    OrderBuy = "BUY",
    OrderSell = "SELL",
    OrderFunding = "FUNDING",
    OrderLiquidation = "LIQUIDATION"
}
export declare enum ServicesOrderType {
    OrderTypeLimit = "LIMIT",
    OrderTypeMarket = "MARKET",
    OrderTypeFunding = "FUNDING"
}
export declare enum ServicesOrigType {
    OrderOrigTypeReverse = "REVERSE",
    OrderOrigTypeLiquidation = "LIQUIDATION"
}
export interface ServicesPaginationResponseArrayServicesTeamMember {
    current_page?: number;
    data?: ServicesTeamMember[];
    defaultSort?: boolean;
    last_page?: number;
    per_page?: number;
    per_page_limit?: number;
    sortBy?: string;
    sortDesc?: boolean;
    sort_fields?: string[];
    status?: string;
    total?: number;
}
export declare enum ServicesPartnerID {
    PARTNER_ID_NONE = -1,
    PARTNER_ID_WLC = 1,
    PARTNER_ID_TIGER = 2
}
export interface ServicesPublicProfile {
    api_keys?: number[];
    bg?: ServicesFile;
    created_at?: string;
    desc?: string;
    discord?: string;
    facebook?: string;
    hide_trades_extra?: number;
    id?: number;
    instagram?: string;
    layout?: ServicesPublicProfileLayout[];
    league?: ServicesTopLeague;
    league_progress?: number;
    show_pnl?: number;
    show_roi?: number;
    show_trades?: ServicesPublicProfileShowTrades;
    show_trades_interval?: number;
    start_at?: number;
    status?: ServicesPublicProfileStatus;
    telegram?: string;
    top_trader_api_key_id?: number;
    tops?: ServicesTop[];
    twitch?: string;
    twitter?: string;
    updated_at?: string;
    url?: string;
    user?: ServicesSafeUser;
    user_id?: number;
    vk?: string;
    website?: string;
    wins?: ServicesTopWinner[];
    youtube?: string;
}
export interface ServicesPublicProfileLayout {
    errors?: string[];
    h?: number;
    i?: number;
    model?: ServicesWidget;
    serverData?: string;
    w?: number;
    x?: number;
    y?: number;
}
export declare enum ServicesPublicProfileShowTrades {
    PublicProfileShowTradesDisabled = 0,
    PublicProfileShowTradesAll = 1,
    PublicProfileShowTradesOnlyClosed = 2,
    PublicProfileShowTradesOnlyOpened = 3
}
export interface ServicesPublicProfileStats {
    average_duration?: number;
    count_api_keys?: number;
    from?: string;
    hidden_data?: boolean;
    last_update_at?: number;
    layout?: ServicesPublicProfileLayout[];
    long_short_ratio?: number;
    profit_factor?: number;
}
export declare enum ServicesPublicProfileStatus {
    PublicProfileStatusON = 1,
    PublicProfileStatusOFF = 2,
    PublicProfileStatusBAN = 3
}
export interface ServicesPublicStats {
    api_keys_connecting?: Record<string, ServicesLoadLevel>;
    api_keys_connecting_queue?: Record<string, ServicesLoadLevel>;
    trade_processing?: Record<string, ServicesLoadLevel>;
    trade_processing_queue?: Record<string, ServicesLoadLevel>;
    ws_queue?: ServicesLoadLevel;
}
export interface ServicesRiskManagement {
    api_key_id?: number;
    created_at?: string;
    enabled?: number;
    id?: number;
    max_leverage?: string;
    per_day?: string;
    per_trade?: string;
    updated_at?: string;
}
export interface ServicesRiskManagementLog {
    api_key_id?: number;
    created_at?: string;
    current?: string;
    date?: string;
    id?: number;
    limit?: string;
    trade?: ServicesTrade;
    trade_id?: number;
    type?: ServicesRiskManagementLogType;
    updated_at?: string;
    user_id?: number;
}
export interface ServicesRiskManagementLogPagination {
    current_page?: number;
    data?: ServicesRiskManagementLog[];
    defaultSort?: boolean;
    last_page?: number;
    per_page?: number;
    per_page_limit?: number;
    sortBy?: string;
    sortDesc?: boolean;
    sort_fields?: string[];
    total?: number;
}
export declare enum ServicesRiskManagementLogType {
    RiskManagementLogTypeTradeLoss = 1,
    RiskManagementLogTypeTradeLeverage = 2,
    RiskManagementLogTypeDayLoss = 3
}
export interface ServicesRiskManagementPagination {
    current_page?: number;
    data?: ServicesRiskManagement[];
    defaultSort?: boolean;
    last_page?: number;
    per_page?: number;
    per_page_limit?: number;
    sortBy?: string;
    sortDesc?: boolean;
    sort_fields?: string[];
    total?: number;
}
export interface ServicesSafeUser {
    avatar?: ServicesFile;
    id?: number;
    name?: string;
}
export interface ServicesShortUrl {
    counter?: number;
    id?: number;
    model?: ServicesShortUrlModelType;
    model_id?: number;
    shard_id?: number;
    url?: string;
}
export declare enum ServicesShortUrlModelType {
    ShortUrlModelTypeTrade = "Trade",
    ShortUrlModelTypeTradeGroup = "TradeGroup",
    ShortUrlModelTypeDashboard = "Dashboard"
}
export interface ServicesStripe {
    billing_cycle?: ServicesStripeBillingCycle;
    created_at?: string;
    id?: number;
    level?: ServicesMembership;
    stripe_id?: string;
    subscription_status?: ServicesStripeSubscriptionStatus;
    updated_at?: string;
    user_id?: number;
}
export declare enum ServicesStripeBillingCycle {
    StripeBillingCycleMonthly = 1,
    StripeBillingCycleHalfYearly = 2,
    StripeBillingCycleYearly = 3
}
export declare enum ServicesStripeSubscriptionStatus {
    StripeSubscriptionStatusDisabled = 0,
    StripeSubscriptionStatusActive = 1,
    StripeSubscriptionStatusPastDue = 2,
    StripeSubscriptionStatusCanceled = 3,
    StripeSubscriptionStatusUnpaid = 4
}
export interface ServicesStudent {
    contact?: string;
    created_at?: string;
    email?: string;
    id?: number;
    mentor_group?: ServicesMentorGroup;
    mentor_group_id?: number;
    name?: string;
    status?: ServicesStudentStatus;
    sub_user_id?: number;
    updated_at?: string;
    user_id?: number;
}
export declare enum ServicesStudentStatus {
    StudentStatusRequest = 0,
    StudentStatusAccepted = 1,
    StudentStatusRejected = 2
}
export interface ServicesTag {
    column?: ServicesTagColumn;
    id?: number;
    name?: string;
    score?: number;
    user_id?: number;
}
export declare enum ServicesTagColumn {
    TagColumnEntryReason = 1,
    TagColumnExitReason = 2,
    TagColumnConclusion = 3
}
export interface ServicesTeam {
    created_at?: string;
    description?: string;
    id?: number;
    invite_code?: string;
    name?: string;
    required_show_pnl?: ServicesTeamRequiredShowPnl;
    status?: ServicesTeamStatus;
    updated_at?: string;
    user_id?: number;
}
export interface ServicesTeamMember {
    created_at?: string;
    id?: number;
    show_pnl?: ServicesTeamMemberShowPnl;
    status?: ServicesTeamMemberStatus;
    team_id?: number;
    updated_at?: string;
    user?: ServicesSafeUser;
    user_id?: number;
}
export declare enum ServicesTeamMemberShowPnl {
    ShowPnlDisabled = 1,
    ShowPnlEnabled = 2
}
export declare enum ServicesTeamMemberStatus {
    TeamMemberStatusPending = 1,
    TeamMemberStatusActive = 2,
    TeamMemberStatusDeclined = 3,
    TeamMemberStatusRevoked = 4
}
export declare enum ServicesTeamRequiredShowPnl {
    TeamRequiredShowPnlNo = 1,
    TeamRequiredShowPnlYes = 2
}
export declare enum ServicesTeamStatus {
    TeamStatusPublic = 1,
    TeamStatusPrivate = 2,
    TeamStatusClosed = 3,
    TeamStatusBlocked = 4
}
export declare enum ServicesTeamTopPeriod {
    TeamTopPeriodToday = "today",
    TeamTopPeriodWeek = "week",
    TeamTopPeriodMonth = "month"
}
export interface ServicesTeamTopRow {
    name?: string;
    user_id?: number;
    value?: string;
}
export declare enum ServicesTeamTopType {
    TeamTopTypePnl = "pnl",
    TeamTopTypePercent = "percent",
    TeamTopTypeVolume = "volume"
}
export interface ServicesTeamWithStatsAndMember {
    active_members_count?: number;
    created_at?: string;
    current_member?: ServicesTeamMember;
    description?: string;
    id?: number;
    invite_code?: string;
    name?: string;
    pending_members_count?: number;
    required_show_pnl?: ServicesTeamRequiredShowPnl;
    status?: ServicesTeamStatus;
    updated_at?: string;
    user_id?: number;
}
export declare enum ServicesTelegramCloseNotification {
    TelegramCloseNotificationEnabled = 1,
    TelegramCloseNotificationDisabled = 2
}
export interface ServicesTelegramConnect {
    api_keys?: number[];
    close_trade_notification?: ServicesTelegramCloseNotification;
    created_at?: string;
    hash?: string;
    id?: number;
    language?: string;
    name?: string;
    new_trade_notification?: ServicesTelegramNotification;
    preview?: ServicesTelegramConnectPreview;
    privacy_mode?: ServicesTelegramConnectPrivacy;
    status?: ServicesTelegramConnectStatus;
    updated_at?: string;
    user_id?: number;
    username?: string;
}
export declare enum ServicesTelegramConnectPreview {
    TelegramConnectPreviewEnabled = 1,
    TelegramConnectPreviewClose = 2,
    TelegramConnectPreviewDisabled = 0
}
export declare enum ServicesTelegramConnectPrivacy {
    TelegramConnectPrivacyEnabled = 1,
    TelegramConnectPrivacyDisabled = 0
}
export declare enum ServicesTelegramConnectStatus {
    TelegramConnectStatusNew = 1,
    TelegramConnectStatusConnected = 2
}
export declare enum ServicesTelegramNotification {
    TelegramNotificationDisabled = 0,
    TelegramNotificationTradeAll = 1,
    TelegramNotificationTradeOpenOnly = 2,
    TelegramNotificationTradeExecutionOnly = 3
}
export interface ServicesTickerFilters {
    baseCurrency?: string;
    decimalsMax?: number;
    maxPrice?: string;
    maxQty?: string;
    minPrice?: string;
    minQty?: string;
    multiplier?: string;
    qtyStep?: string;
    quoteCurrency?: string;
    symbol?: string;
    tickSize?: string;
}
export type ServicesTickersInfo = Record<string, ServicesTickerFilters>;
export interface ServicesTop {
    change?: number;
    created_at?: string;
    id?: number;
    league?: ServicesTopLeague;
    position?: number;
    public_profile?: ServicesPublicProfile;
    type?: ServicesTopType;
    updated_at?: string;
    user?: ServicesSafeUser;
    user_id?: number;
    value?: string;
    value_pnl?: string;
}
export declare enum ServicesTopLeague {
    TopLeagueMoon = 1,
    TopLeagueStar = 2,
    TopLeagueInterstellar = 3,
    TopLeagueGalaxy = 4,
    TopLeagueSpacePirates = 5,
    TopLeagueSpaceDroids = 6,
    TopLeagueDefault = 7,
    TopLeaguePRO = 8
}
export declare enum ServicesTopType {
    TopTypeDay = 1,
    TopTypeMonth = 2
}
export interface ServicesTopWinner {
    created_at?: string;
    date?: string;
    id?: number;
    league?: ServicesTopLeague;
    position?: number;
    result_pnl?: string;
    result_roi?: string;
    type?: ServicesTopType;
    updated_at?: string;
    user_id?: number;
}
export interface ServicesTrade {
    api_key_id?: number;
    avg_price_entry?: string;
    avg_price_exit?: string;
    category_id?: number;
    category_name?: string;
    close_time?: number;
    closed_value?: string;
    commission?: string;
    commission_asset?: string;
    conclusion?: string;
    created_at?: string;
    description?: string;
    duration?: number;
    exchange_id?: ServicesExchangeID;
    exit_reason?: string;
    funding?: string;
    id?: number;
    images?: ServicesFile[];
    leverage?: string;
    max_loose_percent?: string;
    max_win_percent?: string;
    mentor_note?: number;
    mentor_notes?: ServicesMentorNote[];
    multiplier?: ServicesTradeMultiplier;
    net_profit?: string;
    open_qty?: string;
    open_time?: number;
    orders?: ServicesOrder[];
    peak_qty?: string;
    percent?: string;
    process?: ServicesTradeProcess;
    profit_deposit?: string;
    qty?: string;
    realized_pnl?: string;
    risk_management_log?: ServicesRiskManagementLog[];
    short_url?: ServicesShortUrl;
    side?: ServicesTradeSide;
    sub_account?: string;
    symbol?: string;
    t_t_tools_data?: string;
    t_t_tools_data_close?: string;
    tags?: ServicesTag[];
    updated_at?: string;
    user_id?: number;
    video_link?: string;
    volume?: string;
}
export interface ServicesTradeChartResponse {
    data?: ServicesKline[];
    drawings?: string;
    interval?: string;
    symbol?: string;
    time_module?: number;
    time_padding?: number;
}
export interface ServicesTradeCountByWeek {
    api_key_id?: number;
    avg_commission?: string;
    avg_loss?: string;
    avg_loss_mae?: string;
    avg_percent?: string;
    avg_win?: string;
    avg_win_mae?: string;
    commission?: string;
    count?: number;
    dateValue?: string;
    duration?: string;
    duration_loss?: string;
    duration_win?: string;
    first_trade?: string;
    from?: string;
    funding?: string;
    leverage?: string;
    long_count?: number;
    max_leverage?: string;
    min_leverage?: string;
    net_profit?: string;
    percent?: string;
    profit_deposit?: string;
    realized_pnl?: string;
    symbol?: string;
    to?: string;
    total_loss?: string;
    total_win?: string;
    volume?: string;
    week?: number;
    week_day?: number;
    win_count?: number;
}
export declare enum ServicesTradeDurationType {
    TradeDurationTypeToday = "today",
    TradeDurationTypeYesterday = "yesterday",
    TradeDurationTypePast1W = "past1w",
    TradeDurationType1W = "1w",
    TradeDurationType1M = "1m",
    TradeDurationType7D = "7d",
    TradeDurationType30D = "30d",
    TradeDurationType90D = "90d"
}
export declare enum ServicesTradeExtraInfoFilter {
    TradeExtraInfoFilterEntryReasonsEmpty = "tags:empty",
    TradeExtraInfoFilterEntryReasonsNotEmpty = "tags:not-empty",
    TradeExtraInfoFilterConclusionEmpty = "conclusion:empty",
    TradeExtraInfoFilterConclusionNotEmpty = "conclusion:not-empty",
    TradeExtraInfoFilterDescEmpty = "desc:empty",
    TradeExtraInfoFilterDescNotEmpty = "desc:not-empty",
    TradeExtraInfoFilterMentorNoteEmpty = "mentor_note:empty",
    TradeExtraInfoFilterMentorNoteNotEmpty = "mentor_note:not-empty"
}
export interface ServicesTradeFilters {
    api_key_id?: number[];
    api_key_id_params?: string;
    category?: number[];
    category_params?: string;
    closeBetween?: string;
    daysOfWeek?: number[];
    durationBetween?: string;
    durationType?: ServicesTradeDurationType;
    exit_tags?: number[];
    exit_tags_params?: string;
    extraInfo?: ServicesTradeExtraInfoFilter;
    groupBy?: ServicesTradeGroupBy;
    headers?: string[];
    id?: number;
    ids?: number[];
    leverageBetween?: string;
    maeBetween?: string;
    mfeBetween?: string;
    multiplier?: string;
    openBetween?: string;
    percentBetween?: string;
    profitBetween?: string;
    profitDepositBetween?: string;
    side?: string;
    state?: ServicesTradeState;
    symbol?: string[];
    symbol_params?: string;
    tags?: number[];
    tags_params?: string;
    trade_time?: "open_time" | "close_time";
    user_id?: number;
    volumeBetween?: string;
    volumeFrom?: number;
    volumeTo?: number;
}
export declare enum ServicesTradeGroupBy {
    TradeGroupByMinute = "minute",
    TradeGroupByHour = "hour",
    TradeGroupByMonth = "month",
    TradeGroupByDate = "date",
    TradeGroupByWeek = "week"
}
export declare enum ServicesTradeMultiplier {
    TradeMultiplier1 = 0,
    TradeMultiplier1000 = 1,
    TradeMultiplier10000 = 2,
    TradeMultiplier100000 = 3,
    TradeMultiplier1000000 = 4
}
export declare enum ServicesTradeProcess {
    TradeUnprocessed = 0,
    TradePartiallyProcessed = 1,
    TradeProcessCompleted = 3
}
export declare enum ServicesTradeSide {
    TradeLong = "LONG",
    TradeShort = "SHORT",
    TradeBoth = "BOTH"
}
export declare enum ServicesTradeState {
    TradeStateOpen = 1,
    TradeStateClosed = 2
}
export interface ServicesTradeSummary {
    api_key_id?: number;
    avg_commission?: string;
    avg_loss?: string;
    avg_loss_mae?: string;
    avg_percent?: string;
    avg_win?: string;
    avg_win_mae?: string;
    commission?: string;
    count?: number;
    dateValue?: string;
    duration?: string;
    duration_loss?: string;
    duration_win?: string;
    first_trade?: string;
    funding?: string;
    leverage?: string;
    long_count?: number;
    max_leverage?: string;
    min_leverage?: string;
    net_profit?: string;
    percent?: string;
    profit_deposit?: string;
    realized_pnl?: string;
    symbol?: string;
    total_loss?: string;
    total_win?: string;
    volume?: string;
    week_day?: number;
    win_count?: number;
}
export declare enum ServicesTradeTimeColumn {
    TradeOpenTime = "open_time",
    TradeCloseTime = "close_time"
}
export interface ServicesTradesListPagination {
    current_page?: number;
    data?: ServicesTrade[];
    defaultSort?: boolean;
    last_page?: number;
    per_page?: number;
    per_page_limit?: number;
    sortBy?: string;
    sortDesc?: boolean;
    sort_fields?: string[];
    total?: number;
    total_sum?: ServicesTradeSummary;
}
export interface ServicesTransaction {
    address?: string;
    amount?: string;
    amount_to_paid?: string;
    coin?: string;
    created_at?: string;
    gateway_info?: string;
    id?: number;
    level?: ServicesMembership;
    months?: number;
    payed?: string;
    source?: ServicesTransactionSource;
    status?: ServicesTransactionStatus;
    updated_at?: string;
    user_id?: number;
    valid_until?: number;
}
export interface ServicesTransactionDiscount {
    discount?: string;
    promo_code?: string;
    type?: ServicesTransactionDiscountType;
}
export declare enum ServicesTransactionDiscountType {
    TransactionDiscountTypePercent = "percent",
    TransactionDiscountTypeAmount = "amount"
}
export declare enum ServicesTransactionSource {
    TransactionSourceUsdtTrc20 = "usdt_trc20",
    TransactionSourceBUsdBep20 = "busd_bep20",
    TransactionSourceUsdtBep20 = "usdt_bep20",
    TransactionSourceTmm = "tmm",
    TransactionSourceReferral = "referral",
    TransactionSourceStripe = "stripe",
    TransactionSourceWLC = "wlc",
    TransactionSourceTiger = "tiger",
    TransactionSourceBUsdtTrc20 = "b_usdt_trc20",
    TransactionSourceBUsdtErc20 = "b_usdt_erc20",
    TransactionSourceBBUsdBep20 = "b_busd_bep20",
    TransactionSourceScDash = "sc_dash",
    TransactionSourceScBtc = "sc_btc",
    TransactionSourceScNem = "sc_nem",
    TransactionSourceCcard = "ccard",
    TransactionSourcePaypal = "paypal",
    TransactionSourceCICapital = "CICapital"
}
export declare enum ServicesTransactionStatus {
    TransactionStatusGift = "gift",
    TransactionStatusTrial = "trial",
    TransactionStatusExpired = "expired",
    TransactionStatusPaid = "paid",
    TransactionStatusError = "error",
    TransactionStatusCanceled = "canceled",
    TransactionStatusRefund = "refund",
    TransactionStatusRejected = "rejected",
    TransactionStatusFailed = "failed",
    TransactionStatusCreated = "created",
    TransactionStatusPending = "pending"
}
export interface ServicesTransactionsListPagination {
    current_page?: number;
    data?: ServicesTransaction[];
    defaultSort?: boolean;
    last_page?: number;
    per_page?: number;
    per_page_limit?: number;
    sortBy?: string;
    sortDesc?: boolean;
    sort_fields?: string[];
    total?: number;
}
export interface ServicesUIData {
    data?: string;
    id?: number;
    user_id?: number;
}
export interface ServicesUserLimits {
    api_key_limit?: number;
    dashboards_limit?: number;
    telegram_connections_limit?: number;
    widgets_limit?: number;
}
export interface ServicesUserReferralSummary {
    earn_amount?: string;
    referral_counter?: number;
    referral_counter_member?: number;
}
export interface ServicesUserWithRelations {
    api_keys?: ServicesApiKey[];
    api_keys_list?: ServicesApiKey[];
    avatar?: ServicesFile;
    created_at?: string;
    cvizor?: ServicesCVizorStatus;
    default_group_field?: ServicesDefaultGroupField;
    default_time_frame?: string;
    email?: string;
    email_verified_at?: string;
    filter_presets?: ServicesFilterPreset[];
    guides_progress?: ServicesGuideProgress;
    id?: number;
    invite_code?: string;
    language?: string;
    last_api_call_at?: string;
    league?: number;
    limits?: ServicesUserLimits;
    membership?: ServicesMembership;
    membership_valid_until?: number;
    name?: string;
    privileges?: string[];
    referral?: string;
    referral_code?: string;
    referred_by?: number;
    shard_id?: number;
    stripe?: ServicesStripe;
    theme?: number;
    timezone?: string;
    top_trader?: number;
    top_trader_api_key_id?: number;
    trial_available?: boolean;
}
export interface ServicesValidationErrorResponse {
    errors?: ServicesValidationErrors;
    status?: string;
}
export type ServicesValidationErrors = Record<string, string[]>;
export interface ServicesWidget {
    dashboardFilters?: ServicesWidgetFilters;
    dashboard_id?: number;
    filters?: ServicesWidgetFilters;
    id?: number;
    source?: ServicesWidgetSource;
    status?: number;
    title?: string;
    type?: ServicesWidgetType;
    type2?: ServicesWidgetType2;
    type3?: string;
}
export interface ServicesWidgetCreateResponse {
    data?: ServicesWidget;
    errors?: string[];
    serverData?: string;
    status?: string;
}
export interface ServicesWidgetFilters {
    color?: string;
    disabledCounter?: boolean;
    filter?: ServicesTradeFilters;
    ma?: number;
    mini?: boolean;
    private?: boolean;
    simpleSortBy?: ServicesWidgetFiltersSortBy;
}
export declare enum ServicesWidgetFiltersSortBy {
    WidgetFiltersSortByValueAsc = "value_asc",
    WidgetFiltersSortByValueDesc = "value_desc",
    WidgetFiltersSortByCountKeyDesc = "key_desc",
    WidgetFiltersSortByCountKeyAsc = "key_asc"
}
export declare enum ServicesWidgetSource {
    WidgetSourceTickerPrice = "ticker_price",
    WidgetSourceStdDevProfitOverVolume = "std_dev_profit_over_volume",
    WidgetSourceStdDevMAEOverDuration = "std_dev_mae_over_duration",
    WidgetSourceStdDevMFEOverDuration = "std_dev_mfe_over_duration",
    WidgetSourceStdDevProfitOverDuration = "std_dev_profit_over_duration",
    WidgetSourceStdDevProfit = "std_dev_profit",
    WidgetSourceStdDevMFE = "std_dev_mfe",
    WidgetSourceStdDevMAE = "std_dev_mae",
    WidgetSourceRiskManagementValues = "risk_values_usd",
    WidgetSourceNetProfit = "income_usdt",
    WidgetSourceIncomeStacked = "income_usdt_stacked",
    WidgetSourceIncomeStackedNormalized = "income_usdt_stacked_normalized",
    WidgetSourceNetProfitCandleStick = "income_usdt_candlestick",
    WidgetSourceProfitLoss = "profit_loss",
    WidgetSourceFunding = "funding",
    WidgetSourcePercent = "income_percent",
    WidgetSourcePercentToDeposit = "income_percent_balance",
    WidgetSourcePercentToDepositCumulative = "income_percent_balance_cumulative",
    WidgetSourceAvgPercentToDeposit = "avg_income_percent_balance",
    WidgetSourceMaxDrawdown = "max_drawdown",
    WidgetSourceRecoveryFactor = "recovery_factor",
    WidgetSourceVolume = "volume",
    WidgetSourceVolumePerSymbol = "volume_per_symbol",
    WidgetSourceAvgVolume = "avg_volume",
    WidgetSourceAvgVolumePerSymbol = "avg_volume_per_symbol",
    WidgetSourceWinPercent = "winning_percent",
    WidgetSourceLossPercent = "loosing_percent",
    WidgetSourceIncomeByApiKey = "income_usdt_api_keys",
    WidgetSourceIncomeStackedByApiKey = "income_usdt_stacked_by_api_keys",
    WidgetSourceIncomeByEntryReasons = "tag_profit",
    WidgetSourcePercentByEntryReasons = "tag_percent",
    WidgetSourceEntryReasonCombination = "tag_percent_combinations",
    WidgetSourceWinRateEntryReasonCombination = "tag_win_rate_combinations",
    WidgetSourceIncomeAccumulative = "income_usdt_accumulative",
    WidgetSourceIncomeAccumulativeByApiKey = "income_usdt_accumulative_by_api_key",
    WidgetSourceVolumeAccumulative = "volume_usdt_accumulative",
    WidgetSourceAnonymousIncomeAccumulative = "income_usdt_anonymous_accumulative",
    WidgetAverageReturn = "average_return",
    WidgetSourceMathExpectation = "math_expectation",
    WidgetSourceTradingSessionMathExpectation = "trading_session_math_expectation",
    WidgetSourcePayOffRatio = "pay_off_ratio",
    WidgetSourceProfitFactor = "profit_factor",
    WidgetSourceProfitFactorPerSymbol = "profit_factor_per_symbol",
    WidgetSourceCounter = "counter",
    WidgetSourceCounterByApiKey = "counter_api_keys",
    WidgetSourceCommission = "commission_usdt",
    WidgetSourceCommissionAccumulative = "commission_usdt_accumulative",
    WidgetSourceBalance = "balance",
    WidgetSourceBalancePerApiKey = "balance_per_api_key",
    WidgetSourceCountPerSymbol = "pie_symbol",
    WidgetSourceWinPerSymbol = "pie_symbol_income_profit",
    WidgetSourceIncomePerSymbol = "symbol_income",
    WidgetSourceLossPerSymbol = "pie_symbol_income_loose",
    WidgetSourceIncomePerCategory = "category_profit",
    WidgetSourceWinPerCategory = "category_win_percentage",
    WidgetSourceWinPercentByDayOfWeek = "weekday_percent",
    WidgetSourceIncomeByDayOfWeek = "weekday_profit",
    WidgetSourceIncomeByHourOfDay = "hourly_profit",
    WidgetSourceWinPercentByHourOfDay = "hourly_percent",
    WidgetSourceAvgLossDeviation = "average_loss_deviation_percent",
    WidgetSourceAvgIncome = "average_usdt",
    WidgetSourceAvgIncomePerDay = "average_usdt_sum",
    WidgetSourceAvgWin = "average_winning_usdt",
    WidgetSourceAvgLoss = "average_loosing_usdt",
    WidgetSourceAvgPercent = "average_percent",
    WidgetSourceAvgWinPercent = "average_winning_percent",
    WidgetSourceAvgLossPercent = "average_loosing_percent",
    WidgetSourceAvgMFE = "average_max_win_percent",
    WidgetSourceMaxMFE = "max_max_win_percent",
    WidgetSourceAvgMAE = "average_max_loose_percent",
    WidgetSourceMaxMAE = "max_max_loose_percent",
    WidgetSourceMinMAE = "min_max_loose_percent",
    WidgetSourceAvgLeverage = "average_leverage",
    WidgetSourceMinLeverage = "min_leverage",
    WidgetSourceMaxLeverage = "max_leverage",
    WidgetSourceAvgDuration = "holding_time_average",
    WidgetSourceAvgDurationBySymbol = "symbol_duration_average",
    WidgetSourceMinDuration = "holding_time_min",
    WidgetSourceMaxDuration = "holding_time_max",
    WidgetSourceWorstTrade = "worst_usdt",
    WidgetSourceBestTrade = "best_usdt",
    WidgetSourceWorstPercent = "worst_percent",
    WidgetSourceBestPercent = "best_percent",
    WidgetSourceLongShort = "pie_side"
}
export declare enum ServicesWidgetType {
    WidgetTypeChart = "chart",
    WidgetTypeNumber = "number",
    WidgetTypeCalendar = "calendar"
}
export declare enum ServicesWidgetType2 {
    WidgetType2Line = "line",
    WidgetType2LineStep = "line-step",
    WidgetType2LineSimple = "line-simple",
    WidgetType2Pie = "pie",
    WidgetType2Column = "column",
    WidgetType2TreeMap = "treemap",
    WidgetType2Bubble = "bubble",
    WidgetType2CandleStick = "candlestick"
}
//# sourceMappingURL=data-contracts.d.ts.map