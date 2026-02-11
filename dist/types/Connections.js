import { ContentType, HttpClient } from "./http-client";
export class Connections extends HttpClient {
    constructor() {
        super(...arguments);
        this.connectionsList = (params = {}) => this.request({
            path: `/connections`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Connections.js.map