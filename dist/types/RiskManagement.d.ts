import { ControllersApiSuccessResponse, DtoRiskManagementCreateForm, DtoRiskManagementUpdateForm, ServicesRiskManagementLogPagination, ServicesRiskManagementPagination } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class RiskManagement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    riskManagementUpdate: (payload: DtoRiskManagementCreateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    riskManagementCreate: (payload: DtoRiskManagementUpdateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    riskManagementList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ServicesRiskManagementPagination, any>>;
    getRiskManagement: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ServicesRiskManagementLogPagination, any>>;
    riskManagementDelete: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
    toggleCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=RiskManagement.d.ts.map