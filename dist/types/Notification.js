import { ContentType, HttpClient } from "./http-client";
export class Notification extends HttpClient {
    constructor() {
        super(...arguments);
        this.latestList = (params = {}) => this.request({
            path: `/notification/latest`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.interactCreate = (id, params = {}) => this.request({
            path: `/notification/${id}/interact`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.seenCreate = (id, params = {}) => this.request({
            path: `/notification/${id}/seen`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Notification.js.map