import { ControllersApiSuccessResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class FilterPreset<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    filterPresetUpdate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=FilterPreset.d.ts.map