import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class FilterPreset<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    filterPresetUpdate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=FilterPreset.d.ts.map