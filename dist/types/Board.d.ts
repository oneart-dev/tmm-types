import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersDashboardCreateResponse, ControllersDashboardListResponse, ControllersShortUrlResponse, ControllersUnauthorizedResponse, DtoDashboardCreateForm, DtoDashboardUpdateForm, DtoDashboardsSortForm, DtoWidgetCreateForm, DtoWidgetUpdateForm, ServicesLoadBoardResponseChunk, ServicesWidgetCreateResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Board<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    boardList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersDashboardListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    boardUpdate: (payload: DtoDashboardCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersDashboardCreateResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    counterDashboardDetail: (id: number, query?: {
        api_key_id?: number[] | undefined;
        api_key_id_params?: "not:" | undefined;
        category?: number[] | undefined;
        category_params?: "not:" | undefined;
        closeBetween?: string | undefined;
        daysOfWeek?: number[] | undefined;
        durationBetween?: string | undefined;
        durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d" | undefined;
        exit_tags?: number[] | undefined;
        exit_tags_params?: "not:" | "all:" | "not:all:" | "only:" | undefined;
        extraInfo?: "conclusion:empty" | "conclusion:not-empty" | "desc:empty" | "desc:not-empty" | "mentor_note:not-empty" | "mentor_note:empty" | undefined;
        groupBy?: "hour" | "minute" | "month" | "week" | "date" | undefined;
        headers?: string[] | undefined;
        id?: number | undefined;
        ids?: number[] | undefined;
        leverageBetween?: string | undefined;
        maeBetween?: string | undefined;
        mfeBetween?: string | undefined;
        multiplier?: string | undefined;
        openBetween?: string | undefined;
        percentBetween?: string | undefined;
        profitBetween?: string | undefined;
        profitDepositBetween?: string | undefined;
        side?: "LONG" | "SHORT" | undefined;
        state?: 0 | 2 | 1 | undefined;
        symbol?: string[] | undefined;
        symbol_params?: "not:" | undefined;
        tags?: number[] | undefined;
        tags_params?: "not:" | "all:" | "not:all:" | "only:" | undefined;
        trade_time?: string | undefined;
        user_id?: number | undefined;
        volumeBetween?: string | undefined;
        volumeFrom?: number | undefined;
        volumeTo?: number | undefined;
        with_archive?: boolean | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    counterWidgetDetail: (id: number, query?: {
        api_key_id?: number[] | undefined;
        api_key_id_params?: "not:" | undefined;
        category?: number[] | undefined;
        category_params?: "not:" | undefined;
        closeBetween?: string | undefined;
        daysOfWeek?: number[] | undefined;
        durationBetween?: string | undefined;
        durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d" | undefined;
        exit_tags?: number[] | undefined;
        exit_tags_params?: "not:" | "all:" | "not:all:" | "only:" | undefined;
        extraInfo?: "conclusion:empty" | "conclusion:not-empty" | "desc:empty" | "desc:not-empty" | "mentor_note:not-empty" | "mentor_note:empty" | undefined;
        groupBy?: "hour" | "minute" | "month" | "week" | "date" | undefined;
        headers?: string[] | undefined;
        id?: number | undefined;
        ids?: number[] | undefined;
        leverageBetween?: string | undefined;
        maeBetween?: string | undefined;
        mfeBetween?: string | undefined;
        multiplier?: string | undefined;
        openBetween?: string | undefined;
        percentBetween?: string | undefined;
        profitBetween?: string | undefined;
        profitDepositBetween?: string | undefined;
        side?: "LONG" | "SHORT" | undefined;
        state?: 0 | 2 | 1 | undefined;
        symbol?: string[] | undefined;
        symbol_params?: "not:" | undefined;
        tags?: number[] | undefined;
        tags_params?: "not:" | "all:" | "not:all:" | "only:" | undefined;
        trade_time?: string | undefined;
        user_id?: number | undefined;
        volumeBetween?: string | undefined;
        volumeFrom?: number | undefined;
        volumeTo?: number | undefined;
        with_archive?: boolean | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    publicLoadDetail: (id: number, code: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    sortCreate: (payload: DtoDashboardsSortForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    widgetTempCreate: (payload: DtoWidgetCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesWidgetCreateResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    widgetUpdate: (id: number, payload: DtoWidgetCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesWidgetCreateResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    widgetCreate: (id: number, payload: DtoWidgetUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    widgetDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    boardCreate: (id: number, payload: DtoDashboardUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    boardDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | void | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    cloneCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersDashboardCreateResponse, string | void | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    loadDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesLoadBoardResponseChunk, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    shortLinkCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersShortUrlResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Board.d.ts.map