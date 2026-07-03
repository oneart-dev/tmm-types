import { ContentType, HttpClient } from "./http-client";
export class Stats extends HttpClient {
    constructor() {
        super(...arguments);
        this.ppLinksList = (params = {}) => this.request({
            path: `/stats/pp-links`,
            method: "GET",
            format: "json",
            ...params,
        });
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