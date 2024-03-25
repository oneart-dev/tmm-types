import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiWarningResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Transaction<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    cancelCreate: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Transaction.d.ts.map