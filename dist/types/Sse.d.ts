import { ControllersApiSuccessResponse, ControllersSseConnectResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Sse<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    connectCreate: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersSseConnectResponse, any>>;
    disconnectCreate: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=Sse.d.ts.map