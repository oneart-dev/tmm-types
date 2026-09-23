import { ContentType, HttpClient } from "./http-client";
export class Market extends HttpClient {
    constructor() {
        super(...arguments);
        this.streamList = (query, params = {}) => this.request({
            path: `/market/stream`,
            method: "GET",
            query: query,
            secure: true,
            ...params,
        });
        this.subscribeCreate = (form, params = {}) => this.request({
            path: `/market/subscribe`,
            method: "POST",
            body: form,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Market.js.map