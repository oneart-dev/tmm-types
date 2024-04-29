import { ContentType, HttpClient } from "./http-client";
export class Sse extends HttpClient {
    constructor() {
        super(...arguments);
        this.getSse = (params = {}) => this.request({
            path: `/sse`,
            method: "GET",
            secure: true,
            ...params,
        });
        this.connectCreate = (params = {}) => this.request({
            path: `/sse/connect`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.disconnectCreate = (params = {}) => this.request({
            path: `/sse/disconnect`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Sse.js.map