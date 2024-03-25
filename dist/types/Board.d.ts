import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersDashboardCreateResponse, ControllersDashboardListResponse, ControllersLoadBoardResponse, ControllersShortUrlResponse, ControllersUnauthorizedResponse, DtoDashboardCreateForm, DtoDashboardUpdateForm, DtoDashboardsSortForm, DtoWidgetCreateForm, DtoWidgetUpdateForm, ServicesWidgetCreateResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Board<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    boardList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersDashboardListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    boardUpdate: (payload: DtoDashboardCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersDashboardCreateResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    counterDashboardDetail: (id: number, query?: {
        id?: number | undefined;
        ids?: number[] | undefined;
        api_key_id?: number[] | undefined;
        tags?: number[] | undefined;
        trade_time?: string | undefined;
        durationType?: "1m" | "today" | "yesterday" | "past1w" | "7d" | "30d" | "90d" | "1w" | undefined;
        openBetween?: string | undefined;
        closeBetween?: string | undefined;
        percentBetween?: string | undefined;
        profitBetween?: string | undefined;
        durationBetween?: string | undefined;
        leverageBetween?: string | undefined;
        side?: "LONG" | "SHORT" | undefined;
        user_id?: string | undefined;
        category_id?: number | undefined;
        volumeFrom?: number | undefined;
        volumeTo?: number | undefined;
        daysOfWeek?: number[] | undefined;
        symbol?: string[] | undefined;
        extraInfo?: "conclusion:empty" | "conclusion:not-empty" | "desc:empty" | "desc:not-empty" | "mentor_note:empty" | "mentor_note:not-empty" | undefined;
    } | undefined, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    counterWidgetDetail: (id: number, query?: {
        id?: number | undefined;
        ids?: number[] | undefined;
        api_key_id?: number[] | undefined;
        tags?: number[] | undefined;
        trade_time?: string | undefined;
        durationType?: "1m" | "today" | "yesterday" | "past1w" | "7d" | "30d" | "90d" | "1w" | undefined;
        openBetween?: string | undefined;
        closeBetween?: string | undefined;
        percentBetween?: string | undefined;
        profitBetween?: string | undefined;
        durationBetween?: string | undefined;
        leverageBetween?: string | undefined;
        side?: "LONG" | "SHORT" | undefined;
        user_id?: string | undefined;
        category_id?: number | undefined;
        volumeFrom?: number | undefined;
        volumeTo?: number | undefined;
        daysOfWeek?: number[] | undefined;
        symbol?: string[] | undefined;
        extraInfo?: "conclusion:empty" | "conclusion:not-empty" | "desc:empty" | "desc:not-empty" | "mentor_note:empty" | "mentor_note:not-empty" | undefined;
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
    loadDetail: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersLoadBoardResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    shortLinkCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersShortUrlResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Board.d.ts.map