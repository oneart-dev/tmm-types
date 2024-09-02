import { ContentType, HttpClient } from "./http-client";
export class NotificationTemplate extends HttpClient {
    constructor() {
        super(...arguments);
        this.notificationTemplateUpdate = (payload, params = {}) => this.request({
            path: `/notification-template`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.notificationTemplateCreate = (id, payload, params = {}) => this.request({
            path: `/notification-template/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.notificationTemplateDelete = (id, params = {}) => this.request({
            path: `/notification-template/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=NotificationTemplate.js.map