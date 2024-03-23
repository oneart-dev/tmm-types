import { HttpClient, RequestParams } from "./http-client";
export declare class Candles<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    listList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<object[][], any>>;
}
//# sourceMappingURL=Candles.d.ts.map