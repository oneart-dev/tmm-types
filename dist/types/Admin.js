import { HttpClient } from "./http-client";
export class Admin extends HttpClient {
    constructor() {
        super(...arguments);
        this.chatThreadsExportDetail = (uid, params = {}) => this.request({
            path: `/admin/chat/threads/${uid}/export`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Admin.js.map