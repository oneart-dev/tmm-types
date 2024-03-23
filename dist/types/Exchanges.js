import { ContentType, HttpClient } from "./http-client";
export class Exchanges extends HttpClient {
    constructor() {
        super(...arguments);
        this.exchangesList = (params = {}) => this.request({
            path: `/exchanges`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.tickersList = (params = {}) => this.request({
            path: `/exchanges/tickers`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Exchanges.js.map