import { ContentType, HttpClient } from "./http-client";
export class Candles extends HttpClient {
    constructor() {
        super(...arguments);
        this.listList = (query, params = {}) => this.request({
            path: `/candles/list`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Candles.js.map