import { HttpClient } from "./http-client";
export class Pulse extends HttpClient {
    constructor() {
        super(...arguments);
        this.latestList = (params = {}) => this.request({
            path: `/pulse/latest`,
            method: "GET",
            format: "json",
            ...params,
        });
        this.weeksList = (query, params = {}) => this.request({
            path: `/pulse/weeks`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        this.pulseDetail = (week, params = {}) => this.request({
            path: `/pulse/${week}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Pulse.js.map