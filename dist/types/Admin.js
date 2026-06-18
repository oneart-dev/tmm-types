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
        this.fleetActivityList = (query, params = {}) => this.request({
            path: `/admin/fleet/activity`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.fleetArtifactVersionsList = (params = {}) => this.request({
            path: `/admin/fleet/artifact-versions`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.fleetArtifactsList = (params = {}) => this.request({
            path: `/admin/fleet/artifacts`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.fleetArtifactsCreate = (data, params = {}) => this.request({
            path: `/admin/fleet/artifacts`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.FormData,
            format: "json",
            ...params,
        });
        this.fleetExchangesTargetVersionCreate = (exchangeId, body, params = {}) => this.request({
            path: `/admin/fleet/exchanges/${exchangeId}/target-version`,
            method: "POST",
            body: body,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.fleetInstancesList = (params = {}) => this.request({
            path: `/admin/fleet/instances`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.fleetInstancesDrainCreate = (id, exchangeId, params = {}) => this.request({
            path: `/admin/fleet/instances/${id}/${exchangeId}/drain`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.fleetInstancesUndrainCreate = (id, exchangeId, params = {}) => this.request({
            path: `/admin/fleet/instances/${id}/${exchangeId}/undrain`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.fleetNodesList = (params = {}) => this.request({
            path: `/admin/fleet/nodes`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
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
        this.notificationThreadsSeenCreate = (notificationId, userId, params = {}) => this.request({
            path: `/admin/notification_threads/${notificationId}/${userId}/seen`,
            method: "POST",
            secure: true,
            ...params,
        });
        this.notificationThreadsStatusPartialUpdate = (notificationId, userId, payload, params = {}) => this.request({
            path: `/admin/notification_threads/${notificationId}/${userId}/status`,
            method: "PATCH",
            body: payload,
            secure: true,
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