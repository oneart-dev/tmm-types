import { ControllersApiSuccessResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Transaction<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    cancelCreate: (id: number, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=Transaction.d.ts.map