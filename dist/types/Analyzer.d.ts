import { ControllersAnalyzerNotesResponse, ControllersAnalyzerWeekResponse, ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersTradeChartDrawingsResponse, ControllersUnauthorizedResponse, DtoAnalyzerNoteForm, DtoSymbolChartForm, ServicesAnalyzerWeekListResponse, ServicesTradeChartResponse, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Analyzer<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    analyzerList: (query?: {
        type?: string;
        id?: number;
        ids?: number[];
        api_key_id?: number[];
        tags?: number[];
        trade_time?: string;
        durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
        openBetween?: string;
        closeBetween?: string;
        percentBetween?: string;
        profitBetween?: string;
        durationBetween?: string;
        leverageBetween?: string;
        side?: "SHORT" | "LONG";
        user_id?: string;
        category_id?: number;
        volumeFrom?: number;
        volumeTo?: number;
        daysOfWeek?: number[];
        symbol?: string[];
        extraInfo?: "conclusion:empty" | "conclusion:not-empty" | "desc:empty" | "desc:not-empty" | "mentor_note:not-empty" | "mentor_note:empty";
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersAnalyzerWeekResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    notesList: (query?: {
        type?: number;
        dateBetween?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersAnalyzerNotesResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    notesCreate: (payload: DtoAnalyzerNoteForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
    weekListList: (query?: {
        api_key_id?: number[];
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesAnalyzerWeekListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    chartDataCreate: (ticker: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTradeChartDrawingsResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
    loadCandlesDataCreate: (ticker: string, payload: DtoSymbolChartForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesTradeChartResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
}
//# sourceMappingURL=Analyzer.d.ts.map