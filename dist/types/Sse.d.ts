import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersSseConnectResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Sse<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    getSse: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<void, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    connectCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersSseConnectResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    disconnectCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Sse.d.ts.map