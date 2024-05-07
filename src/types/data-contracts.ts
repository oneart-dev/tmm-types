/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ControllersAPiKeyCreateResponse {
  data?: ServicesApiKey;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersAnalyzerNotesResponse {
  data?: Record<string, ServicesAnalyzerNote[]>;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersAnalyzerWeekResponse {
  balanceGain?: string;
  balanceHistory?: string;
  data?: ServicesTradeSummary[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersApiErrorResponse {
  /** @example "Internal server error" */
  message?: string;
  /** @example "error" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersApiKeysList {
  data?: ServicesApiKey[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersApiSuccessResponse {
  data?: any;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersApiUsersListResponse {
  data?: ServicesApiUser[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersApiWarningResponse {
  /** @example "Custom error" */
  message?: string;
  /** @example "warning" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersBulkSignUpSuccessResponse {
  data?: ServicesBulkSignUpResponse[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersCategoriesListResponse {
  data?: ControllersCategoryWithCounter[];
  /** @example "success" */
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
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersDashboardListResponse {
  data?: ServicesDashboard[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersDiscordListResponse {
  data?: ServicesDiscordConnect[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersDiscountResponse {
  data?: ServicesTransactionDiscount;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersExchange {
  enabled?: number;
  id?: ServicesExchangeID;
  name?: string;
}

export interface ControllersExchangesListResponse {
  data?: ControllersExchange[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersFilesResponse {
  data?: ServicesFile[];
  /** @example "success" */
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
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersLatestNotificationsResponse {
  data?: ServicesNotificationPublic[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersLoadBoardResponse {
  dashboard?: ServicesDashboard;
  errors?: Record<string, string>;
  public_profile?: ServicesPublicProfile;
  serverData?: Record<string, string>;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersLoginSuccessResponse {
  /**
   * Access token for internal authorization
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphcGFuc3RvcmVsaWZlQGdtYWlsLmNvbSIsInVzZXIiOnRydWUsImV4cCI6MTY1NDc4NzY0MCwiaWF0IjoxNjU0Nzg0MDQwLCJpc3MiOiJUTU0ifQ.Qc7yrSiEtqiN2NnF2krXulNot5X2OvC25eILYrssPtE"
   */
  access_token?: string;
  /**
   * Token valid until unix timestamp in seconds
   * @example 1654987850
   */
  expires_at?: number;
  /**
   * Status "success"
   * @example "success"
   */
  status?: string;
}

export interface ControllersLongShortRatioResponse {
  data?: number;
  long?: number;
  short?: number;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersMeSuccessResponse {
  /** Access token for internal authorization */
  data?: ServicesUserWithRelations;
  /**
   * Status "success"
   * @example "success"
   */
  status?: string;
}

export interface ControllersMentorGroupResponse {
  data?: ServicesMentorGroup;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersMentorGroupsActiveResponse {
  data?: ServicesMentorGroup[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersMentorListResponse {
  data?: ServicesMentorGroup[];
  join_requests?: ServicesStudent[];
  joined?: ServicesMentorGroup[];
  publicGroups?: ServicesMentorGroup[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersMentorResponse {
  data?: ServicesMentorGroup;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersOrdersListResponse {
  data?: ServicesOrder[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
  trades?: ServicesTrade[];
}

export interface ControllersPublicProfileResponse {
  data?: ServicesPublicProfile;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersPublicProfileStatsResponse {
  data?: ServicesPublicProfileStats;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersPublicTradeGroupResponse {
  data?: ServicesTrade[];
  from?: number;
  public_profile?: ServicesPublicProfile;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
  to?: number;
}

export interface ControllersPublicTradeResponse {
  data?: ServicesTrade;
  drawings?: string;
  public_profile?: ServicesPublicProfile;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersReferralSummaryResponse {
  data?: ServicesUserReferralSummary;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersRefreshSuccessResponse {
  /**
   * Access token for internal authorization
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphcGFuc3RvcmVsaWZlQGdtYWlsLmNvbSIsInVzZXIiOnRydWUsImV4cCI6MTY1NDc4NzY0MCwiaWF0IjoxNjU0Nzg0MDQwLCJpc3MiOiJUTU0ifQ.Qc7yrSiEtqiN2NnF2krXulNot5X2OvC25eILYrssPtE"
   */
  access_token?: string;
  /**
   * Token valid until unix timestamp in seconds
   * @example 1654987850
   */
  expires_at?: number;
  /**
   * Status "success"
   * @example "success"
   */
  status?: string;
}

export enum ControllersResponseStatusMessage {
  ResponseStatusSuccess = "success",
  ResponseStatusError = "error",
  ResponseStatusWarning = "warning",
}

export interface ControllersShortUrlResponse {
  /** @example "fDG3223D" */
  data?: string;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersSseConnectResponse {
  data?: string;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersTagsResponse {
  data?: ServicesTag[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersTelegramListResponse {
  data?: ServicesTelegramConnect[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersTickersListResponse {
  data?: string[];
  info?: Record<string, ServicesTickersInfo>;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersTopTradersSuccessResponse {
  daily_top?: ServicesTop[];
  data?: any;
  last_daily_winners?: ServicesTopWinner[];
  last_monthly_winners?: ServicesTopWinner[];
  monthly_top?: ServicesTop[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersTradeChartDrawingsResponse {
  data?: string;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersTransactionCreateResponse {
  data?: any;
  redirect_url?: string;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersTransactionsListResponse {
  data?: ServicesTransaction[];
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersUIDataResponse {
  data?: ServicesUIData;
  /** @example "success" */
  status?: ControllersResponseStatusMessage;
}

export interface ControllersUnauthorizedResponse {
  /** @example "Unauthorized access" */
  message?: string;
  /** @example "error" */
  status?: ControllersResponseStatusMessage;
}

export interface DtoAnalyzerNoteForm {
  /** @example "Description of the day/week/month" */
  desc?: string;
  id?: number;
  /** @example "2019-01-01" */
  note_at: string;
  /**
   * @min 0
   * @max 5
   * @example 1
   */
  rating?: number;
  /**
   * Possible values: 2 - day, 3 - week, 4 - month
   * @example 1
   */
  type: 2 | 3 | 4;
}

export interface DtoApiKeyCreateForm {
  /**
   * @min 0
   * @max 1
   * @example 1
   */
  enabled?: number;
  exchange_id: 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 21 | 12 | 22 | 13 | 14 | 15 | 23 | 24 | 25 | 32 | 33;
  /**
   * @minLength 1
   * @maxLength 255
   */
  extra_info?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "ewf223fwfewf42f2f2ffwef2f"
   */
  key_private: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "ewf223fwfewf42f2f2ffwef2f"
   */
  key_public: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Main account"
   */
  name: string;
}

export interface DtoApiKeyUpdateForm {
  /**
   * @minLength 1
   * @maxLength 255
   */
  extra_info?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "ewf223fwfewf42f2f2ffwef2f"
   */
  key_private: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "ewf223fwfewf42f2f2ffwef2f"
   */
  key_public: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Main account"
   */
  name: string;
}

export interface DtoApiKeyUpdateNameForm {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Main account"
   */
  name: string;
}

export interface DtoApiUserUpdateForm {
  /** @example ["196.138.10.10"] */
  ip?: string[];
  /**
   * @minLength 2
   * @maxLength 255
   * @example "My API key"
   */
  name: string;
  userID?: number;
}

export interface DtoCategoryForm {
  id?: number;
  /** @example "Special category" */
  name: string;
  /**
   * @min 0
   * @max 998
   * @example 3
   */
  order?: number;
}

export interface DtoCategoryListForm {
  categories: DtoCategoryForm[];
}

export interface DtoDashboardCreateForm {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Main board"
   */
  name: string;
}

export interface DtoDashboardSort {
  id: number;
  order: number;
}

export interface DtoDashboardUpdateForm {
  filters?: string;
  layouts?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Main board"
   */
  name: string;
}

export interface DtoDashboardsSortForm {
  dashboards: DtoDashboardSort[];
}

export interface DtoFilterPresetCreateForm {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "My filter preset"
   */
  name: string;
  /** @example "{}" */
  preset: string;
}

export interface DtoGlobalChartDataForm {
  /** @example 1 */
  api_key_id: number;
  /** @example "[]" */
  data?: string;
}

export interface DtoLoginCredentials {
  /** @example "test@example.com" */
  email: string;
  /**
   * @minLength 8
   * @maxLength 200
   * @example "12345678"
   */
  password: string;
}

export interface DtoMentorGroupForm {
  /** @example "2019-01-01" */
  date_end?: string;
  /** @example "2019-01-01" */
  date_start?: string;
  /** @example "1" */
  email?: string;
  /**
   * @minLength 5
   * @maxLength 255
   * @example "123456"
   */
  invite_code?: string;
  /** @example "en" */
  language: "ru" | "en";
  /**
   * @min 1
   * @example 10
   */
  limit?: number;
  /**
   * @minLength 4
   * @maxLength 255
   * @example "Best group"
   */
  name: string;
  /** @example "private description" */
  private_text?: string;
  /** @example 1 */
  public_group?: 0 | 1;
  /** @example "public description" */
  public_text?: string;
  sub_user_id?: number;
}

export interface DtoMentorGroupJoinRequestForm {
  /**
   * @maxLength 255
   * @example "@telegramNickName"
   */
  contact_details?: string;
  /**
   * @minLength 5
   * @maxLength 255
   * @example "123456"
   */
  invite_code?: string;
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Nick"
   */
  name: string;
}

export interface DtoMentorNoteUpdateForm {
  /** @example "mentor text note to the trade available to user" */
  text?: string;
}

export interface DtoNewPasswordCredentials {
  /** @example "test@example.com" */
  email: string;
  /**
   * @minLength 8
   * @maxLength 200
   * @example "12345678"
   */
  password: string;
  token: string;
}

export interface DtoPasswordResetCredentials {
  /** @example "japanstorelife@gmail.com" */
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
  /**
   * @minItems 1
   * @example [2]
   */
  api_keys: number[];
  /** @example "profile description" */
  desc?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "username"
   */
  discord?: string;
  /**
   * @minLength 2
   * @maxLength 255
   * @example "username"
   */
  facebook?: string;
  /**
   * @min 0
   * @max 1
   * @example 1
   */
  hide_trades_extra?: number;
  /**
   * @minLength 2
   * @maxLength 255
   * @example "username"
   */
  instagram?: string;
  layout?: DtoPublicProfileLayout[];
  /**
   * @min 0
   * @max 1
   * @example 1
   */
  show_pnl?: number;
  /**
   * @min 0
   * @max 1
   * @example 1
   */
  show_roi?: number;
  /**
   * @min 0
   * @max 3
   * @example 1
   */
  show_trades?: number;
  /** @example 1 */
  show_trades_interval?: 0 | 1 | 7 | 30 | 90;
  /** @example "2019-01-01" */
  start_at_date?: string;
  /**
   * @min 1
   * @max 2
   * @example 1
   */
  status: number;
  /**
   * @minLength 2
   * @maxLength 255
   * @example "username"
   */
  telegram?: string;
  /**
   * @min 0
   * @max 1
   * @example 1
   */
  top_trader?: number;
  /**
   * @min 1
   * @example 100
   */
  top_trader_api_key_id?: number;
  /**
   * @minLength 2
   * @maxLength 255
   * @example "username"
   */
  twitch?: string;
  /**
   * @minLength 2
   * @maxLength 255
   * @example "username"
   */
  twitter?: string;
  /**
   * @minLength 4
   * @maxLength 255
   * @example "username"
   */
  url: string;
  /**
   * @minLength 2
   * @maxLength 255
   * @example "username"
   */
  vk?: string;
  /**
   * @minLength 2
   * @maxLength 255
   * @example "username"
   */
  website?: string;
  /**
   * @minLength 2
   * @maxLength 255
   * @example "username"
   */
  youtube?: string;
}

export interface DtoRiskManagementCreateForm {
  /** @example 1 */
  api_key_id?: number;
  /** @example true */
  enabled?: boolean;
  /** @example "1.0" */
  max_leverage?: string;
  /** @example "3.0" */
  per_day?: string;
  /** @example "0.1" */
  per_trade?: string;
}

export interface DtoRiskManagementUpdateForm {
  /** @example 1 */
  api_key_id?: number;
  /** @example 1 */
  id?: number;
  /** @example "1.0" */
  max_leverage?: string;
  /** @example "3.0" */
  per_day?: string;
  /** @example "0.1" */
  per_trade?: string;
}

export interface DtoSignUpCredentials {
  /** @example "test@example.com" */
  email: string;
  /** @example "en" */
  language: "ru" | "en";
  /**
   * @minLength 2
   * @maxLength 100
   * @example "Nick"
   */
  name: string;
  /**
   * @minLength 8
   * @maxLength 200
   * @example "12345678"
   */
  password: string;
  promo?: string;
  ref?: string;
  /** @example "UTC" */
  timezone: string;
}

export interface DtoSymbolChartForm {
  /** @example 1 */
  api_key_id?: number;
  /** @example "2019-01-01" */
  date?: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "1m"
   */
  interval: string;
  user_id?: number;
}

export interface DtoTagForm {
  id?: number;
  /** @example "catching knife" */
  name?: string;
}

export interface DtoTagsSort {
  id: number;
  order: number;
}

export interface DtoTagsSortForm {
  tags: DtoTagsSort[];
}

export interface DtoTelegramConnectForm {
  /**
   * @minItems 1
   * @example [2]
   */
  api_keys: number[];
  /** @example 1 */
  close_trade_notification?: 1 | 2;
  /** @example "en" */
  language: "ru" | "en";
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Personal account"
   */
  name: string;
  /** @example 1 */
  new_trade_notification?: 0 | 1 | 2 | 3;
  /** @example 1 */
  privacy_mode?: 0 | 1;
}

export interface DtoTradeChartDataForm {
  /** @example "[]" */
  data?: string;
}

export interface DtoTradeChartForm {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "1m"
   */
  interval: string;
  user_id?: number;
}

export interface DtoTradeDrawingForm {
  user_id?: number;
}

export interface DtoTradeFilters {
  api_key_id?: number[];
  /**
   * string based params separated by ":"
   * "not:" - exclude trades with api key ids specified
   */
  api_key_id_params?: "not:";
  /**
   * Trades by default have no category.
   * ID 1 is system category for archive trades. Excluded by default.
   */
  category?: number[];
  /**
   * string based params separated by ":"
   * "not:" - exclude trades with category ids specified
   */
  category_params?: "not:";
  /** @example "2019-01-01,2019-01-02" */
  closeBetween?: string;
  /**
   * Days of week 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday
   * @example [2]
   */
  daysOfWeek?: number[];
  /**
   * Duration specified in milliseconds
   * Example: 1000,10000 - trades with duration between 1 and 10 seconds
   */
  durationBetween?: string;
  /** @example "today" */
  durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
  /** @example "conclusion:empty" */
  extraInfo?:
    | "conclusion:empty"
    | "conclusion:not-empty"
    | "desc:empty"
    | "desc:not-empty"
    | "mentor_note:not-empty"
    | "mentor_note:empty";
  /** Used in summary widget settings */
  groupBy?: "minute" | "hour" | "month" | "date" | "week";
  /** Headers are required only for CSV export method */
  headers?: string[];
  /** @example 1 */
  id?: number;
  /** @example [1] */
  ids?: number[];
  /** @example "0.5,1.5" */
  leverageBetween?: string;
  /** @example "-0.5,-1.5" */
  maeBetween?: string;
  /** @example "0.5,1.5" */
  mfeBetween?: string;
  multiplier?: string;
  /** @example "2019-01-01,2019-01-02" */
  openBetween?: string;
  /** @example "0.5,1.5" */
  percentBetween?: string;
  profitBetween?: string;
  /** @example "0.5,1.5" */
  profitDepositBetween?: string;
  side?: "LONG" | "SHORT";
  /** Select only open or only closed trades. */
  state?: 0 | 1 | 2;
  /** @example ["BTCUSDT"] */
  symbol?: string[];
  /** @example "not:" */
  symbol_params?: "not:";
  tags?: number[];
  /**
   * string based params separated by ":"
   * "not:" - exclude trades with tags specified
   * "all:" - all provided tags must be included/excluded
   * @example "not:all:"
   */
  tags_params?: "not:" | "all:" | "not:all:";
  /** Default value comes from user profile settings. By default is "open_time" */
  trade_time?: string;
  /** @example 1 */
  user_id?: number;
  /**
   * Turnover in USD - including all buy and sell orders value
   * @example "0.5,1.5"
   */
  volumeBetween?: string;
  volumeFrom?: number;
  volumeTo?: number;
  /**
   * By default archive trades are not included. If you want to include them,
   * set this to true. Or set category id to 1 (Archive ID).
   */
  with_archive?: boolean;
}

export interface DtoTradeGroupShortLink {
  /**
   * @maxItems 150
   * @minItems 1
   */
  id: number[];
}

export interface DtoTradeUpdateDescForm {
  /** @example "Conclusion of the trade" */
  conclusion?: string;
  /** @example "Description of the trade" */
  description?: string;
  /** @example "https://www.youtube.com/watch?v=0000000000" */
  video_link?: string;
}

export interface DtoTradeUpdateTagsBulkForm {
  tags: DtoTagForm[];
  trade_id: number[];
}

export interface DtoTradeUpdateTagsForm {
  tags?: DtoTagForm[];
}

export interface DtoTradesCategoryForm {
  /**
   * @min 0
   * @example 1
   */
  category_id?: number;
  /** @minItems 1 */
  id: number[];
}

export interface DtoTradesMergeForm {
  /** @minItems 2 */
  id: number[];
}

export interface DtoTransactionCreateForm {
  /**
   * @minLength 1
   * @maxLength 255
   * @example "b_usdt_trc20"
   */
  gateway: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "pro"
   */
  level: string;
  /**
   * @min 1
   * @max 24
   * @example 12
   */
  months: number;
}

export interface DtoUIData {
  /** @example "{}" */
  data: string;
}

export interface DtoUserLanguage {
  /** @example "en" */
  language: "en" | "ru";
}

export interface DtoUserReferralCode {
  /**
   * @minLength 3
   * @maxLength 250
   * @example "_best_referral_code_ever"
   */
  referral_code: string;
}

export interface DtoUserTheme {
  /** @example true */
  dark: boolean;
}

export interface DtoUserUpdateForm {
  /** @example 1 */
  default_group_field?: 1 | 2;
  /** @example "1h" */
  default_time_frame?: "1m" | "5m" | "15m" | "30m" | "1h" | "4h" | "12h" | "1d";
  /** @example "test@example.com" */
  email: string;
  /** @example "en" */
  language: "ru" | "en";
  /**
   * @minLength 3
   * @maxLength 100
   * @example "Nick"
   */
  name: string;
  /**
   * @minLength 8
   * @maxLength 200
   * @example "12345678"
   */
  password: string;
  /** @example "UTC" */
  timezone: string;
}

export interface DtoWidgetCreateForm {
  filters?: DtoWidgetFilters;
  /** @example "income_usdt" */
  source: string;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Profit factor"
   */
  title: string;
  /** @example "chart" */
  type: string;
  /** @example "line" */
  type2?: string;
  type3?: string;
}

export interface DtoWidgetFilters {
  /**
   * [UI] Color in hex format (alpha is optional)
   * @example "#D81B60FF"
   */
  color?: string;
  /** [UI] to hide trades count on the chart */
  disabledCounter?: boolean;
  filter?: DtoTradeFilters;
  /** [UI] Add moving average to the chart if possible */
  ma?: number;
  /** [UI] now used only indirectly by calendar widget */
  mini?: boolean;
  /** Makes server return relative values. Safe to share with public. */
  private?: boolean;
  /** [UI] Sort by value or key */
  simpleSortBy?: "value_ask" | "value_desc" | "key_asc" | "key_desc";
}

export interface DtoWidgetUpdateForm {
  filters?: DtoWidgetFilters;
  /**
   * @minLength 1
   * @maxLength 255
   * @example "Profit factor"
   */
  title: string;
  /** @example "line" */
  type2?: string;
}

export interface ServicesAnalyzerNote {
  created_at?: string;
  desc?: string;
  id?: number;
  /** @example "2019-01-01" */
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
  /**
   * Enabled
   * 0 - disconnected
   * 1 - connected
   */
  enabled?: ServicesApiKeyEnabledStatus;
  exchange_id?: ServicesExchangeID;
  extra_info?: string;
  id?: number;
  key_public?: string;
  name?: string;
  partner?: ServicesPartnerID;
  updated_at?: string;
  user_id?: number;
  /**
   * Websocket status
   * 0 - disconnected
   * 1 - connected
   * 2 - connecting
   * 3 - error
   */
  websocket_status?: ServicesApiKeyWebsocketStatus;
  websocket_updated_at?: number;
}

export enum ServicesApiKeyEnabledStatus {
  API_KEY_WS_ENABLED = 1,
  API_KEY_WS_DISABLED = 0,
}

export enum ServicesApiKeyWebsocketStatus {
  API_KEY_WS_DISCONNECTED = 0,
  API_KEY_WS_CONNECTED = 1,
  API_KEY_WS_CONNECTING = 2,
  API_KEY_WS_ERROR = 3,
  API_KEY_WS_RECONNECTING = 4,
}

export interface ServicesApiKeysListPagination {
  cacheService?: any;
  current_page?: number;
  data?: ServicesApiKey[];
  defaultSort?: boolean;
  last_page?: number;
  per_page?: number;
  per_page_limit?: number;
  sortBy?: string;
  sortDesc?: boolean;
  sort_fields?: string[];
  table_name?: string;
  total?: number;
  userID?: number;
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

export enum ServicesBulkSignUpResponseError {
  BulkSignUpResponseEmptyEmailList = "empty email list",
  BulkSignUpResponseErrorEmailAlreadyExists = "email already exists",
  BulkSignUpSavingError = "saving error",
  BulkSignUpCreateDashboardError = "create dashboard error",
  BulkSignUpCreateApiKeyError = "create api key error",
}

export enum ServicesCVizorStatus {
  CVizorStatusDisabled = 0,
  CVizorStatusEnabledTrends = 1,
  CVizorStatusEnabledPRO = 2,
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

export enum ServicesDefaultGroupField {
  DefaultGroupFieldOpenTime = 1,
  DefaultGroupFieldCloseTime = 2,
}

export enum ServicesDiscordCloseNotification {
  DiscordCloseNotificationEnabled = 1,
  DiscordCloseNotificationDisabled = 2,
}

export interface ServicesDiscordConnect {
  api_keys?: number[];
  channel_id?: number;
  /**
   * Close notification mode
   * 0 - disabled
   * 1 - enabled
   */
  close_trade_notification?: ServicesDiscordCloseNotification;
  created_at?: string;
  guild_id?: number;
  hash?: string;
  id?: number;
  language?: string;
  name?: string;
  /**
   * Notification mode
   * 0 - disabled
   * 1 - all
   * 2 - open only
   * 3 - execution only
   */
  new_trade_notification?: ServicesDiscordNotification;
  owner_id?: number;
  /**
   * Privacy mode
   * 0 - disabled
   * 1 - enabled
   */
  privacy_mode?: ServicesDiscordConnectPrivacy;
  /**
   * Connection status
   * 1 - new
   * 2 - connected
   */
  status?: ServicesDiscordConnectStatus;
  updated_at?: string;
  user_id?: number;
  username?: string;
}

export enum ServicesDiscordConnectPrivacy {
  DiscordConnectPrivacyEnabled = 1,
  DiscordConnectPrivacyDisabled = 0,
}

export enum ServicesDiscordConnectStatus {
  DiscordConnectStatusNew = 1,
  DiscordConnectStatusConnected = 2,
}

export enum ServicesDiscordNotification {
  DiscordNotificationDisabled = 0,
  DiscordNotificationTradeAll = 1,
  DiscordNotificationTradeOpenOnly = 2,
  DiscordNotificationTradeExecutionOnly = 3,
}

export enum ServicesExchangeID {
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
}

export interface ServicesFile {
  file_path?: string;
  id?: number;
  type?: ServicesFileOwnerType;
  user_id?: number;
}

export enum ServicesFileOwnerType {
  FileOwnerTypeTrade = "Trade",
  FileOwnerTypeTradePreview = "TradePreview",
  FileOwnerTypeTeam = "Team",
  FileOwnerTypeTeamBG = "TeamBG",
  FileOwnerTypeUser = "User",
  FileOwnerTypePublicProfile = "PublicProfile",
}

export interface ServicesFilterPreset {
  id?: number;
  name?: string;
  preset?: string;
  user_id?: number;
}

export interface ServicesGuideProgress {
  /**
   * @min 0
   * @max 1
   */
  guide_closed?: number;
  /**
   * @min 1
   * @max 255
   */
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

export enum ServicesMembership {
  LEVEL_NOVICE = "novice",
  LEVEL_NOVICE_PLUS = "novice_plus",
  LEVEL_TRADER = "trader",
  LEVEL_PRO = "pro",
  OWNER = "owner",
  ADMIN = "administrator",
  SUPPORT = "support",
  DEFAULT_MEMBERSHIP = "novice",
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

export enum ServicesNoteType {
  NoteTypeMonth = 4,
  NoteTypeWeek = 3,
  NoteTypeDay = 2,
}

export enum ServicesNotificationInteract {
  NotificationInteractNo = 0,
  NotificationInteractYes = 1,
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

export enum ServicesNotificationSeen {
  NotificationSeenNo = 0,
  NotificationSeenYes = 1,
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

export enum ServicesOrderSide {
  OrderBuy = "BUY",
  OrderSell = "SELL",
  OrderFunding = "FUNDING",
  OrderLiquidation = "LIQUIDATION",
}

export enum ServicesOrderType {
  OrderTypeLimit = "LIMIT",
  OrderTypeMarket = "MARKET",
  OrderTypeFunding = "FUNDING",
}

export enum ServicesOrigType {
  OrderOrigTypeReverse = "REVERSE",
  OrderOrigTypeLiquidation = "LIQUIDATION",
}

export enum ServicesPartnerID {
  PARTNER_ID_NONE = -1,
  PARTNER_ID_WLC = 1,
  PARTNER_ID_TIGER = 2,
}

export interface ServicesPublicProfile {
  api_keys?: number[];
  bg?: ServicesFile;
  created_at?: string;
  desc?: string;
  discord?: string;
  facebook?: string;
  /**
   * Hide trades extra
   * 0 - Disabled
   * 1 - Enabled
   */
  hide_trades_extra?: number;
  id?: number;
  instagram?: string;
  layout?: ServicesPublicProfileLayout[];
  /**
   * League:
   * 7 - Default
   * 8 - PRO
   */
  league?: ServicesTopLeague;
  league_progress?: number;
  show_pnl?: number;
  show_roi?: number;
  /**
   * Show Trades:
   * 0 - Disabled
   * 1 - All
   * 2 - Only Closed
   * 3 - Only Opened
   */
  show_trades?: ServicesPublicProfileShowTrades;
  show_trades_interval?: number;
  start_at?: number;
  /**
   * Status:
   * 1 - Enabled
   * 2 - Disabled
   * 3 - Restricted
   */
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

export enum ServicesPublicProfileShowTrades {
  PublicProfileShowTradesDisabled = 0,
  PublicProfileShowTradesAll = 1,
  PublicProfileShowTradesOnlyClosed = 2,
  PublicProfileShowTradesOnlyOpened = 3,
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

export enum ServicesPublicProfileStatus {
  PublicProfileStatusON = 1,
  PublicProfileStatusOFF = 2,
  PublicProfileStatusBAN = 3,
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
  cacheService?: any;
  current_page?: number;
  data?: ServicesRiskManagementLog[];
  defaultSort?: boolean;
  last_page?: number;
  per_page?: number;
  per_page_limit?: number;
  sortBy?: string;
  sortDesc?: boolean;
  sort_fields?: string[];
  table_name?: string;
  total?: number;
  userID?: number;
}

export enum ServicesRiskManagementLogType {
  RiskManagementLogTypeTradeLoss = 1,
  RiskManagementLogTypeTradeLeverage = 2,
  RiskManagementLogTypeDayLoss = 3,
}

export interface ServicesRiskManagementPagination {
  cacheService?: any;
  current_page?: number;
  data?: ServicesRiskManagement[];
  defaultSort?: boolean;
  last_page?: number;
  per_page?: number;
  per_page_limit?: number;
  sortBy?: string;
  sortDesc?: boolean;
  sort_fields?: string[];
  table_name?: string;
  total?: number;
  userID?: number;
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

export enum ServicesShortUrlModelType {
  ShortUrlModelTypeTrade = "Trade",
  ShortUrlModelTypeTradeGroup = "TradeGroup",
  ShortUrlModelTypeDashboard = "Dashboard",
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

export enum ServicesStudentStatus {
  StudentStatusRequest = 0,
  StudentStatusAccepted = 1,
  StudentStatusRejected = 2,
}

export interface ServicesTag {
  id?: number;
  /** @example "catching knife" */
  name?: string;
  /** @example 98 */
  score?: number;
  /** @example 1 */
  user_id?: number;
}

export enum ServicesTelegramCloseNotification {
  TelegramCloseNotificationEnabled = 1,
  TelegramCloseNotificationDisabled = 2,
}

export interface ServicesTelegramConnect {
  api_keys?: number[];
  /**
   * Close notification mode
   * 0 - disabled
   * 1 - enabled
   */
  close_trade_notification?: ServicesTelegramCloseNotification;
  created_at?: string;
  hash?: string;
  id?: number;
  language?: string;
  name?: string;
  /**
   * Notification mode
   * 0 - disabled
   * 1 - all
   * 2 - open only
   * 3 - execution only
   */
  new_trade_notification?: ServicesTelegramNotification;
  /**
   * Privacy mode
   * 0 - disabled
   * 1 - enabled
   */
  privacy_mode?: ServicesTelegramConnectPrivacy;
  /**
   * Connection status
   * 1 - new
   * 2 - connected
   */
  status?: ServicesTelegramConnectStatus;
  updated_at?: string;
  user_id?: number;
  username?: string;
}

export enum ServicesTelegramConnectPrivacy {
  TelegramConnectPrivacyEnabled = 1,
  TelegramConnectPrivacyDisabled = 0,
}

export enum ServicesTelegramConnectStatus {
  TelegramConnectStatusNew = 1,
  TelegramConnectStatusConnected = 2,
}

export enum ServicesTelegramNotification {
  TelegramNotificationDisabled = 0,
  TelegramNotificationTradeAll = 1,
  TelegramNotificationTradeOpenOnly = 2,
  TelegramNotificationTradeExecutionOnly = 3,
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

export enum ServicesTopLeague {
  TopLeagueMoon = 1,
  TopLeagueStar = 2,
  TopLeagueInterstellar = 3,
  TopLeagueGalaxy = 4,
  TopLeagueSpacePirates = 5,
  TopLeagueSpaceDroids = 6,
  TopLeagueDefault = 7,
  TopLeaguePRO = 8,
}

export enum ServicesTopType {
  TopTypeDay = 1,
  TopTypeMonth = 2,
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

export enum ServicesTradeDurationType {
  TradeDurationTypeToday = "today",
  TradeDurationTypeYesterday = "yesterday",
  TradeDurationTypePast1W = "past1w",
  TradeDurationType1W = "1w",
  TradeDurationType1M = "1m",
  TradeDurationType7D = "7d",
  TradeDurationType30D = "30d",
  TradeDurationType90D = "90d",
}

export enum ServicesTradeExtraInfoFilter {
  TradeExtraInfoFilterEntryReasonsEmpty = "tags:empty",
  TradeExtraInfoFilterEntryReasonsNotEmpty = "tags:not-empty",
  TradeExtraInfoFilterConclusionEmpty = "conclusion:empty",
  TradeExtraInfoFilterConclusionNotEmpty = "conclusion:not-empty",
  TradeExtraInfoFilterDescEmpty = "desc:empty",
  TradeExtraInfoFilterDescNotEmpty = "desc:not-empty",
  TradeExtraInfoFilterMentorNoteEmpty = "mentor_note:empty",
  TradeExtraInfoFilterMentorNoteNotEmpty = "mentor_note:not-empty",
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

export enum ServicesTradeGroupBy {
  TradeGroupByMinute = "minute",
  TradeGroupByHour = "hour",
  TradeGroupByMonth = "month",
  TradeGroupByDate = "date",
  TradeGroupByWeek = "week",
}

export enum ServicesTradeMultiplier {
  TradeMultiplier1 = 0,
  TradeMultiplier1000 = 1,
  TradeMultiplier10000 = 2,
  TradeMultiplier100000 = 3,
  TradeMultiplier1000000 = 4,
}

export enum ServicesTradeProcess {
  TradeUnprocessed = 0,
  TradePartiallyProcessed = 1,
  TradeProcessCompleted = 3,
}

export enum ServicesTradeSide {
  TradeLong = "LONG",
  TradeShort = "SHORT",
  TradeBoth = "BOTH",
}

export enum ServicesTradeState {
  TradeStateOpen = 1,
  TradeStateClosed = 2,
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

export enum ServicesTradeTimeColumn {
  TradeOpenTime = "open_time",
  TradeCloseTime = "close_time",
}

export interface ServicesTradesListPagination {
  cacheService?: any;
  current_page?: number;
  data?: ServicesTrade[];
  defaultSort?: boolean;
  last_page?: number;
  per_page?: number;
  per_page_limit?: number;
  sortBy?: string;
  sortDesc?: boolean;
  sort_fields?: string[];
  table_name?: string;
  total?: number;
  total_sum?: ServicesTradeSummary;
  userID?: number;
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

export enum ServicesTransactionDiscountType {
  TransactionDiscountTypePercent = "percent",
  TransactionDiscountTypeAmount = "amount",
}

export enum ServicesTransactionSource {
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
  TransactionSourceCICapital = "CICapital",
}

export enum ServicesTransactionStatus {
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
  TransactionStatusPending = "pending",
}

export interface ServicesTransactionsListPagination {
  cacheService?: any;
  current_page?: number;
  data?: ServicesTransaction[];
  defaultSort?: boolean;
  last_page?: number;
  per_page?: number;
  per_page_limit?: number;
  sortBy?: string;
  sortDesc?: boolean;
  sort_fields?: string[];
  table_name?: string;
  total?: number;
  userID?: number;
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
  theme?: number;
  timezone?: string;
  top_trader?: number;
  top_trader_api_key_id?: number;
  trial_available?: boolean;
  wlc?: ServicesWLC;
}

export interface ServicesValidationErrorResponse {
  errors?: ServicesValidationErrors;
  /** @example "error" */
  status?: string;
}

export type ServicesValidationErrors = Record<string, string[]>;

export interface ServicesWLC {
  created_at?: string;
  id?: number;
  last_checked_at?: number;
  status?: ServicesWLCStatus;
  updated_at?: string;
  user_id?: number;
  wlc_id?: number;
}

export enum ServicesWLCStatus {
  WLCStatusNone = 0,
  WLCStatusNew = 1,
  WLCStatusNotReferral = 2,
  WLCStatusReferral = 3,
}

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
  /** @example "success" */
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

export enum ServicesWidgetFiltersSortBy {
  WidgetFiltersSortByValueAsc = "value_asc",
  WidgetFiltersSortByValueDesc = "value_desc",
  WidgetFiltersSortByCountKeyDesc = "key_desc",
  WidgetFiltersSortByCountKeyAsc = "key_asc",
}

export enum ServicesWidgetSource {
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
  WidgetSourceIncomeByEntryReasons = "tag_profit",
  WidgetSourcePercentByEntryReasons = "tag_percent",
  WidgetSourceEntryReasonCombination = "tag_percent_combinations",
  WidgetSourceWinRateEntryReasonCombination = "tag_win_rate_combinations",
  WidgetSourceIncomeAccumulative = "income_usdt_accumulative",
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
  WidgetSourceLongShort = "pie_side",
}

export enum ServicesWidgetType {
  WidgetTypeChart = "chart",
  WidgetTypeNumber = "number",
  WidgetTypeCalendar = "calendar",
}

export enum ServicesWidgetType2 {
  WidgetType2Line = "line",
  WidgetType2LineStep = "line-step",
  WidgetType2LineSimple = "line-simple",
  WidgetType2Pie = "pie",
  WidgetType2Column = "column",
  WidgetType2TreeMap = "treemap",
  WidgetType2Bubble = "bubble",
  WidgetType2CandleStick = "candlestick",
}
