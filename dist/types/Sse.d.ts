import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersSseConnectResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Sse<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    connectCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersSseConnectResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    disconnectCreate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Sse.d.ts.map