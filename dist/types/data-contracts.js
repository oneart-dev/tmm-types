export var ControllersResponseStatusMessage;
(function (ControllersResponseStatusMessage) {
    ControllersResponseStatusMessage["ResponseStatusSuccess"] = "success";
    ControllersResponseStatusMessage["ResponseStatusError"] = "error";
    ControllersResponseStatusMessage["ResponseStatusWarning"] = "warning";
})(ControllersResponseStatusMessage || (ControllersResponseStatusMessage = {}));
export var ServicesApiKeyEnabledStatus;
(function (ServicesApiKeyEnabledStatus) {
    ServicesApiKeyEnabledStatus[ServicesApiKeyEnabledStatus["API_KEY_WS_ENABLED"] = 1] = "API_KEY_WS_ENABLED";
    ServicesApiKeyEnabledStatus[ServicesApiKeyEnabledStatus["API_KEY_WS_DISABLED"] = 0] = "API_KEY_WS_DISABLED";
})(ServicesApiKeyEnabledStatus || (ServicesApiKeyEnabledStatus = {}));
export var ServicesApiKeyWebsocketStatus;
(function (ServicesApiKeyWebsocketStatus) {
    ServicesApiKeyWebsocketStatus[ServicesApiKeyWebsocketStatus["API_KEY_WS_DISCONNECTED"] = 0] = "API_KEY_WS_DISCONNECTED";
    ServicesApiKeyWebsocketStatus[ServicesApiKeyWebsocketStatus["API_KEY_WS_CONNECTED"] = 1] = "API_KEY_WS_CONNECTED";
    ServicesApiKeyWebsocketStatus[ServicesApiKeyWebsocketStatus["API_KEY_WS_CONNECTING"] = 2] = "API_KEY_WS_CONNECTING";
    ServicesApiKeyWebsocketStatus[ServicesApiKeyWebsocketStatus["API_KEY_WS_ERROR"] = 3] = "API_KEY_WS_ERROR";
    ServicesApiKeyWebsocketStatus[ServicesApiKeyWebsocketStatus["API_KEY_WS_RECONNECTING"] = 4] = "API_KEY_WS_RECONNECTING";
})(ServicesApiKeyWebsocketStatus || (ServicesApiKeyWebsocketStatus = {}));
export var ServicesBulkSignUpResponseError;
(function (ServicesBulkSignUpResponseError) {
    ServicesBulkSignUpResponseError["BulkSignUpResponseEmptyEmailList"] = "empty email list";
    ServicesBulkSignUpResponseError["BulkSignUpResponseErrorEmailAlreadyExists"] = "email already exists";
    ServicesBulkSignUpResponseError["BulkSignUpSavingError"] = "saving error";
    ServicesBulkSignUpResponseError["BulkSignUpCreateDashboardError"] = "create dashboard error";
    ServicesBulkSignUpResponseError["BulkSignUpCreateApiKeyError"] = "create api key error";
})(ServicesBulkSignUpResponseError || (ServicesBulkSignUpResponseError = {}));
export var ServicesCVizorStatus;
(function (ServicesCVizorStatus) {
    ServicesCVizorStatus[ServicesCVizorStatus["CVizorStatusDisabled"] = 0] = "CVizorStatusDisabled";
    ServicesCVizorStatus[ServicesCVizorStatus["CVizorStatusEnabledTrends"] = 1] = "CVizorStatusEnabledTrends";
    ServicesCVizorStatus[ServicesCVizorStatus["CVizorStatusEnabledPRO"] = 2] = "CVizorStatusEnabledPRO";
})(ServicesCVizorStatus || (ServicesCVizorStatus = {}));
export var ServicesDefaultGroupField;
(function (ServicesDefaultGroupField) {
    ServicesDefaultGroupField[ServicesDefaultGroupField["DefaultGroupFieldOpenTime"] = 1] = "DefaultGroupFieldOpenTime";
    ServicesDefaultGroupField[ServicesDefaultGroupField["DefaultGroupFieldCloseTime"] = 2] = "DefaultGroupFieldCloseTime";
})(ServicesDefaultGroupField || (ServicesDefaultGroupField = {}));
export var ServicesDiscordCloseNotification;
(function (ServicesDiscordCloseNotification) {
    ServicesDiscordCloseNotification[ServicesDiscordCloseNotification["DiscordCloseNotificationEnabled"] = 1] = "DiscordCloseNotificationEnabled";
    ServicesDiscordCloseNotification[ServicesDiscordCloseNotification["DiscordCloseNotificationDisabled"] = 2] = "DiscordCloseNotificationDisabled";
})(ServicesDiscordCloseNotification || (ServicesDiscordCloseNotification = {}));
export var ServicesDiscordConnectPrivacy;
(function (ServicesDiscordConnectPrivacy) {
    ServicesDiscordConnectPrivacy[ServicesDiscordConnectPrivacy["DiscordConnectPrivacyEnabled"] = 1] = "DiscordConnectPrivacyEnabled";
    ServicesDiscordConnectPrivacy[ServicesDiscordConnectPrivacy["DiscordConnectPrivacyDisabled"] = 0] = "DiscordConnectPrivacyDisabled";
})(ServicesDiscordConnectPrivacy || (ServicesDiscordConnectPrivacy = {}));
export var ServicesDiscordConnectStatus;
(function (ServicesDiscordConnectStatus) {
    ServicesDiscordConnectStatus[ServicesDiscordConnectStatus["DiscordConnectStatusNew"] = 1] = "DiscordConnectStatusNew";
    ServicesDiscordConnectStatus[ServicesDiscordConnectStatus["DiscordConnectStatusConnected"] = 2] = "DiscordConnectStatusConnected";
})(ServicesDiscordConnectStatus || (ServicesDiscordConnectStatus = {}));
export var ServicesDiscordNotification;
(function (ServicesDiscordNotification) {
    ServicesDiscordNotification[ServicesDiscordNotification["DiscordNotificationDisabled"] = 0] = "DiscordNotificationDisabled";
    ServicesDiscordNotification[ServicesDiscordNotification["DiscordNotificationTradeAll"] = 1] = "DiscordNotificationTradeAll";
    ServicesDiscordNotification[ServicesDiscordNotification["DiscordNotificationTradeOpenOnly"] = 2] = "DiscordNotificationTradeOpenOnly";
    ServicesDiscordNotification[ServicesDiscordNotification["DiscordNotificationTradeExecutionOnly"] = 3] = "DiscordNotificationTradeExecutionOnly";
})(ServicesDiscordNotification || (ServicesDiscordNotification = {}));
export var ServicesExchangeID;
(function (ServicesExchangeID) {
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_BINANCE_FUTURES"] = 1] = "EXCHANGE_BINANCE_FUTURES";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_BYBIT_LINEAR"] = 2] = "EXCHANGE_BYBIT_LINEAR";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_FTX"] = 3] = "EXCHANGE_FTX";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_BINANCE_SPOT"] = 4] = "EXCHANGE_BINANCE_SPOT";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_BYBIT_INVERSE"] = 5] = "EXCHANGE_BYBIT_INVERSE";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_BYBIT_SPOT"] = 6] = "EXCHANGE_BYBIT_SPOT";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_BITGET_FUTURES"] = 7] = "EXCHANGE_BITGET_FUTURES";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_OKX_PERP_SWAPS"] = 8] = "EXCHANGE_OKX_PERP_SWAPS";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_WLC_FUTURES"] = 11] = "EXCHANGE_WLC_FUTURES";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_WLC_SPOT"] = 21] = "EXCHANGE_WLC_SPOT";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_TIGER_FUTURES"] = 12] = "EXCHANGE_TIGER_FUTURES";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_TIGER_SPOT"] = 22] = "EXCHANGE_TIGER_SPOT";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_TIGER_BYBIT_SPOT"] = 13] = "EXCHANGE_TIGER_BYBIT_SPOT";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_TIGER_BYBIT_LINEAR"] = 14] = "EXCHANGE_TIGER_BYBIT_LINEAR";
    ServicesExchangeID[ServicesExchangeID["EXCHANGE_TIGER_BYBIT_INVERSE"] = 15] = "EXCHANGE_TIGER_BYBIT_INVERSE";
})(ServicesExchangeID || (ServicesExchangeID = {}));
export var ServicesFileOwnerType;
(function (ServicesFileOwnerType) {
    ServicesFileOwnerType["FileOwnerTypeTrade"] = "Trade";
    ServicesFileOwnerType["FileOwnerTypeTradePreview"] = "TradePreview";
    ServicesFileOwnerType["FileOwnerTypeTeam"] = "Team";
    ServicesFileOwnerType["FileOwnerTypeTeamBG"] = "TeamBG";
    ServicesFileOwnerType["FileOwnerTypeUser"] = "User";
    ServicesFileOwnerType["FileOwnerTypePublicProfile"] = "PublicProfile";
})(ServicesFileOwnerType || (ServicesFileOwnerType = {}));
export var ServicesMembership;
(function (ServicesMembership) {
    ServicesMembership["LEVEL_NOVICE"] = "novice";
    ServicesMembership["LEVEL_NOVICE_PLUS"] = "novice_plus";
    ServicesMembership["LEVEL_TRADER"] = "trader";
    ServicesMembership["LEVEL_PRO"] = "pro";
    ServicesMembership["OWNER"] = "owner";
    ServicesMembership["ADMIN"] = "administrator";
    ServicesMembership["SUPPORT"] = "support";
    ServicesMembership["DEFAULT_MEMBERSHIP"] = "novice";
})(ServicesMembership || (ServicesMembership = {}));
export var ServicesNoteType;
(function (ServicesNoteType) {
    ServicesNoteType[ServicesNoteType["NoteTypeMonth"] = 4] = "NoteTypeMonth";
    ServicesNoteType[ServicesNoteType["NoteTypeWeek"] = 3] = "NoteTypeWeek";
    ServicesNoteType[ServicesNoteType["NoteTypeDay"] = 2] = "NoteTypeDay";
})(ServicesNoteType || (ServicesNoteType = {}));
export var ServicesNotificationInteract;
(function (ServicesNotificationInteract) {
    ServicesNotificationInteract[ServicesNotificationInteract["NotificationInteractNo"] = 0] = "NotificationInteractNo";
    ServicesNotificationInteract[ServicesNotificationInteract["NotificationInteractYes"] = 1] = "NotificationInteractYes";
})(ServicesNotificationInteract || (ServicesNotificationInteract = {}));
export var ServicesNotificationSeen;
(function (ServicesNotificationSeen) {
    ServicesNotificationSeen[ServicesNotificationSeen["NotificationSeenNo"] = 0] = "NotificationSeenNo";
    ServicesNotificationSeen[ServicesNotificationSeen["NotificationSeenYes"] = 1] = "NotificationSeenYes";
})(ServicesNotificationSeen || (ServicesNotificationSeen = {}));
export var ServicesOrderSide;
(function (ServicesOrderSide) {
    ServicesOrderSide["OrderBuy"] = "BUY";
    ServicesOrderSide["OrderSell"] = "SELL";
    ServicesOrderSide["OrderFunding"] = "FUNDING";
    ServicesOrderSide["OrderLiquidation"] = "LIQUIDATION";
})(ServicesOrderSide || (ServicesOrderSide = {}));
export var ServicesOrderType;
(function (ServicesOrderType) {
    ServicesOrderType["OrderTypeLimit"] = "LIMIT";
    ServicesOrderType["OrderTypeMarket"] = "MARKET";
    ServicesOrderType["OrderTypeFunding"] = "FUNDING";
})(ServicesOrderType || (ServicesOrderType = {}));
export var ServicesOrigType;
(function (ServicesOrigType) {
    ServicesOrigType["OrderOrigTypeReverse"] = "REVERSE";
    ServicesOrigType["OrderOrigTypeLiquidation"] = "LIQUIDATION";
})(ServicesOrigType || (ServicesOrigType = {}));
export var ServicesPartnerID;
(function (ServicesPartnerID) {
    ServicesPartnerID[ServicesPartnerID["PARTNER_ID_NONE"] = -1] = "PARTNER_ID_NONE";
    ServicesPartnerID[ServicesPartnerID["PARTNER_ID_WLC"] = 1] = "PARTNER_ID_WLC";
    ServicesPartnerID[ServicesPartnerID["PARTNER_ID_TIGER"] = 2] = "PARTNER_ID_TIGER";
})(ServicesPartnerID || (ServicesPartnerID = {}));
export var ServicesPublicProfileShowTrades;
(function (ServicesPublicProfileShowTrades) {
    ServicesPublicProfileShowTrades[ServicesPublicProfileShowTrades["PublicProfileShowTradesDisabled"] = 0] = "PublicProfileShowTradesDisabled";
    ServicesPublicProfileShowTrades[ServicesPublicProfileShowTrades["PublicProfileShowTradesAll"] = 1] = "PublicProfileShowTradesAll";
    ServicesPublicProfileShowTrades[ServicesPublicProfileShowTrades["PublicProfileShowTradesOnlyClosed"] = 2] = "PublicProfileShowTradesOnlyClosed";
    ServicesPublicProfileShowTrades[ServicesPublicProfileShowTrades["PublicProfileShowTradesOnlyOpened"] = 3] = "PublicProfileShowTradesOnlyOpened";
})(ServicesPublicProfileShowTrades || (ServicesPublicProfileShowTrades = {}));
export var ServicesPublicProfileStatus;
(function (ServicesPublicProfileStatus) {
    ServicesPublicProfileStatus[ServicesPublicProfileStatus["PublicProfileStatusON"] = 1] = "PublicProfileStatusON";
    ServicesPublicProfileStatus[ServicesPublicProfileStatus["PublicProfileStatusOFF"] = 2] = "PublicProfileStatusOFF";
    ServicesPublicProfileStatus[ServicesPublicProfileStatus["PublicProfileStatusBAN"] = 3] = "PublicProfileStatusBAN";
})(ServicesPublicProfileStatus || (ServicesPublicProfileStatus = {}));
export var ServicesRiskManagementLogType;
(function (ServicesRiskManagementLogType) {
    ServicesRiskManagementLogType[ServicesRiskManagementLogType["RiskManagementLogTypeTradeLoss"] = 1] = "RiskManagementLogTypeTradeLoss";
    ServicesRiskManagementLogType[ServicesRiskManagementLogType["RiskManagementLogTypeTradeLeverage"] = 2] = "RiskManagementLogTypeTradeLeverage";
    ServicesRiskManagementLogType[ServicesRiskManagementLogType["RiskManagementLogTypeDayLoss"] = 3] = "RiskManagementLogTypeDayLoss";
})(ServicesRiskManagementLogType || (ServicesRiskManagementLogType = {}));
export var ServicesShortUrlModelType;
(function (ServicesShortUrlModelType) {
    ServicesShortUrlModelType["ShortUrlModelTypeTrade"] = "Trade";
    ServicesShortUrlModelType["ShortUrlModelTypeTradeGroup"] = "TradeGroup";
    ServicesShortUrlModelType["ShortUrlModelTypeDashboard"] = "Dashboard";
})(ServicesShortUrlModelType || (ServicesShortUrlModelType = {}));
export var ServicesStudentStatus;
(function (ServicesStudentStatus) {
    ServicesStudentStatus[ServicesStudentStatus["StudentStatusRequest"] = 0] = "StudentStatusRequest";
    ServicesStudentStatus[ServicesStudentStatus["StudentStatusAccepted"] = 1] = "StudentStatusAccepted";
    ServicesStudentStatus[ServicesStudentStatus["StudentStatusRejected"] = 2] = "StudentStatusRejected";
})(ServicesStudentStatus || (ServicesStudentStatus = {}));
export var ServicesTelegramCloseNotification;
(function (ServicesTelegramCloseNotification) {
    ServicesTelegramCloseNotification[ServicesTelegramCloseNotification["TelegramCloseNotificationEnabled"] = 1] = "TelegramCloseNotificationEnabled";
    ServicesTelegramCloseNotification[ServicesTelegramCloseNotification["TelegramCloseNotificationDisabled"] = 2] = "TelegramCloseNotificationDisabled";
})(ServicesTelegramCloseNotification || (ServicesTelegramCloseNotification = {}));
export var ServicesTelegramConnectPrivacy;
(function (ServicesTelegramConnectPrivacy) {
    ServicesTelegramConnectPrivacy[ServicesTelegramConnectPrivacy["TelegramConnectPrivacyEnabled"] = 1] = "TelegramConnectPrivacyEnabled";
    ServicesTelegramConnectPrivacy[ServicesTelegramConnectPrivacy["TelegramConnectPrivacyDisabled"] = 0] = "TelegramConnectPrivacyDisabled";
})(ServicesTelegramConnectPrivacy || (ServicesTelegramConnectPrivacy = {}));
export var ServicesTelegramConnectStatus;
(function (ServicesTelegramConnectStatus) {
    ServicesTelegramConnectStatus[ServicesTelegramConnectStatus["TelegramConnectStatusNew"] = 1] = "TelegramConnectStatusNew";
    ServicesTelegramConnectStatus[ServicesTelegramConnectStatus["TelegramConnectStatusConnected"] = 2] = "TelegramConnectStatusConnected";
})(ServicesTelegramConnectStatus || (ServicesTelegramConnectStatus = {}));
export var ServicesTelegramNotification;
(function (ServicesTelegramNotification) {
    ServicesTelegramNotification[ServicesTelegramNotification["TelegramNotificationDisabled"] = 0] = "TelegramNotificationDisabled";
    ServicesTelegramNotification[ServicesTelegramNotification["TelegramNotificationTradeAll"] = 1] = "TelegramNotificationTradeAll";
    ServicesTelegramNotification[ServicesTelegramNotification["TelegramNotificationTradeOpenOnly"] = 2] = "TelegramNotificationTradeOpenOnly";
    ServicesTelegramNotification[ServicesTelegramNotification["TelegramNotificationTradeExecutionOnly"] = 3] = "TelegramNotificationTradeExecutionOnly";
})(ServicesTelegramNotification || (ServicesTelegramNotification = {}));
export var ServicesTopLeague;
(function (ServicesTopLeague) {
    ServicesTopLeague[ServicesTopLeague["TopLeagueMoon"] = 1] = "TopLeagueMoon";
    ServicesTopLeague[ServicesTopLeague["TopLeagueStar"] = 2] = "TopLeagueStar";
    ServicesTopLeague[ServicesTopLeague["TopLeagueInterstellar"] = 3] = "TopLeagueInterstellar";
    ServicesTopLeague[ServicesTopLeague["TopLeagueGalaxy"] = 4] = "TopLeagueGalaxy";
    ServicesTopLeague[ServicesTopLeague["TopLeagueSpacePirates"] = 5] = "TopLeagueSpacePirates";
    ServicesTopLeague[ServicesTopLeague["TopLeagueSpaceDroids"] = 6] = "TopLeagueSpaceDroids";
    ServicesTopLeague[ServicesTopLeague["TopLeagueDefault"] = 7] = "TopLeagueDefault";
    ServicesTopLeague[ServicesTopLeague["TopLeaguePRO"] = 8] = "TopLeaguePRO";
})(ServicesTopLeague || (ServicesTopLeague = {}));
export var ServicesTopType;
(function (ServicesTopType) {
    ServicesTopType[ServicesTopType["TopTypeDay"] = 1] = "TopTypeDay";
    ServicesTopType[ServicesTopType["TopTypeMonth"] = 2] = "TopTypeMonth";
})(ServicesTopType || (ServicesTopType = {}));
export var ServicesTradeDurationType;
(function (ServicesTradeDurationType) {
    ServicesTradeDurationType["TradeDurationTypeToday"] = "today";
    ServicesTradeDurationType["TradeDurationTypeYesterday"] = "yesterday";
    ServicesTradeDurationType["TradeDurationTypePast1W"] = "past1w";
    ServicesTradeDurationType["TradeDurationType1W"] = "1w";
    ServicesTradeDurationType["TradeDurationType1M"] = "1m";
    ServicesTradeDurationType["TradeDurationType7D"] = "7d";
    ServicesTradeDurationType["TradeDurationType30D"] = "30d";
    ServicesTradeDurationType["TradeDurationType90D"] = "90d";
})(ServicesTradeDurationType || (ServicesTradeDurationType = {}));
export var ServicesTradeExtraInfoFilter;
(function (ServicesTradeExtraInfoFilter) {
    ServicesTradeExtraInfoFilter["TradeExtraInfoFilterEntryReasonsEmpty"] = "tags:empty";
    ServicesTradeExtraInfoFilter["TradeExtraInfoFilterEntryReasonsNotEmpty"] = "tags:not-empty";
    ServicesTradeExtraInfoFilter["TradeExtraInfoFilterConclusionEmpty"] = "conclusion:empty";
    ServicesTradeExtraInfoFilter["TradeExtraInfoFilterConclusionNotEmpty"] = "conclusion:not-empty";
    ServicesTradeExtraInfoFilter["TradeExtraInfoFilterDescEmpty"] = "desc:empty";
    ServicesTradeExtraInfoFilter["TradeExtraInfoFilterDescNotEmpty"] = "desc:not-empty";
    ServicesTradeExtraInfoFilter["TradeExtraInfoFilterMentorNoteEmpty"] = "mentor_note:empty";
    ServicesTradeExtraInfoFilter["TradeExtraInfoFilterMentorNoteNotEmpty"] = "mentor_note:not-empty";
})(ServicesTradeExtraInfoFilter || (ServicesTradeExtraInfoFilter = {}));
export var ServicesTradeGroupBy;
(function (ServicesTradeGroupBy) {
    ServicesTradeGroupBy["TradeGroupByMinute"] = "minute";
    ServicesTradeGroupBy["TradeGroupByHour"] = "hour";
    ServicesTradeGroupBy["TradeGroupByMonth"] = "month";
    ServicesTradeGroupBy["TradeGroupByDate"] = "date";
    ServicesTradeGroupBy["TradeGroupByWeek"] = "week";
})(ServicesTradeGroupBy || (ServicesTradeGroupBy = {}));
export var ServicesTradeMultiplier;
(function (ServicesTradeMultiplier) {
    ServicesTradeMultiplier[ServicesTradeMultiplier["TradeMultiplier1"] = 0] = "TradeMultiplier1";
    ServicesTradeMultiplier[ServicesTradeMultiplier["TradeMultiplier1000"] = 1] = "TradeMultiplier1000";
    ServicesTradeMultiplier[ServicesTradeMultiplier["TradeMultiplier10000"] = 2] = "TradeMultiplier10000";
    ServicesTradeMultiplier[ServicesTradeMultiplier["TradeMultiplier100000"] = 3] = "TradeMultiplier100000";
    ServicesTradeMultiplier[ServicesTradeMultiplier["TradeMultiplier1000000"] = 4] = "TradeMultiplier1000000";
})(ServicesTradeMultiplier || (ServicesTradeMultiplier = {}));
export var ServicesTradeProcess;
(function (ServicesTradeProcess) {
    ServicesTradeProcess[ServicesTradeProcess["TradeUnprocessed"] = 0] = "TradeUnprocessed";
    ServicesTradeProcess[ServicesTradeProcess["TradePartiallyProcessed"] = 1] = "TradePartiallyProcessed";
    ServicesTradeProcess[ServicesTradeProcess["TradeProcessCompleted"] = 3] = "TradeProcessCompleted";
})(ServicesTradeProcess || (ServicesTradeProcess = {}));
export var ServicesTradeSide;
(function (ServicesTradeSide) {
    ServicesTradeSide["TradeLong"] = "LONG";
    ServicesTradeSide["TradeShort"] = "SHORT";
    ServicesTradeSide["TradeBoth"] = "BOTH";
})(ServicesTradeSide || (ServicesTradeSide = {}));
export var ServicesTradeState;
(function (ServicesTradeState) {
    ServicesTradeState[ServicesTradeState["TradeStateOpen"] = 1] = "TradeStateOpen";
    ServicesTradeState[ServicesTradeState["TradeStateClosed"] = 2] = "TradeStateClosed";
})(ServicesTradeState || (ServicesTradeState = {}));
export var ServicesTradeTimeColumn;
(function (ServicesTradeTimeColumn) {
    ServicesTradeTimeColumn["TradeOpenTime"] = "open_time";
    ServicesTradeTimeColumn["TradeCloseTime"] = "close_time";
})(ServicesTradeTimeColumn || (ServicesTradeTimeColumn = {}));
export var ServicesTransactionDiscountType;
(function (ServicesTransactionDiscountType) {
    ServicesTransactionDiscountType["TransactionDiscountTypePercent"] = "percent";
    ServicesTransactionDiscountType["TransactionDiscountTypeAmount"] = "amount";
})(ServicesTransactionDiscountType || (ServicesTransactionDiscountType = {}));
export var ServicesTransactionSource;
(function (ServicesTransactionSource) {
    ServicesTransactionSource["TransactionSourceUsdtTrc20"] = "usdt_trc20";
    ServicesTransactionSource["TransactionSourceBUsdBep20"] = "busd_bep20";
    ServicesTransactionSource["TransactionSourceUsdtBep20"] = "usdt_bep20";
    ServicesTransactionSource["TransactionSourceTmm"] = "tmm";
    ServicesTransactionSource["TransactionSourceReferral"] = "referral";
    ServicesTransactionSource["TransactionSourceStripe"] = "stripe";
    ServicesTransactionSource["TransactionSourceWLC"] = "wlc";
    ServicesTransactionSource["TransactionSourceTiger"] = "tiger";
    ServicesTransactionSource["TransactionSourceBUsdtTrc20"] = "b_usdt_trc20";
    ServicesTransactionSource["TransactionSourceBUsdtErc20"] = "b_usdt_erc20";
    ServicesTransactionSource["TransactionSourceBBUsdBep20"] = "b_busd_bep20";
    ServicesTransactionSource["TransactionSourceScDash"] = "sc_dash";
    ServicesTransactionSource["TransactionSourceScBtc"] = "sc_btc";
    ServicesTransactionSource["TransactionSourceScNem"] = "sc_nem";
    ServicesTransactionSource["TransactionSourceCcard"] = "ccard";
    ServicesTransactionSource["TransactionSourcePaypal"] = "paypal";
    ServicesTransactionSource["TransactionSourceCICapital"] = "CICapital";
})(ServicesTransactionSource || (ServicesTransactionSource = {}));
export var ServicesTransactionStatus;
(function (ServicesTransactionStatus) {
    ServicesTransactionStatus["TransactionStatusGift"] = "gift";
    ServicesTransactionStatus["TransactionStatusTrial"] = "trial";
    ServicesTransactionStatus["TransactionStatusExpired"] = "expired";
    ServicesTransactionStatus["TransactionStatusPaid"] = "paid";
    ServicesTransactionStatus["TransactionStatusError"] = "error";
    ServicesTransactionStatus["TransactionStatusCanceled"] = "canceled";
    ServicesTransactionStatus["TransactionStatusRefund"] = "refund";
    ServicesTransactionStatus["TransactionStatusRejected"] = "rejected";
    ServicesTransactionStatus["TransactionStatusFailed"] = "failed";
    ServicesTransactionStatus["TransactionStatusCreated"] = "created";
    ServicesTransactionStatus["TransactionStatusPending"] = "pending";
})(ServicesTransactionStatus || (ServicesTransactionStatus = {}));
export var ServicesWLCStatus;
(function (ServicesWLCStatus) {
    ServicesWLCStatus[ServicesWLCStatus["WLCStatusNone"] = 0] = "WLCStatusNone";
    ServicesWLCStatus[ServicesWLCStatus["WLCStatusNew"] = 1] = "WLCStatusNew";
    ServicesWLCStatus[ServicesWLCStatus["WLCStatusNotReferral"] = 2] = "WLCStatusNotReferral";
    ServicesWLCStatus[ServicesWLCStatus["WLCStatusReferral"] = 3] = "WLCStatusReferral";
})(ServicesWLCStatus || (ServicesWLCStatus = {}));
export var ServicesWidgetFiltersSortBy;
(function (ServicesWidgetFiltersSortBy) {
    ServicesWidgetFiltersSortBy["WidgetFiltersSortByValueAsc"] = "value_asc";
    ServicesWidgetFiltersSortBy["WidgetFiltersSortByValueDesc"] = "value_desc";
    ServicesWidgetFiltersSortBy["WidgetFiltersSortByCountKeyDesc"] = "key_desc";
    ServicesWidgetFiltersSortBy["WidgetFiltersSortByCountKeyAsc"] = "key_asc";
})(ServicesWidgetFiltersSortBy || (ServicesWidgetFiltersSortBy = {}));
export var ServicesWidgetSource;
(function (ServicesWidgetSource) {
    ServicesWidgetSource["WidgetSourceTickerPrice"] = "ticker_price";
    ServicesWidgetSource["WidgetSourceStdDevProfitOverVolume"] = "std_dev_profit_over_volume";
    ServicesWidgetSource["WidgetSourceStdDevMAEOverDuration"] = "std_dev_mae_over_duration";
    ServicesWidgetSource["WidgetSourceStdDevMFEOverDuration"] = "std_dev_mfe_over_duration";
    ServicesWidgetSource["WidgetSourceStdDevProfitOverDuration"] = "std_dev_profit_over_duration";
    ServicesWidgetSource["WidgetSourceStdDevProfit"] = "std_dev_profit";
    ServicesWidgetSource["WidgetSourceStdDevMFE"] = "std_dev_mfe";
    ServicesWidgetSource["WidgetSourceStdDevMAE"] = "std_dev_mae";
    ServicesWidgetSource["WidgetSourceRiskManagementValues"] = "risk_values_usd";
    ServicesWidgetSource["WidgetSourceNetProfit"] = "income_usdt";
    ServicesWidgetSource["WidgetSourceNetProfitCandleStick"] = "income_usdt_candlestick";
    ServicesWidgetSource["WidgetSourceProfitLoss"] = "profit_loss";
    ServicesWidgetSource["WidgetSourceFunding"] = "funding";
    ServicesWidgetSource["WidgetSourcePercent"] = "income_percent";
    ServicesWidgetSource["WidgetSourcePercentToDeposit"] = "income_percent_balance";
    ServicesWidgetSource["WidgetSourcePercentToDepositCumulative"] = "income_percent_balance_cumulative";
    ServicesWidgetSource["WidgetSourceAvgPercentToDeposit"] = "avg_income_percent_balance";
    ServicesWidgetSource["WidgetSourceMaxDrawdown"] = "max_drawdown";
    ServicesWidgetSource["WidgetSourceRecoveryFactor"] = "recovery_factor";
    ServicesWidgetSource["WidgetSourceVolume"] = "volume";
    ServicesWidgetSource["WidgetSourceVolumePerSymbol"] = "volume_per_symbol";
    ServicesWidgetSource["WidgetSourceAvgVolume"] = "avg_volume";
    ServicesWidgetSource["WidgetSourceAvgVolumePerSymbol"] = "avg_volume_per_symbol";
    ServicesWidgetSource["WidgetSourceWinPercent"] = "winning_percent";
    ServicesWidgetSource["WidgetSourceLossPercent"] = "loosing_percent";
    ServicesWidgetSource["WidgetSourceIncomeByApiKey"] = "income_usdt_api_keys";
    ServicesWidgetSource["WidgetSourceIncomeByEntryReasons"] = "tag_profit";
    ServicesWidgetSource["WidgetSourcePercentByEntryReasons"] = "tag_percent";
    ServicesWidgetSource["WidgetSourceEntryReasonCombination"] = "tag_percent_combinations";
    ServicesWidgetSource["WidgetSourceWinRateEntryReasonCombination"] = "tag_win_rate_combinations";
    ServicesWidgetSource["WidgetSourceIncomeAccumulative"] = "income_usdt_accumulative";
    ServicesWidgetSource["WidgetSourceVolumeAccumulative"] = "volume_usdt_accumulative";
    ServicesWidgetSource["WidgetSourceAnonymousIncomeAccumulative"] = "income_usdt_anonymous_accumulative";
    ServicesWidgetSource["WidgetAverageReturn"] = "average_return";
    ServicesWidgetSource["WidgetSourceMathExpectation"] = "math_expectation";
    ServicesWidgetSource["WidgetSourceTradingSessionMathExpectation"] = "trading_session_math_expectation";
    ServicesWidgetSource["WidgetSourcePayOffRatio"] = "pay_off_ratio";
    ServicesWidgetSource["WidgetSourceProfitFactor"] = "profit_factor";
    ServicesWidgetSource["WidgetSourceProfitFactorPerSymbol"] = "profit_factor_per_symbol";
    ServicesWidgetSource["WidgetSourceCounter"] = "counter";
    ServicesWidgetSource["WidgetSourceCounterByApiKey"] = "counter_api_keys";
    ServicesWidgetSource["WidgetSourceCommission"] = "commission_usdt";
    ServicesWidgetSource["WidgetSourceCommissionAccumulative"] = "commission_usdt_accumulative";
    ServicesWidgetSource["WidgetSourceCommissionAccumulativeBNB"] = "commission_bnb_accumulative";
    ServicesWidgetSource["WidgetSourceCommissionBNB"] = "commission_bnb";
    ServicesWidgetSource["WidgetSourceBalance"] = "balance";
    ServicesWidgetSource["WidgetSourceBalancePerApiKey"] = "balance_per_api_key";
    ServicesWidgetSource["WidgetSourceBalancePerAsset"] = "spot_balance";
    ServicesWidgetSource["WidgetSourceCountPerSymbol"] = "pie_symbol";
    ServicesWidgetSource["WidgetSourceWinPerSymbol"] = "pie_symbol_income_profit";
    ServicesWidgetSource["WidgetSourceIncomePerSymbol"] = "symbol_income";
    ServicesWidgetSource["WidgetSourceCountWinPerSymbol"] = "pie_symbol_winning";
    ServicesWidgetSource["WidgetSourceCountLossPerSymbol"] = "pie_symbol_loosing";
    ServicesWidgetSource["WidgetSourceLossPerSymbol"] = "pie_symbol_income_loose";
    ServicesWidgetSource["WidgetSourceIncomePerCategory"] = "category_profit";
    ServicesWidgetSource["WidgetSourceWinPerCategory"] = "category_win_percentage";
    ServicesWidgetSource["WidgetSourceWinPercentByDayOfWeek"] = "weekday_percent";
    ServicesWidgetSource["WidgetSourceIncomeByDayOfWeek"] = "weekday_profit";
    ServicesWidgetSource["WidgetSourceIncomeByHourOfDay"] = "hourly_profit";
    ServicesWidgetSource["WidgetSourceWinPercentByHourOfDay"] = "hourly_percent";
    ServicesWidgetSource["WidgetSourceAvgLossDeviation"] = "average_loss_deviation_percent";
    ServicesWidgetSource["WidgetSourceAvgIncome"] = "average_usdt";
    ServicesWidgetSource["WidgetSourceAvgIncomePerDay"] = "average_usdt_sum";
    ServicesWidgetSource["WidgetSourceAvgWin"] = "average_winning_usdt";
    ServicesWidgetSource["WidgetSourceAvgLoss"] = "average_loosing_usdt";
    ServicesWidgetSource["WidgetSourceAvgPercent"] = "average_percent";
    ServicesWidgetSource["WidgetSourceAvgWinPercent"] = "average_winning_percent";
    ServicesWidgetSource["WidgetSourceAvgLossPercent"] = "average_loosing_percent";
    ServicesWidgetSource["WidgetSourceAvgMFE"] = "average_max_win_percent";
    ServicesWidgetSource["WidgetSourceMaxMFE"] = "max_max_win_percent";
    ServicesWidgetSource["WidgetSourceMinMFE"] = "min_max_win_percent";
    ServicesWidgetSource["WidgetSourceAvgMAE"] = "average_max_loose_percent";
    ServicesWidgetSource["WidgetSourceMaxMAE"] = "max_max_loose_percent";
    ServicesWidgetSource["WidgetSourceMinMAE"] = "min_max_loose_percent";
    ServicesWidgetSource["WidgetSourceAvgLeverage"] = "average_leverage";
    ServicesWidgetSource["WidgetSourceMinLeverage"] = "min_leverage";
    ServicesWidgetSource["WidgetSourceMaxLeverage"] = "max_leverage";
    ServicesWidgetSource["WidgetSourceAvgDuration"] = "holding_time_average";
    ServicesWidgetSource["WidgetSourceAvgDurationBySymbol"] = "symbol_duration_average";
    ServicesWidgetSource["WidgetSourceMinDuration"] = "holding_time_min";
    ServicesWidgetSource["WidgetSourceMaxDuration"] = "holding_time_max";
    ServicesWidgetSource["WidgetSourceWorstTrade"] = "worst_usdt";
    ServicesWidgetSource["WidgetSourceBestTrade"] = "best_usdt";
    ServicesWidgetSource["WidgetSourceWorstPercent"] = "worst_percent";
    ServicesWidgetSource["WidgetSourceBestPercent"] = "best_percent";
    ServicesWidgetSource["WidgetSourceLongShort"] = "pie_side";
})(ServicesWidgetSource || (ServicesWidgetSource = {}));
export var ServicesWidgetType;
(function (ServicesWidgetType) {
    ServicesWidgetType["WidgetTypeChart"] = "chart";
    ServicesWidgetType["WidgetTypeNumber"] = "number";
    ServicesWidgetType["WidgetTypeCalendar"] = "calendar";
})(ServicesWidgetType || (ServicesWidgetType = {}));
export var ServicesWidgetType2;
(function (ServicesWidgetType2) {
    ServicesWidgetType2["WidgetType2Line"] = "line";
    ServicesWidgetType2["WidgetType2LineStep"] = "line-step";
    ServicesWidgetType2["WidgetType2LineSimple"] = "line-simple";
    ServicesWidgetType2["WidgetType2Pie"] = "pie";
    ServicesWidgetType2["WidgetType2Column"] = "column";
    ServicesWidgetType2["WidgetType2TreeMap"] = "treemap";
    ServicesWidgetType2["WidgetType2Bubble"] = "bubble";
    ServicesWidgetType2["WidgetType2CandleStick"] = "candlestick";
})(ServicesWidgetType2 || (ServicesWidgetType2 = {}));
//# sourceMappingURL=data-contracts.js.map