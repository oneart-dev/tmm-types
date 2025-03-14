import { ContentType, HttpClient } from "./http-client";
export class Oauth2 extends HttpClient {
    constructor() {
        super(...arguments);
        this.getOauth2 = (key, params = {}) => this.request({
            path: `/oauth2/sse/${key}`,
            method: "GET",
            secure: true,
            ...params,
        });
        this.tokenCreate = (payload, params = {}) => this.request({
            path: `/oauth2/token`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Oauth2.js.map