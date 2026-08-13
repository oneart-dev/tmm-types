import { ContentType, HttpClient } from "./http-client";
export class ExchangeRequests extends HttpClient {
    constructor() {
        super(...arguments);
        this.exchangeRequestsCreate = (payload, params = {}) => this.request({
            path: `/exchange-requests`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=ExchangeRequests.js.map