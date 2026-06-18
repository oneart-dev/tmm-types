export interface ChatChatMessage {
    content?: string;
    name?: string;
    role?: ChatChatRole;
    tool_call_id?: string;
    tool_calls?: ChatToolCall[];
}
export declare enum ChatChatRole {
    RoleSystem = "system",
    RoleUser = "user",
    RoleAssistant = "assistant",
    RoleTool = "tool"
}
export interface ChatExportPayload {
    owner_user_id?: number;
    rounds?: ChatExportedRound[];
    thread_id?: number;
    thread_uid?: string;
}
export interface ChatExportedRound {
    messages?: ChatChatMessage[];
    model?: string;
    reasoning_effort?: string;
    round_index?: number;
    temperature?: number;
    tools?: ChatToolSpec[];
    turn_index?: number;
}
export interface ChatToolCall {
    arguments?: string;
    id?: string;
    name?: string;
}
export interface ChatToolSpec {
    description?: string;
    name?: string;
    parameters?: string;
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
export interface ControllersApiSuccessArrayServicesApiKey {
    data?: ServicesApiKey[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesArtifact {
    data?: ServicesArtifact[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesArtifactVersionDTO {
    data?: ServicesArtifactVersionDTO[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesBaseConnection {
    data?: ServicesBaseConnection[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesCategory {
    data?: ServicesCategory[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesDashboard {
    data?: ServicesDashboard[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesFeedNotificationAdminListItem {
    data?: ServicesFeedNotificationAdminListItem[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesFeedNotificationFeedItem {
    data?: ServicesFeedNotificationFeedItem[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesFeedNotificationRawVote {
    data?: ServicesFeedNotificationRawVote[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesFile {
    data?: ServicesFile[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesFleetInstanceDTO {
    data?: ServicesFleetInstanceDTO[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessArrayServicesFleetNodeDTO {
    data?: ServicesFleetNodeDTO[];
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
export interface ControllersApiSuccessArrayServicesTransaction {
    data?: ServicesTransaction[];
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessControllersArtifactManifestResponse {
    data?: ControllersArtifactManifestResponse;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessControllersFeedNotificationAdminCreateData {
    data?: ControllersFeedNotificationAdminCreateData;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessControllersFeedNotificationLikeData {
    data?: ControllersFeedNotificationLikeData;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessDtoChatMemory {
    data?: DtoChatMemory;
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
export interface ControllersApiSuccessServicesFeedNotificationAnalyticsCounts {
    data?: ServicesFeedNotificationAnalyticsCounts;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesFeedNotificationComment {
    data?: ServicesFeedNotificationComment;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesFilterCatalogPayload {
    data?: ServicesFilterCatalogPayload;
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
export interface ControllersApiSuccessServicesPromoCodeApplyResult {
    data?: ServicesPromoCodeApplyResult;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesPromoCodePreview {
    data?: ServicesPromoCodePreview;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesSSEFeedNotificationEventCatalog {
    data?: ServicesSSEFeedNotificationEventCatalog;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesTag {
    data?: ServicesTag;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesTagCategory {
    data?: ServicesTagCategory;
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
export interface ControllersApiSuccessServicesTransactionQuote {
    data?: ServicesTransactionQuote;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersApiSuccessServicesWidgetPreviewResponse {
    data?: ServicesWidgetPreviewResponse;
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
export interface ControllersArtifactManifestResponse {
    manifest_json?: string;
    signature?: string;
    signer_key?: string;
}
export interface ControllersBulkSignUpSuccessResponse {
    data?: ServicesBulkSignUpResponse[];
    status?: ControllersResponseStatusMessage;
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
export interface ControllersFeedNotificationAdminCreateData {
    id?: number;
    ids?: number[];
}
export interface ControllersFeedNotificationAdminDetailResponse {
    data?: ServicesFeedNotificationAdminDetail;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersFeedNotificationAdminUpdateResponse {
    data?: ServicesFeedNotificationAdminDetail;
    removed_votes?: number;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersFeedNotificationLikeData {
    liked?: boolean;
}
export interface ControllersFeedNotificationThreadDetail {
    comments?: ServicesFeedNotificationComment[];
    notification?: ServicesFeedNotification;
    translations?: ServicesFeedNotificationTranslation[];
    user?: ServicesSafeUser;
    user_in_audience?: boolean;
}
export interface ControllersFeedNotificationThreadDetailResponse {
    data?: ControllersFeedNotificationThreadDetail;
    status?: ControllersResponseStatusMessage;
    thread_state?: ServicesFeedNotificationThreadState;
}
export interface ControllersFeedNotificationThreadInboxResponse {
    data?: ServicesFeedNotificationThreadSummary[];
    search_truncated?: boolean;
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
export interface ControllersFleetSetTargetVersionForm {
    version?: string;
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
export interface ControllersLoadBoardResponse {
    dashboard?: ServicesDashboard;
    errors?: Record<string, string>;
    filter_catalog_snapshot?: ServicesFilterCatalogSnapshot;
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
export interface ControllersTagCategoriesResponse {
    data?: ServicesTagCategory[];
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
export interface ControllersTranscribeResponse {
    cycle_end?: string;
    duration_billed_seconds?: number;
    duration_recorded_seconds?: number;
    minutes_remaining_this_cycle?: number;
    minutes_used_this_cycle?: number;
    status?: ControllersResponseStatusMessage;
    text?: string;
}
export interface ControllersTranscribeTierLimit {
    limit_minutes?: number;
    model?: string;
    tier?: "novice" | "novice_plus" | "trader" | "pro";
}
export interface ControllersTranscribeUsageResponse {
    cycle_end?: string;
    cycle_start?: string;
    limit_minutes?: number;
    remaining_minutes?: number;
    status?: ControllersResponseStatusMessage;
    tier_limits?: ControllersTranscribeTierLimit[];
    tier_model?: string;
    used_minutes?: number;
}
export interface ControllersUIDataResponse {
    data?: ServicesUIData;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersUnauthorizedResponse {
    message?: string;
    status?: ControllersResponseStatusMessage;
}
export interface ControllersWeekListResponse {
    data?: ServicesTradeCountByWeek[];
    notes?: ServicesUserNote[];
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
    exchange_id: 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 40 | 41 | 11 | 21 | 12 | 22 | 13 | 14 | 15 | 23 | 24 | 25 | 32 | 33 | 42 | 43 | 44 | 45 | 46 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57;
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
export interface DtoChatAnswerBlock {
    alias?: string;
    data?: object;
    filters?: object;
    kind?: "text" | "widget" | "trade";
    source?: string;
    text?: string;
    title?: string;
    trade_id?: number;
    type?: string;
}
export interface DtoChatCreateThreadRequest {
    analyzed_user_id?: number;
    api_key_ids?: number[];
}
export interface DtoChatCreateThreadResponse {
    allowed_api_key_ids?: number[];
    analyzed_user_id?: number;
    created_at?: string;
    owner_user_id?: number;
    profile_build_ms?: number;
    profile_bytes?: number;
    status?: "success";
    uid?: string;
}
export interface DtoChatDeleteResponse {
    status?: "success";
}
export interface DtoChatErrorResponse {
    code?: string;
    message?: string;
    status?: "error";
}
export interface DtoChatGetThreadResponse {
    header?: DtoChatThreadHeaderResponse;
    messages?: DtoChatMessageDTO[];
    status?: "success";
    turns?: DtoChatTurnDTO[];
}
export interface DtoChatListThreadsResponse {
    items?: DtoChatThreadHeaderResponse[];
    next_cursor?: string;
    status?: "success";
}
export interface DtoChatMemory {
    content?: string;
    rewrites?: number;
    size_bytes?: number;
    updated_at?: string;
}
export interface DtoChatMessageDTO {
    content?: string;
    role?: "system" | "user" | "assistant" | "tool";
}
export interface DtoChatNotAvailableResponse {
    code?: "chat_not_available";
    message?: string;
    status?: "error";
}
export interface DtoChatProfileRebuildResponse {
    profile_build_ms?: number;
    profile_bytes?: number;
    status?: "success";
}
export interface DtoChatQuotaExhaustedResponse {
    code?: "chat_quota_exhausted";
    cycle_end?: string;
    message?: string;
    status?: "error";
}
export interface DtoChatSendMessageRequest {
    question: string;
}
export interface DtoChatSendMessageResponse {
    status?: "success";
    thread_uid?: string;
    turn_index?: number;
    turn_status?: string;
}
export interface DtoChatThreadHeaderResponse {
    allowed_api_key_ids?: number[];
    analyzed_user_id?: number;
    created_at?: string;
    owner_user_id?: number;
    title?: string;
    totals?: DtoChatThreadTotals;
    uid?: string;
    updated_at?: string;
}
export interface DtoChatThreadTotals {
    cost_usd_micro?: number;
    input_tokens?: number;
    output_tokens?: number;
    turn_count?: number;
}
export interface DtoChatTurnDTO {
    answer_blocks?: DtoChatAnswerBlock[];
    final_answer?: string;
    status?: "running" | "done" | "failed";
    totals?: DtoChatTurnTotals;
    turn_index?: number;
    user_question?: string;
}
export interface DtoChatTurnTotals {
    cost_usd_micro?: number;
    input_tokens?: number;
    llm_ms?: number;
    output_tokens?: number;
    tool_ms?: number;
    wall_ms?: number;
}
export interface DtoChatUsageResponse {
    cycle_end?: string;
    exhausted?: boolean;
    status?: "success";
    usage_percent?: number;
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
export interface DtoFeedNotificationCommentCreateForm {
    image_file_ids?: number[];
    reply_to_user_id?: number;
    text?: string;
}
export interface DtoFeedNotificationCommentUpdateForm {
    image_file_ids?: number[];
    text?: string;
}
export interface DtoFeedNotificationConversationStatusForm {
    status: "open" | "pending_user" | "in_progress" | "resolved";
}
export interface DtoFeedNotificationCreateForm {
    audience_memberships?: string[];
    event_kind?: string;
    expires_at?: number;
    initial_ticket_status?: "pending_user" | "in_progress";
    kind?: "notification" | "ticket";
    poll_enabled?: boolean;
    poll_lock_at?: number;
    poll_multi_select?: boolean;
    poll_options?: DtoFeedNotificationPollOptionForm[];
    translations: Record<string, DtoFeedNotificationTranslationForm>;
    type: "global" | "personal";
    user_id?: number;
}
export interface DtoFeedNotificationPollOptionForm {
    is_other?: boolean;
    position?: number;
    translations: Record<string, string>;
}
export interface DtoFeedNotificationTranslationForm {
    image_file_id?: number;
    link_title?: string;
    link_url?: string;
    text: string;
    title: string;
}
export interface DtoFeedNotificationUpdateForm {
    audience_memberships?: string[];
    event_kind?: string;
    expires_at?: number;
    initial_ticket_status?: "pending_user" | "in_progress";
    kind?: "notification" | "ticket";
    poll_enabled?: boolean;
    poll_lock_at?: number;
    poll_multi_select?: boolean;
    poll_options?: DtoFeedNotificationPollOptionForm[];
    translations: Record<string, DtoFeedNotificationTranslationForm>;
    type: "global" | "personal";
    user_id?: number;
}
export interface DtoFeedNotificationVoteForm {
    option_ids: number[];
    other_text?: string;
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
export interface DtoNoteCategoryForm {
    name?: string;
    order?: number;
    parent_id?: number;
    roles?: string[];
}
export interface DtoNoteCategoryReorderForm {
    items: DtoNoteCategoryReorderItem[];
}
export interface DtoNoteCategoryReorderItem {
    id: number;
    order?: number;
    parent_id?: number;
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
export interface DtoPromoCodeApplyForm {
    action: "extend" | "upgrade";
    code: string;
}
export interface DtoPromoCodePreviewForm {
    code: string;
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
export interface DtoTagCategoryForm {
    id?: number;
    key?: string;
    name: string;
    order?: number;
    scope?: 1 | 2;
}
export interface DtoTagCategoryListForm {
    categories: DtoTagCategoryForm[];
}
export interface DtoTagFilterGroup {
    column: number;
    ids: number[];
    params?: "not:" | "all:" | "not:all:" | "only:";
}
export interface DtoTagForm {
    color_bg?: string;
    column?: number;
    id?: number;
    is_group?: 0 | 1;
    name?: string;
    score?: number;
    tags_id?: number[];
}
export interface DtoTagsColumnBulkUpdateForm {
    column: number;
    ids: number[];
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
export type DtoTelegramConnectForm = object;
export interface DtoTicketQuickCreateForm {
    image_file_ids?: number[];
    initial_status?: "pending_user" | "in_progress";
    text: string;
    title: string;
    user_ids?: number[];
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
    tag_columns?: number[];
    tag_groups?: DtoTagFilterGroup[];
    tag_ids?: number[];
    tag_params?: "not:" | "all:" | "not:all:" | "only:";
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
    column?: number;
    tags: DtoTagForm[];
    trade_id: number[];
}
export interface DtoTradeUpdateTagsForm {
    column?: number;
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
export interface DtoUserNoteCreateForm {
    body_html?: string;
    body_json?: string;
    category_id: number;
    date_from?: string;
    date_to?: string;
    tag_ids?: number[];
    title?: string;
}
export interface DtoUserNoteReorderForm {
    items: DtoUserNoteReorderItem[];
}
export interface DtoUserNoteReorderItem {
    category_id: number;
    id: number;
    order?: number;
}
export interface DtoUserNoteUpdateForm {
    body_html?: string;
    body_json?: string;
    category_id?: number;
    date_from?: string;
    date_to?: string;
    tag_ids?: number[];
    title?: string;
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
export interface ServicesArtifact {
    arch?: string;
    built_at?: number;
    filename?: string;
    id?: number;
    manifest?: string;
    sha256?: string;
    signature?: string;
    signer_key?: string;
    size_bytes?: number;
    version?: string;
}
export interface ServicesArtifactVersionDTO {
    arch?: string;
    version?: string;
}
export interface ServicesBaseConnection {
    api_keys?: number[];
    close_template_id?: number;
    close_trade_notify?: boolean;
    close_trade_preview?: boolean;
    created_at?: string;
    execute_template_id?: number;
    execute_trade_notify?: boolean;
    execute_trade_preview?: boolean;
    hash?: string;
    id?: number;
    language?: ServicesLocale;
    name?: string;
    new_trade_notify?: boolean;
    new_trade_preview?: boolean;
    open_template_id?: number;
    privacy_mode?: boolean;
    provider?: ServicesBaseConnectionProvider;
    risk_notification?: boolean;
    status?: ServicesConnectionStatus;
    updated_at?: string;
    user_id?: number;
}
export declare enum ServicesBaseConnectionProvider {
    TelegramConnection = "telegram",
    DiscordConnection = "discord"
}
export interface ServicesBulkSignUpResponse {
    api_key?: string;
    created_at?: string;
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
export declare enum ServicesConnectionStatus {
    TelegramConnectStatusNew = 1,
    TelegramConnectStatusConnected = 2
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
export interface ServicesDiscordConnect {
    api_keys?: number[];
    channel_id?: number;
    close_template_id?: number;
    close_trade_notify?: boolean;
    close_trade_preview?: boolean;
    created_at?: string;
    execute_template_id?: number;
    execute_trade_notify?: boolean;
    execute_trade_preview?: boolean;
    guild_id?: number;
    hash?: string;
    id?: number;
    language?: ServicesLocale;
    name?: string;
    new_trade_notify?: boolean;
    new_trade_preview?: boolean;
    open_template_id?: number;
    owner_id?: number;
    privacy_mode?: boolean;
    provider?: ServicesBaseConnectionProvider;
    risk_notification?: boolean;
    status?: ServicesConnectionStatus;
    updated_at?: string;
    user_id?: number;
    username?: string;
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
    EXCHANGE_HYPERLIQUID_FUTURES = 50,
    EXCHANGE_MEXC_SPOT = 51,
    EXCHANGE_MEXC_FUTURES = 52,
    EXCHANGE_ASTER_FUTURES = 53,
    EXCHANGE_KUCOIN_SPOT = 54,
    EXCHANGE_KUCOIN_FUTURES = 55,
    EXCHANGE_BYBIT_DEMO_LINEAR = 56,
    EXCHANGE_BYBIT_DEMO_SPOT = 57
}
export interface ServicesFeedNotification {
    audience_memberships?: string[];
    created_at?: string;
    created_by_user_id?: number;
    event_kind?: string;
    expires_at?: string;
    id?: number;
    kind?: ServicesFeedNotificationKind;
    poll_enabled?: boolean;
    poll_lock_at?: string;
    poll_multi_select?: boolean;
    published_at?: string;
    sort_key?: string;
    ticket_uid?: string;
    type?: ServicesFeedNotificationType;
    updated_at?: string;
    user_id?: number;
}
export interface ServicesFeedNotificationAdminDetail {
    images?: ServicesFile[];
    notification?: ServicesFeedNotification;
    poll_option_translations?: ServicesFeedNotificationPollOptionTranslation[];
    poll_options?: ServicesFeedNotificationPollOption[];
    publication_status?: string;
    translations?: ServicesFeedNotificationTranslation[];
    votes_count?: number;
}
export interface ServicesFeedNotificationAdminListItem {
    audience_memberships?: string[];
    author?: ServicesSafeUser;
    created_at?: string;
    created_by_user_id?: number;
    event_kind?: string;
    expires_at?: string;
    id?: number;
    kind?: ServicesFeedNotificationKind;
    languages?: string[];
    poll_enabled?: boolean;
    poll_lock_at?: string;
    poll_multi_select?: boolean;
    published_at?: string;
    sort_key?: string;
    ticket_uid?: string;
    title?: string;
    type?: ServicesFeedNotificationType;
    updated_at?: string;
    user_id?: number;
}
export interface ServicesFeedNotificationAnalyticsCounts {
    comments_count?: number;
    delivered_estimate?: number;
    liked_count?: number;
    seen_count?: number;
    tally?: ServicesFeedNotificationVoteTally[];
    votes_count?: number;
}
export interface ServicesFeedNotificationComment {
    attachments?: ServicesFile[];
    author?: ServicesSafeUser;
    author_id?: number;
    author_is_admin?: boolean;
    created_at?: string;
    id?: number;
    notification_id?: number;
    scope_user_id?: number;
    text?: string;
    updated_at?: string;
    visible_at?: string;
}
export interface ServicesFeedNotificationCommentSSEPayload {
    comment?: ServicesFeedNotificationComment;
    last_message_at?: number;
    last_message_from?: string;
    notification_id?: number;
    scope_user_id?: number;
    thread_state?: ServicesFeedNotificationThreadState;
}
export interface ServicesFeedNotificationFeedComment {
    attachments?: ServicesFile[];
    author?: ServicesSafeUser;
    author_id?: number;
    author_is_admin?: boolean;
    created_at?: string;
    id?: number;
    text?: string;
    updated_at?: string;
}
export interface ServicesFeedNotificationFeedItem {
    audience_memberships?: string[];
    caught_up?: boolean;
    comments?: ServicesFeedNotificationFeedComment[];
    conversation_status?: ServicesFeedNotificationStatus;
    created_at?: string;
    event_kind?: string;
    expires_at?: string;
    id?: number;
    kind?: string;
    my_liked?: boolean;
    my_vote?: number[];
    my_vote_other_text?: string;
    poll?: ServicesFeedNotificationFeedPoll;
    published_at?: string;
    seen?: boolean;
    sort_key?: string;
    ticket_uid?: string;
    translations?: ServicesFeedNotificationTranslation[];
    type?: string;
    user_id?: number;
}
export interface ServicesFeedNotificationFeedPoll {
    lock_at?: string;
    multi_select?: boolean;
    options?: ServicesFeedNotificationFeedPollOption[];
}
export interface ServicesFeedNotificationFeedPollOption {
    id?: number;
    is_other?: boolean;
    position?: number;
    translations?: ServicesFeedNotificationPollOptionTranslation[];
}
export declare enum ServicesFeedNotificationKind {
    FeedNotificationKindNotification = "notification",
    FeedNotificationKindTicket = "ticket"
}
export interface ServicesFeedNotificationPollOption {
    id?: number;
    is_other?: boolean;
    notification_id?: number;
    position?: number;
}
export interface ServicesFeedNotificationPollOptionTranslation {
    label?: string;
    lang?: string;
    option_id?: number;
}
export interface ServicesFeedNotificationRawVote {
    option_id?: number;
    other_text?: string;
    user?: ServicesSafeUser;
    user_id?: number;
    voted_at?: number;
}
export interface ServicesFeedNotificationRemovedSSEPayload {
    id?: number;
}
export declare enum ServicesFeedNotificationStatus {
    FeedNotificationStatusDraft = "draft",
    FeedNotificationStatusPublished = "published",
    FeedNotificationStatusOpen = "open",
    FeedNotificationStatusPendingUser = "pending_user",
    FeedNotificationStatusInProgress = "in_progress",
    FeedNotificationStatusResolved = "resolved"
}
export interface ServicesFeedNotificationStatusChangedSSEPayload {
    notification_id?: number;
    scope_user_id?: number;
    status?: string;
    thread_state?: ServicesFeedNotificationThreadState;
    ticket_uid?: string;
}
export interface ServicesFeedNotificationThreadLastMessage {
    has_attachments?: boolean;
    text?: string;
}
export interface ServicesFeedNotificationThreadNotificationRef {
    id?: number;
    kind?: string;
    ticket_uid?: string;
    title?: string;
    type?: string;
}
export interface ServicesFeedNotificationThreadSeenChangedSSEPayload {
    notification_id?: number;
    scope_user_id?: number;
    side?: string;
    thread_state?: ServicesFeedNotificationThreadState;
}
export interface ServicesFeedNotificationThreadState {
    admin_caught_up?: boolean;
    admin_last_read_at?: string;
    last_activity_at?: string;
    status?: ServicesFeedNotificationStatus;
    status_changed_at?: string;
    user_caught_up?: boolean;
    user_last_read_at?: string;
}
export interface ServicesFeedNotificationThreadSummary {
    admin_caught_up?: boolean;
    admin_last_read_at?: string;
    last_activity_at?: string;
    last_message?: ServicesFeedNotificationThreadLastMessage;
    last_message_from?: string;
    message_count?: number;
    notification?: ServicesFeedNotificationThreadNotificationRef;
    notification_id?: number;
    scope_user_id?: number;
    status?: ServicesFeedNotificationStatus;
    status_changed_at?: string;
    user?: ServicesSafeUser;
    user_caught_up?: boolean;
    user_last_read_at?: string;
}
export interface ServicesFeedNotificationTranslation {
    image?: ServicesFile;
    image_file_id?: number;
    lang?: string;
    link_title?: string;
    link_url?: string;
    notification_id?: number;
    text?: string;
    title?: string;
}
export declare enum ServicesFeedNotificationType {
    FeedNotificationTypeGlobal = "global",
    FeedNotificationTypePersonal = "personal"
}
export interface ServicesFeedNotificationVoteTally {
    count?: number;
    option_id?: number;
}
export interface ServicesFile {
    expires_at?: string;
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
    FileOwnerTypePublicProfile = "PublicProfile",
    FileOwnerTypeUserNote = "UserNote",
    FileOwnerTypeNotification = "Notification",
    FileOwnerTypeNotificationComment = "NotificationComment"
}
export interface ServicesFilterCatalogContext {
    accessMode?: string;
    catalogAccessPolicy?: string;
    subjectUserId?: number;
    viewerUserId?: number;
}
export interface ServicesFilterCatalogPayload {
    catalogs?: ServicesFilterCatalogs;
    context?: ServicesFilterCatalogContext;
    subjects?: ServicesFilterCatalogSubject[];
    updated_at?: number;
}
export interface ServicesFilterCatalogSnapshot {
    catalogs?: ServicesFilterCatalogs;
    context?: ServicesFilterCatalogContext;
    updated_at?: number;
}
export interface ServicesFilterCatalogSubject {
    groupId?: number;
    groupName?: string;
    name?: string;
    userId?: number;
}
export interface ServicesFilterCatalogs {
    apiKeys?: ServicesApiKey[];
    categories?: ServicesCategory[];
    tagCategories?: ServicesTagCategory[];
    tags?: ServicesTag[];
}
export interface ServicesFilterPreset {
    id?: number;
    name?: string;
    preset?: string;
    user_id?: number;
}
export interface ServicesFleetActivityDTO {
    created_at?: string;
    id?: number;
    properties?: string;
    type?: string;
}
export interface ServicesFleetInstanceDTO {
    exchange_id?: number;
    exchange_name?: string;
    id?: number;
    key_count?: number;
    node_ip?: string;
    owned?: boolean;
    status?: string;
    swapping?: string;
    target_version?: string;
    uid?: string;
    version?: string;
}
export interface ServicesFleetNodeDTO {
    agent_version?: string;
    arch?: string;
    avail_mem_mb?: number;
    daemon_count?: number;
    ip?: string;
    last_heartbeat_at?: string;
    status?: string;
    total_mem_mb?: number;
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
export interface ServicesNoteCategory {
    created_at?: string;
    id?: number;
    name?: string;
    order?: number;
    parent_id?: number;
    roles?: string[];
    updated_at?: string;
    user_id?: number;
}
export declare enum ServicesNoteType {
    NoteTypeMonth = 4,
    NoteTypeWeek = 3,
    NoteTypeDay = 2
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
export interface ServicesPaginationResponseArrayServicesFleetActivityDTO {
    current_page?: number;
    data?: ServicesFleetActivityDTO[];
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
export declare enum ServicesPromoCodeAction {
    PromoCodeActionExtend = "extend",
    PromoCodeActionUpgrade = "upgrade"
}
export interface ServicesPromoCodeApplyResult {
    applied_at?: number;
    code?: string;
    outcome?: ServicesPromoCodeOutcome;
}
export interface ServicesPromoCodeOutcome {
    action?: ServicesPromoCodeAction;
    added_seconds?: number;
    promo_amount?: string;
    result_level?: ServicesMembership;
    total_credit_amount?: string;
    unused_current_amount?: string;
    valid_until?: number;
}
export interface ServicesPromoCodePreview {
    available_actions?: ServicesPromoCodeAction[];
    code?: string;
    current_level?: ServicesMembership;
    current_valid_until?: number;
    extend?: ServicesPromoCodeOutcome;
    promo_amount?: string;
    promo_level?: ServicesMembership;
    promo_months?: number;
    requires_decision?: boolean;
    stripe_subscription?: boolean;
    upgrade?: ServicesPromoCodeOutcome;
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
export interface ServicesSSEFeedNotificationEventCatalog {
    "admin-feed-notification-comment-added"?: ServicesFeedNotificationCommentSSEPayload;
    "admin-feed-notification-status-changed"?: ServicesFeedNotificationStatusChangedSSEPayload;
    "admin-feed-notification-thread-seen-changed"?: ServicesFeedNotificationThreadSeenChangedSSEPayload;
    "feed-notification-comment-added"?: ServicesFeedNotificationCommentSSEPayload;
    "feed-notification-created"?: ServicesFeedNotificationFeedItem;
    "feed-notification-removed"?: ServicesFeedNotificationRemovedSSEPayload;
    "feed-notification-status-changed"?: ServicesFeedNotificationStatusChangedSSEPayload;
    "feed-notification-thread-seen-changed"?: ServicesFeedNotificationThreadSeenChangedSSEPayload;
    "feed-notification-updated"?: ServicesFeedNotificationFeedItem;
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
export interface ServicesTagCategory {
    id?: ServicesTagColumn;
    key?: string;
    name?: string;
    order?: number;
    scope?: ServicesTagCategoryScope;
    user_id?: number;
}
export declare enum ServicesTagCategoryScope {
    TagCategoryScopeTrade = 1,
    TagCategoryScopeNote = 2
}
export declare enum ServicesTagColumn {
    TagColumnEntryReason = 1,
    TagColumnExitReason = 2,
    TagColumnConclusion = 3,
    TagCategoryCustomMin = 10,
    TagCategoryCustomMax = 127
}
export interface ServicesTagFilterGroup {
    column?: ServicesTagColumn;
    ids?: number[];
    params?: string;
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
export interface ServicesTelegramConnect {
    api_keys?: number[];
    close_template_id?: number;
    close_trade_notify?: boolean;
    close_trade_preview?: boolean;
    created_at?: string;
    execute_template_id?: number;
    execute_trade_notify?: boolean;
    execute_trade_preview?: boolean;
    hash?: string;
    id?: number;
    language?: ServicesLocale;
    name?: string;
    new_trade_notify?: boolean;
    new_trade_preview?: boolean;
    open_template_id?: number;
    privacy_mode?: boolean;
    provider?: ServicesBaseConnectionProvider;
    risk_notification?: boolean;
    status?: ServicesConnectionStatus;
    updated_at?: string;
    user_id?: number;
    username?: string;
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
    note?: ServicesUserNote;
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
    TradeDurationType90D = "90d",
    TradeDurationType180D = "180d",
    TradeDurationType365D = "365d"
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
    tag_columns?: ServicesTagColumn[];
    tag_groups?: ServicesTagFilterGroup[];
    tag_ids?: number[];
    tag_params?: string;
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
export interface ServicesTransactionQuote {
    base_amount?: string;
    billing_months?: number;
    contributions?: ServicesTransactionProrationContribution[];
    current_level?: ServicesMembership;
    current_valid_to?: number;
    fee_amount?: string;
    final_amount?: string;
    forfeited_amount?: string;
    gateway?: ServicesTransactionSource;
    gateway_supported?: boolean;
    is_downgrade_blocked?: boolean;
    is_upgrade?: boolean;
    level?: ServicesMembership;
    lines?: ServicesTransactionQuoteLine[];
    months?: number;
    quote_type?: ServicesTransactionQuoteType;
    subtotal_amount?: string;
    total_discount_amount?: string;
    unused_balance_amount?: string;
    zero_due?: boolean;
}
export interface ServicesTransactionQuoteLine {
    amount?: string;
    code?: string;
    label?: string;
    percent?: string;
    type?: ServicesTransactionQuoteLineType;
}
export declare enum ServicesTransactionQuoteLineType {
    TransactionQuoteLineTypeBase = "base",
    TransactionQuoteLineTypeDiscount = "discount",
    TransactionQuoteLineTypeCredit = "credit",
    TransactionQuoteLineTypeFee = "fee",
    TransactionQuoteLineTypeTotal = "total"
}
export declare enum ServicesTransactionQuoteType {
    TransactionQuoteTypePurchase = "purchase",
    TransactionQuoteTypeUpgrade = "upgrade"
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
export interface ServicesUserNote {
    body_html?: string;
    body_json?: string;
    category_id?: number;
    created_at?: string;
    date_from?: string;
    date_to?: string;
    id?: number;
    order?: number;
    tag_ids?: number[];
    title?: string;
    updated_at?: string;
    user_id?: number;
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
    beta_features?: string[];
    categories?: ServicesCategory[];
    created_at?: string;
    cvizor?: ServicesCVizorStatus;
    default_group_field?: ServicesDefaultGroupField;
    default_time_frame?: string;
    discord?: ServicesDiscordConnect[];
    email?: string;
    email_verified_at?: string;
    filter_catalog?: ServicesFilterCatalogPayload;
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
    mentor_subjects?: ServicesFilterCatalogSubject[];
    name?: string;
    privileges?: string[];
    public_profile?: ServicesPublicProfile;
    referral?: string;
    referral_code?: string;
    referral_summary?: ServicesUserReferralSummary;
    referred_by?: number;
    risk_management?: ServicesRiskManagement[];
    risk_management_log?: ServicesRiskManagementLog[];
    session_reset_at?: number;
    shard_id?: number;
    start_of_week?: ServicesUserStartOfWeek;
    stripe?: ServicesStripe;
    tag_categories?: ServicesTagCategory[];
    tags?: ServicesTag[];
    telegram?: ServicesTelegramConnect[];
    theme?: number;
    timezone?: string;
    top_trader?: number;
    top_trader_api_key_id?: number;
    trial_active?: boolean;
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
export interface ServicesWidgetPreviewResponse {
    errors?: string[];
    serverData?: string;
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
    WidgetSourceIncomeByTag = "income_by_tag",
    WidgetSourceIncomeByTagCombination = "income_by_tag_combination",
    WidgetSourcePercentByEntryReasons = "tag_percent",
    WidgetSourcePercentByExitReasons = "exit_tag_percent",
    WidgetSourcePercentByTag = "percent_by_tag",
    WidgetSourceEntryReasonCombination = "tag_percent_combinations",
    WidgetSourceExitReasonCombination = "exit_tag_percent_combinations",
    WidgetSourceWinRateEntryReasonCombination = "tag_win_rate_combinations",
    WidgetSourceWinRateExitReasonCombination = "exit_tag_win_rate_combinations",
    WidgetSourceWinRateByTagCombination = "win_rate_by_tag_combination",
    WidgetSourceNoteTagIncome = "note_tag_income",
    WidgetSourceNoteTagCount = "note_tag_count",
    WidgetSourceNoteTagWinrate = "note_tag_winrate",
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
export interface ServicesTransactionProrationContribution {
    amount?: string;
    end_at?: number;
    level?: ServicesMembership;
    start_at?: number;
    transaction_id?: number;
}
//# sourceMappingURL=data-contracts.d.ts.map