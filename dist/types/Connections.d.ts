import { ControllersApiErrorResponse, ControllersApiSuccessArrayServicesBaseConnection, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Connections<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    connectionsList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesBaseConnection, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Connections.d.ts.map