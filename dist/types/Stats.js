import { ContentType, HttpClient } from "./http-client";
export class Stats extends HttpClient {
    constructor() {
        super(...arguments);
        this.serverList = (params = {}) => this.request({
            path: `/stats/server`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.topCoinsList = (params = {}) => this.request({
            path: `/stats/top-coins`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Stats.js.map