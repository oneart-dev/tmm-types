import { ControllersAPiKeyCreateResponse, ControllersApiErrorResponse, ControllersApiKeysList, ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersUnauthorizedResponse, DtoApiKeyCreateForm, DtoApiKeyUpdateForm, DtoApiKeyUpdateNameForm, ServicesApiKeysListPagination } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ApiKey<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    apiKeyUpdate: (payload: DtoApiKeyCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersAPiKeyCreateResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    apiKeyList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesApiKeysListPagination, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    listDetail: (userId: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiKeysList, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    apiKeyCreate: (id: number, payload: DtoApiKeyUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    apiKeyDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    balanceUpdateCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    freezeCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    fundingUpdateCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    nameCreate: (id: number, payload: DtoApiKeyUpdateNameForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    repairCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    toggleCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    toggleExtendedCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=ApiKey.d.ts.map