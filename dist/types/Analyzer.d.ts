import { ControllersAnalyzerNotesResponse, ControllersAnalyzerWeekResponse, ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersTradeChartDrawingsResponse, ControllersUnauthorizedResponse, DtoAnalyzerNoteForm, DtoSymbolChartForm, ServicesAnalyzerWeekListResponse, ServicesTradeChartResponse, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Analyzer<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    analyzerList: (query?: {
        type?: string;
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