import { ContentType, HttpClient } from "./http-client";
export class Transaction extends HttpClient {
    constructor() {
        super(...arguments);
        this.cancelCreate = (id, params = {}) => this.request({
            path: `/transaction/${id}/cancel`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Transaction.js.map