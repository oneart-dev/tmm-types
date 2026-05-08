import { ContentType, HttpClient } from "./http-client";
export class Chat extends HttpClient {
    constructor() {
        super(...arguments);
        this.threadsList = (query, params = {}) => this.request({
            path: `/chat/threads`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
        this.threadsCreate = (request, params = {}) => this.request({
            path: `/chat/threads`,
            method: "POST",
            body: request,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.threadsDetail = (uid, params = {}) => this.request({
            path: `/chat/threads/${uid}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.threadsDelete = (uid, params = {}) => this.request({
            path: `/chat/threads/${uid}`,
            method: "DELETE",
            secure: true,
            format: "json",
            ...params,
        });
        this.threadsMessagesCreate = (uid, request, params = {}) => this.request({
            path: `/chat/threads/${uid}/messages`,
            method: "POST",
            body: request,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.threadsProfileRebuildCreate = (uid, params = {}) => this.request({
            path: `/chat/threads/${uid}/profile/rebuild`,
            method: "POST",
            secure: true,
            format: "json",
            ...params,
        });
        this.threadsTurnsRequestsDetail = (uid, idx, params = {}) => this.request({
            path: `/chat/threads/${uid}/turns/${idx}/requests`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.usageList = (params = {}) => this.request({
            path: `/chat/usage`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Chat.js.map