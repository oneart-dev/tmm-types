import { ContentType, HttpClient } from "./http-client";
export class Widget extends HttpClient {
    constructor() {
        super(...arguments);
        this.publicLoadDetail = (code, params = {}) => this.request({
            path: `/widget/public/${code}/load`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Widget.js.map