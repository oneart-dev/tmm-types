import { ContentType, HttpClient } from "./http-client";
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
        this.notificationThreadsList = (query, params = {}) => this.request({
            path: `/admin/notification_threads`,
            method: "GET",
            query: query,
            ...params,
        });
        this.notificationThreadsDetail = (notificationId, userId, params = {}) => this.request({
            path: `/admin/notification_threads/${notificationId}/${userId}`,
            method: "GET",
            ...params,
        });
        this.notificationThreadsReplyCreate = (notificationId, userId, payload, params = {}) => this.request({
            path: `/admin/notification_threads/${notificationId}/${userId}/reply`,
            method: "POST",
            body: payload,
            type: ContentType.Json,
            ...params,
        });
        this.notificationsList = (query, params = {}) => this.request({
            path: `/admin/notifications`,
            method: "GET",
            query: query,
            ...params,
        });
        this.notificationsCreate = (payload, params = {}) => this.request({
            path: `/admin/notifications`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
        this.notificationsDetail = (id, params = {}) => this.request({
            path: `/admin/notifications/${id}`,
            method: "GET",
            ...params,
        });
        this.notificationsUpdate = (id, payload, params = {}) => this.request({
            path: `/admin/notifications/${id}`,
            method: "PUT",
            body: payload,
            type: ContentType.Json,
            ...params,
        });
        this.notificationsDelete = (id, params = {}) => this.request({
            path: `/admin/notifications/${id}`,
            method: "DELETE",
            ...params,
        });
        this.notificationsAnalyticsDetail = (id, params = {}) => this.request({
            path: `/admin/notifications/${id}/analytics`,
            method: "GET",
            ...params,
        });
        this.notificationsPublishCreate = (id, params = {}) => this.request({
            path: `/admin/notifications/${id}/publish`,
            method: "POST",
            ...params,
        });
        this.notificationsStatusPartialUpdate = (id, payload, params = {}) => this.request({
            path: `/admin/notifications/${id}/status`,
            method: "PATCH",
            body: payload,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
        this.notificationsVotesDetail = (id, params = {}) => this.request({
            path: `/admin/notifications/${id}/votes`,
            method: "GET",
            ...params,
        });
        this.usersTicketsCreate = (id, payload, params = {}) => this.request({
            path: `/admin/users/${id}/tickets`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
    }
}
//# sourceMappingURL=Admin.js.map