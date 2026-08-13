import { ContentType, HttpClient } from "./http-client";
export class Analytics extends HttpClient {
    constructor() {
        super(...arguments);
        this.activationList = (query, params = {}) => this.request({
            path: `/analytics/activation`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Analytics.js.map