import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersFilesResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Files<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    uploadImageCreate: (model: string, id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersFilesResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    filesDelete: (id: number, type: string, model: string, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Files.d.ts.map