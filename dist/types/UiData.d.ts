import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersUIDataResponse, ControllersUnauthorizedResponse, DtoUIData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UiData<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    uiDataList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersUIDataResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    uiDataUpdate: (payload: DtoUIData, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=UiData.d.ts.map