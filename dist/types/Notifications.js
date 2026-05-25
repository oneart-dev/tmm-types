import { ContentType, HttpClient } from "./http-client";
export class Notifications extends HttpClient {
    constructor() {
        super(...arguments);
        this.notificationsList = (query, params = {}) => this.request({
            path: `/notifications`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
        this.commentsCreate = (id, payload, params = {}) => this.request({
            path: `/notifications/${id}/comments`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
        this.commentsUpdate = (id, cid, payload, params = {}) => this.request({
            path: `/notifications/${id}/comments/${cid}`,
            method: "PUT",
            body: payload,
            type: ContentType.Json,
            ...params,
        });
        this.commentsDelete = (id, cid, params = {}) => this.request({
            path: `/notifications/${id}/comments/${cid}`,
            method: "DELETE",
            ...params,
        });
        this.commentsImageCreate = (id, cid, data, params = {}) => this.request({
            path: `/notifications/${id}/comments/${cid}/image`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.FormData,
            ...params,
        });
        this.likeCreate = (id, params = {}) => this.request({
            path: `/notifications/${id}/like`,
            method: "POST",
            secure: true,
            ...params,
        });
        this.seenCreate = (id, params = {}) => this.request({
            path: `/notifications/${id}/seen`,
            method: "POST",
            secure: true,
            ...params,
        });
        this.voteCreate = (id, payload, params = {}) => this.request({
            path: `/notifications/${id}/vote`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
    }
}
//# sourceMappingURL=Notifications.js.map