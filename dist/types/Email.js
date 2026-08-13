import { HttpClient } from "./http-client";
export class Email extends HttpClient {
    constructor() {
        super(...arguments);
        this.unsubscribeList = (query, params = {}) => this.request({
            path: `/email/unsubscribe`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Email.js.map