import { ContentType, HttpClient } from "./http-client";
export class ClientErrors extends HttpClient {
    constructor() {
        super(...arguments);
        this.clientErrorsCreate = (payload, params = {}) => this.request({
            path: `/client-errors`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=ClientErrors.js.map