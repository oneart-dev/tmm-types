import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersUnauthorizedResponse, DtoRiskManagementCreateForm, DtoRiskManagementUpdateForm, ServicesRiskManagementLogPagination, ServicesRiskManagementPagination } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class RiskManagement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    riskManagementUpdate: (payload: DtoRiskManagementCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    riskManagementCreate: (payload: DtoRiskManagementUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    riskManagementList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesRiskManagementPagination, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    getRiskManagement: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesRiskManagementLogPagination, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    riskManagementDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    toggleCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=RiskManagement.d.ts.map