import { ContentType, HttpClient } from "./http-client";
export class Contact extends HttpClient {
    constructor() {
        super(...arguments);
        this.contactCreate = (payload, params = {}) => this.request({
            path: `/contact`,
            method: "POST",
            body: payload,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Contact.js.map