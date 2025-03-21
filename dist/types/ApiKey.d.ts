import { ControllersApiErrorResponse, ControllersApiSuccessArrayServicesApiKey, ControllersApiSuccessNoData, ControllersApiSuccessResponse, ControllersApiSuccessServicesApiKey, ControllersApiWarningResponse, ControllersUnauthorizedResponse, DtoApiKeyCreateForm, DtoApiKeyUpdateForm, DtoApiKeyUpdateNameForm, ServicesApiKeysListPagination } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ApiKey<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    apiKeyUpdate: (payload: DtoApiKeyCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesApiKey, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    apiKeyList: (query?: {
        exchange_id?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 41 | 8 | 9 | 10 | 40 | 11 | 21 | 23 | 24 | 25 | 12 | 22 | 13 | 14 | 15 | 32 | 33 | 42 | 43 | 44 | 45;
        from_id?: number;
        frozen?: boolean;
        name?: string;
        not_frozen?: boolean;
        page?: number;
        itemsPerPage?: number;
        sortBy?: string;
        sortDesc?: boolean;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesApiKeysListPagination, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    listDetail: (userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesApiKey, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    apiKeyCreate: (id: number, payload: DtoApiKeyUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    apiKeyDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    balanceUpdateCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    freezeCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    fundingUpdateCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    nameCreate: (id: number, payload: DtoApiKeyUpdateNameForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    ordersArchiveCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    repairCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    toggleCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    toggleExtendedCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=ApiKey.d.ts.map