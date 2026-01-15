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
export interface ControllersApiSuccessArrayServicesApiKey {
    data?: ServicesApiKey[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesDashboard {
    data?: ServicesDashboard[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesOrder {
    data?: ServicesOrder[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesRiskManagementBacktestResult {
    data?: ServicesRiskManagementBacktestResult[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesTag {
    data?: ServicesTag[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesTeamTopData {
    data?: ServicesTeamTopData[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesTradeCountByWeek {
    data?: ServicesTradeCountByWeek[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesTransaction {
    data?: ServicesTransaction[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessInt64 {
    data?: number;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesApiKey {
    data?: ServicesApiKey;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesApiUser {
    data?: ServicesApiUser;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesDashboard {
    data?: ServicesDashboard;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesFilterPreset {
    data?: ServicesFilterPreset;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesNotificationTemplate {
    data?: ServicesNotificationTemplate;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesTag {
    data?: ServicesTag;
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
export interface ControllersApiSuccessServicesTransactionDiscount {
    data?: ServicesTransactionDiscount;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessString {
    data?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessNoData {
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
export interface ControllersDiscordListResponse {
    data?: ServicesDiscordConnect[];
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
export interface ControllersLoadBoardResponse {
    dashboard?: ServicesDashboard;
    errors?: Record<string, string>;
    public_profile?: ServicesPublicProfile;
    serverData?: Record<string, string>;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersLoadLayoutResponse {
    data?: ServicesDashboard;
    public_profile?: ServicesPublicProfile;
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
export interface ControllersPnlEntry {
    counter?: number;
    dateValue?: string;
    value?: string;
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
    cumulative_pnl?: Record<string, ControllersPnlEntry>;
    data?: ServicesTrade[];
    from?: number;
    public_profile?: ServicesPublicProfile;
    status?: ControllersResponseStatusMessage;
    to?: number;
    win_rate?: ControllersPnlEntry;
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
export interface ControllersTransactionCreateResponse {
    data?: any;
    redirect_url?: string;
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
    exchange_id: 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 40 | 41 | 11 | 21 | 12 | 22 | 13 | 14 | 15 | 23 | 24 | 25 | 32 | 33 | 42 | 43 | 44 | 45 | 46 | 50;
    extra_info?: string;
    key_private?: string;
    key_public?: string;
    name: string;
}
export interface DtoApiKeyUpdateForm {
    extra_info?: string;
    key_private?: string;
    key_public?: string;
    name: string;
}
export interface DtoApiKeyUpdateNameForm {
    name: string;
}
export interface DtoApiUserUpdateForm {
    ip?: string[];
    name: string;
    read_only?: boolean;
    userID?: number;
}
export interface DtoBalanceRecord {
    balance_usd: number;
    updated_at: number;
}
export interface DtoBatchApiKeyCreateForm {
    balances?: DtoBalanceRecord[];
    exchange_id: number[];
    extra_info?: string;
    key_private?: string;
    key_public?: string;
    name: string;
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
export interface DtoDashboardExportForm {
    description?: string;
    keep_filters: boolean;
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
export interface DtoNotificationTemplateCreateForm {
    hide_tmm?: 0 | 1;
    name: string;
    template: string;
}
export interface DtoNotificationTemplateUpdateForm {
    hide_tmm?: 0 | 1;
    name: string;
    template: string;
}
export interface DtoOauth2SwapForm {
    code: string;
    key: string;
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
    per_day_usd?: string;
    per_trade?: string;
    per_trade_usd?: string;
}
export interface DtoRiskManagementUpdateForm {
    api_key_id?: number;
    id?: number;
    max_leverage?: string;
    per_day?: string;
    per_day_usd?: string;
    per_trade?: string;
    per_trade_usd?: string;
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
    color_bg?: string;
    column?: 1 | 2;
    id?: number;
    is_group?: 0 | 1;
    name?: string;
    score?: number;
    tags_id?: number[];
}
export interface DtoTagsSort {
    id: number;
    order?: number;
    score?: number;
}
export interface DtoTagsSortForm {
    tags: DtoTagsSort[];
}
export interface DtoTeamCreateForm {
    custom_from?: number;
    custom_to?: number;
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
    custom_from?: number;
    custom_to?: number;
    description?: string;
    invite_code?: string;
    name: string;
    status: 1 | 2;
}
export interface DtoTelegramConnectForm {
    api_keys: number[];
    close_template_id?: number;
    close_trade_notification?: 1 | 2;
    execute_template_id?: number;
    language: "ru" | "en";
    name: string;
    new_trade_notification?: 0 | 1 | 2 | 3;
    open_template_id?: number;
    preview?: 0 | 1 | 2;
    privacy_mode?: 0 | 1;
    risk_notification?: 0 | 1;
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
    avgTrades15m6h?: string;
    avgTrades1h24h?: string;
    avgTrades1m30m?: string;
    avgTrades30m12h?: string;
    avgTrades5m2h?: string;
    avgVolume15m6h?: string;
    avgVolume1h24h?: string;
    avgVolume1m30m?: string;
    avgVolume30m12h?: string;
    avgVolume5m2h?: string;
    btcCorr1m50?: string;
    btcCorr5m20?: string;
    category?: number[];
    category_params?: "not:";
    closeBetween?: string;
    daysOfWeek?: number[];
    durationBetween?: string;
    durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
    exit_tags?: number[];
    exit_tags_params?: "not:" | "all:" | "not:all:" | "only:";
    extraInfo?: "conclusion:empty" | "conclusion:not-empty" | "desc:empty" | "desc:not-empty" | "mentor_note:not-empty" | "mentor_note:empty";
    fundingRate?: string;
    groupBy?: "minute" | "hour" | "month" | "date" | "week";
    headers?: string[];
    hours_of_day?: number[];
    hours_of_day_params?: string;
    id?: number;
    ids?: number[];
    leverageBetween?: string;
    maeBetween?: string;
    mfeBetween?: string;
    multiplier?: string;
    natr1m30?: string;
    natr5m14?: string;
    openBetween?: string;
    percentBetween?: string;
    priceRange12h?: string;
    priceRange15m?: string;
    priceRange1h?: string;
    priceRange1m?: string;
    priceRange24h?: string;
    priceRange2h?: string;
    priceRange30m?: string;
    priceRange4h?: string;
    priceRange5m?: string;
    priceRange6h?: string;
    profitBetween?: string;
    profitDepositBetween?: string;
    side?: "LONG" | "SHORT";
    state?: 0 | 1 | 2;
    symbol?: string[];
    symbol_params?: "not:";
    tags?: number[];
    tags_params?: "not:" | "all:" | "not:all:" | "only:";
    trade_time?: string;
    trades12h?: string;
    trades15m?: string;
    trades1h?: string;
    trades1m?: string;
    trades24h?: string;
    trades2h?: string;
    trades30m?: string;
    trades4h?: string;
    trades5m?: string;
    trades6h?: string;
    tradesSpike15m6h?: string;
    tradesSpike1h24h?: string;
    tradesSpike1m30m?: string;
    tradesSpike30m12h?: string;
    tradesSpike5m2h?: string;
    user_id?: number;
    volume12h?: string;
    volume15m?: string;
    volume1h?: string;
    volume1m?: string;
    volume24h?: string;
    volume2h?: string;
    volume30m?: string;
    volume4h?: string;
    volume5m?: string;
    volume6h?: string;
    volumeBetween?: string;
    volumeFrom?: number;
    volumeSpike15m6h?: string;
    volumeSpike1h24h?: string;
    volumeSpike1m30m?: string;
    volumeSpike30m12h?: string;
    volumeSpike5m2h?: string;
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
    default_time_frame?: "1s" | "5s" | "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "4h" | "12h" | "1d";
    email: string;
    language: "ru" | "en";
    name: string;
    start_of_week?: "sunday" | "monday";
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
export interface ServicesApiKey {
    created_at?: string;
    enabled?: ServicesApiKeyEnabledStatus;
    exchange_id?: ServicesExchangeID;
    extra_info?: string;
    flag1?: number;
    flag2?: number;
    flag3?: number;
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
    API_KEY_WS_FROZEN = 2,
    API_KEY_WS_BLOCKED_HIGH_LOAD = 3
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
    api_key_safe?: string;
    created_at?: string;
    id?: number;
    ip?: string[];
    name?: string;
    read_only?: ServicesApiUserRead;
    type?: ServicesApiUserType;
    updated_at?: string;
    user?: ServicesUnSafeUser;
    user_id?: number;
}
export declare enum ServicesApiUserRead {
    API_USER_READ_WRITE = 1,
    API_USER_READ_ONLY = 2
}
export declare enum ServicesApiUserType {
    API_USER_TYPE_USER_CREATED = 1,
    API_USER_TYPE_OAUTH_CREATED = 2
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
export interface ServicesCategory {
    id?: number;
    name?: string;
    order?: number;
    user_id?: number;
}
export interface ServicesDashboard {
    description?: string;
    filters?: ServicesWidgetFilters;
    id?: number;
    installs?: number;
    layouts?: string;
    name?: string;
    order?: number;
    over_limit?: boolean;
    short_url?: string;
    status?: ServicesDashboardStatus;
    user_id?: number;
    widgets?: ServicesWidget[];
}
export declare enum ServicesDashboardStatus {
    DashboardStatusDefault = 0,
    DashboardStatusExport = 1
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
    close_template_id?: number;
    close_trade_notification?: ServicesDiscordCloseNotification;
    created_at?: string;
    execute_template_id?: number;
    guild_id?: number;
    hash?: string;
    id?: number;
    language?: ServicesLocale;
    name?: string;
    new_trade_notification?: ServicesDiscordNotification;
    open_template_id?: number;
    owner_id?: number;
    preview?: ServicesTelegramConnectPreview;
    privacy_mode?: ServicesDiscordConnectPrivacy;
    risk_notification?: ServicesTelegramConnectRiskNotification;
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
    EXCHANGE_BITGET_SPOT = 41,
    EXCHANGE_OKX_PERP_SWAPS = 8,
    EXCHANGE_OKX_SPOT = 9,
    EXCHANGE_BINGX_FUTURES = 10,
    EXCHANGE_GATEIO_SPOT = 40,
    EXCHANGE_GATEIO_FUTURES = 46,
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
    EXCHANGE_TIGER_OKX_SPOT = 33,
    EXCHANGE_TIGER_BINANCE_FUTURES = 42,
    EXCHANGE_TIGER_BINANCE_SPOT = 43,
    EXCHANGE_TIGERX_OKX_FUTURES = 44,
    EXCHANGE_TIGERX_OKX_SPOT = 45,
    EXCHANGE_HYPERLIQUID_FUTURES = 50
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
export declare enum ServicesLocale {
    LocaleRu = "ru",
    LocaleEn = "en"
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
export interface ServicesNotificationTemplate {
    created_at?: string;
    hide_tmm?: ServicesNotificationTemplateHideTMM;
    id?: number;
    name?: string;
    template?: string;
    updated_at?: string;
    user_id?: number;
}
export declare enum ServicesNotificationTemplateHideTMM {
    NotificationTemplateHideTMMDefault = 0,
    NotificationTemplateHideTMMEnabled = 1
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
    OrderTypeFunding = "FUNDING",
    OrderTypeLiquidation = "LIQUIDATION"
}
export declare enum ServicesOrigType {
    OrderOrigTypeReverse = "REVERSE",
    OrderOrigTypeLiquidation = "LIQUIDATION"
}
export interface ServicesPaginationResponseArrayServicesNotificationTemplate {
    current_page?: number;
    data?: ServicesNotificationTemplate[];
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
export interface ServicesPaginationResponseArrayServicesTransaction {
    current_page?: number;
    data?: ServicesTransaction[];
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
    per_day_usd?: string;
    per_trade?: string;
    per_trade_usd?: string;
    updated_at?: string;
}
export interface ServicesRiskManagementBacktestResult {
    count_daily_viol?: number;
    count_lev_viol?: number;
    count_trade_viol?: number;
    counter?: number;
    dateValue?: string;
    gain_daily?: string;
    gain_lev?: string;
    gain_trade?: string;
    profit_usd_adjusted?: string;
    profit_usd_original?: string;
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
    RiskManagementLogTypeDayLoss = 3,
    RiskManagementLogTypeTradeLossUSD = 4,
    RiskManagementLogTypeDayLossUSD = 5
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
    ShortUrlModelTypeDashboard = "Dashboard",
    ShortUrlModelTypeDashboardLayout = "DashboardLayout"
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
    color_bg?: string;
    column?: ServicesTagColumn;
    id?: number;
    is_group?: number;
    name?: string;
    score?: number;
    tags?: ServicesTag[];
    user_id?: number;
}
export declare enum ServicesTagColumn {
    TagColumnEntryReason = 1,
    TagColumnExitReason = 2,
    TagColumnConclusion = 3
}
export interface ServicesTeam {
    created_at?: string;
    custom_from?: number;
    custom_to?: number;
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
    custom_from?: number;
    custom_to?: number;
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
export interface ServicesTeamTopData {
    api_key_id?: number;
    email?: string;
    exchange_id?: ServicesExchangeID;
    name?: string;
    percent?: string;
    pnl?: string;
    qty?: string;
    user_id?: number;
    value?: string;
}
export declare enum ServicesTeamTopPeriod {
    TeamTopPeriodToday = "today",
    TeamTopPeriodYesterday = "yesterday",
    TeamTopPeriod7Days = "7days",
    TeamTopPeriod14Days = "14days",
    TeamTopPeriod30Days = "30days",
    TeamTopPeriodCustom = "custom"
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
    custom_from?: number;
    custom_to?: number;
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
    close_template_id?: number;
    close_trade_notification?: ServicesTelegramCloseNotification;
    created_at?: string;
    execute_template_id?: number;
    hash?: string;
    id?: number;
    language?: ServicesLocale;
    name?: string;
    new_trade_notification?: ServicesTelegramNotification;
    open_template_id?: number;
    preview?: ServicesTelegramConnectPreview;
    privacy_mode?: ServicesTelegramConnectPrivacy;
    risk_notification?: ServicesTelegramConnectRiskNotification;
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
export declare enum ServicesTelegramConnectRiskNotification {
    TelegramConnectRiskNotificationEnabled = 1,
    TelegramConnectRiskNotificationDisabled = 0
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
    archive?: number;
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
    symbol?: string;
    t_t_tools_data?: string;
    t_t_tools_data_close?: string;
    tags?: ServicesTag[];
    trade_extra?: ServicesTradeExtra;
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
export interface ServicesTradeExtra {
    avgTrades15m6h?: number;
    avgTrades1h24h?: number;
    avgTrades1m30m?: number;
    avgTrades30m12h?: number;
    avgTrades5m2h?: number;
    avgVolume15m6h?: number;
    avgVolume1h24h?: number;
    avgVolume1m30m?: number;
    avgVolume30m12h?: number;
    avgVolume5m2h?: number;
    btcCorr1m50?: number;
    btcCorr5m20?: number;
    fundingRate?: number;
    natr1m30?: number;
    natr5m14?: number;
    priceRange12h?: number;
    priceRange15m?: number;
    priceRange1h?: number;
    priceRange1m?: number;
    priceRange24h?: number;
    priceRange2h?: number;
    priceRange30m?: number;
    priceRange4h?: number;
    priceRange5m?: number;
    priceRange6h?: number;
    trades12h?: number;
    trades15m?: number;
    trades1h?: number;
    trades1m?: number;
    trades24h?: number;
    trades2h?: number;
    trades30m?: number;
    trades4h?: number;
    trades5m?: number;
    trades6h?: number;
    tradesSpike15m6h?: number;
    tradesSpike1h24h?: number;
    tradesSpike1m30m?: number;
    tradesSpike30m12h?: number;
    tradesSpike5m2h?: number;
    volume12h?: number;
    volume15m?: number;
    volume1h?: number;
    volume1m?: number;
    volume24h?: number;
    volume2h?: number;
    volume30m?: number;
    volume4h?: number;
    volume5m?: number;
    volume6h?: number;
    volumeSpike15m6h?: number;
    volumeSpike1h24h?: number;
    volumeSpike1m30m?: number;
    volumeSpike30m12h?: number;
    volumeSpike5m2h?: number;
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
    avgTrades15m6h?: string;
    avgTrades1h24h?: string;
    avgTrades1m30m?: string;
    avgTrades30m12h?: string;
    avgTrades5m2h?: string;
    avgVolume15m6h?: string;
    avgVolume1h24h?: string;
    avgVolume1m30m?: string;
    avgVolume30m12h?: string;
    avgVolume5m2h?: string;
    btcCorr1m50?: string;
    btcCorr5m20?: string;
    category?: number[];
    category_params?: string;
    closeBetween?: string;
    daysOfWeek?: number[];
    daysOfWeek_params?: string;
    durationBetween?: string;
    durationType?: ServicesTradeDurationType;
    exit_tags?: number[];
    exit_tags_params?: string;
    extraInfo?: ServicesTradeExtraInfoFilter;
    fundingRate?: string;
    groupBy?: ServicesTradeGroupBy;
    headers?: string[];
    hours_of_day?: number[];
    hours_of_day_params?: string;
    id?: number;
    ids?: number[];
    leverageBetween?: string;
    maeBetween?: string;
    mfeBetween?: string;
    multiplier?: string;
    natr1m30?: string;
    natr5m14?: string;
    openBetween?: string;
    orders_extended?: boolean;
    percentBetween?: string;
    priceRange12h?: string;
    priceRange15m?: string;
    priceRange1h?: string;
    priceRange1m?: string;
    priceRange24h?: string;
    priceRange2h?: string;
    priceRange30m?: string;
    priceRange4h?: string;
    priceRange5m?: string;
    priceRange6h?: string;
    profitBetween?: string;
    profitDepositBetween?: string;
    side?: string;
    state?: ServicesTradeState;
    symbol?: string[];
    symbol_params?: string;
    tags?: number[];
    tags_params?: string;
    trade_time?: "open_time" | "close_time";
    trades12h?: string;
    trades15m?: string;
    trades1h?: string;
    trades1m?: string;
    trades24h?: string;
    trades2h?: string;
    trades30m?: string;
    trades4h?: string;
    trades5m?: string;
    trades6h?: string;
    tradesSpike15m6h?: string;
    tradesSpike1h24h?: string;
    tradesSpike1m30m?: string;
    tradesSpike30m12h?: string;
    tradesSpike5m2h?: string;
    user_id?: number;
    volume12h?: string;
    volume15m?: string;
    volume1h?: string;
    volume1m?: string;
    volume24h?: string;
    volume2h?: string;
    volume30m?: string;
    volume4h?: string;
    volume5m?: string;
    volume6h?: string;
    volumeBetween?: string;
    volumeFrom?: number;
    volumeSpike15m6h?: string;
    volumeSpike1h24h?: string;
    volumeSpike1m30m?: string;
    volumeSpike30m12h?: string;
    volumeSpike5m2h?: string;
    volumeTo?: number;
    widget_mode?: boolean;
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
export interface ServicesUIData {
    data?: string;
    id?: number;
    user_id?: number;
}
export interface ServicesUnSafeUser {
    avatar?: ServicesFile;
    email?: string;
    id?: number;
    name?: string;
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
export declare enum ServicesUserStartOfWeek {
    UserStartOfWeekSunday = "sunday",
    UserStartOfWeekMonday = "monday"
}
export interface ServicesUserWithRelations {
    api_keys_list?: ServicesApiKey[];
    avatar?: ServicesFile;
    categories?: ServicesCategory[];
    created_at?: string;
    cvizor?: ServicesCVizorStatus;
    default_group_field?: ServicesDefaultGroupField;
    default_time_frame?: string;
    discord?: ServicesDiscordConnect[];
    email?: string;
    email_verified_at?: string;
    filter_presets?: ServicesFilterPreset[];
    guides_progress?: ServicesGuideProgress;
    id?: number;
    invite_code?: string;
    language?: ServicesLocale;
    last_api_call_at?: string;
    league?: number;
    limits?: ServicesUserLimits;
    membership?: ServicesMembership;
    membership_valid_until?: number;
    name?: string;
    privileges?: string[];
    public_profile?: ServicesPublicProfile;
    referral?: string;
    referral_code?: string;
    referral_summary?: ServicesUserReferralSummary;
    referred_by?: number;
    risk_management?: ServicesRiskManagement[];
    session_reset_at?: number;
    shard_id?: number;
    start_of_week?: ServicesUserStartOfWeek;
    stripe?: ServicesStripe;
    tags?: ServicesTag[];
    telegram?: ServicesTelegramConnect[];
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
    WidgetSourcePercentBySymbol = "income_percent_by_symbol",
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
    WidgetSourceIncomeByExitReasons = "exit_tag_profit",
    WidgetSourcePercentByEntryReasons = "tag_percent",
    WidgetSourcePercentByExitReasons = "exit_tag_percent",
    WidgetSourceEntryReasonCombination = "tag_percent_combinations",
    WidgetSourceExitReasonCombination = "exit_tag_percent_combinations",
    WidgetSourceWinRateEntryReasonCombination = "tag_win_rate_combinations",
    WidgetSourceWinRateExitReasonCombination = "exit_tag_win_rate_combinations",
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
    WidgetSourceWinRatePerSymbol = "win_rate_per_symbol",
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