import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersFilterPresetsListResponse, ControllersUnauthorizedResponse, DtoFilterPresetCreateForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class FilterPreset<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    filterPresetList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFilterPresetsListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    filterPresetUpdate: (payload: DtoFilterPresetCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    filterPresetCreate: (id: string, payload: DtoFilterPresetCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    filterPresetDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=FilterPreset.d.ts.map