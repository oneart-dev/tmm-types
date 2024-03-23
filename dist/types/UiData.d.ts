import { ControllersApiSuccessResponse, ControllersUIDataResponse, DtoUIData } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UiData<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    uiDataList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersUIDataResponse, any>>;
    uiDataUpdate: (payload: DtoUIData, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=UiData.d.ts.map