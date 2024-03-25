import { ControllersApiErrorResponse, ControllersUnauthorizedResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Candles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    listList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<object[][], string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Candles.d.ts.map