import { ControllersApiErrorResponse, ControllersApiSuccessServicesFilterCatalogPayload, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class FilterCatalog<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    filterCatalogList: (query?: {
        subject_user_id?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesFilterCatalogPayload, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=FilterCatalog.d.ts.map