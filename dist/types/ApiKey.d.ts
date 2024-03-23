import { ControllersAPiKeyCreateResponse, ControllersApiKeysList, ControllersApiSuccessResponse, DtoApiKeyCreateForm, DtoApiKeyUpdateForm, DtoApiKeyUpdateNameForm, ServicesApiKeysListPagination } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ApiKey<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    apiKeyUpdate: (payload: DtoApiKeyCreateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersAPiKeyCreateResponse, any>>;
    apiKeyList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ServicesApiKeysListPagination, any>>;
    listDetail: (userId: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiKeysList, any>>;
    apiKeyCreate: (id: number, payload: DtoApiKeyUpdateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    apiKeyDelete: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    balanceUpdateCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    fundingUpdateCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    nameCreate: (id: number, payload: DtoApiKeyUpdateNameForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    repairCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    toggleCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    toggleExtendedCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=ApiKey.d.ts.map