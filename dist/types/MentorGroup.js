import { ContentType, HttpClient } from "./http-client";
export class MentorGroup extends HttpClient {
    constructor() {
        super(...arguments);
        this.mentorGroupUpdate = (payload, params = {}) => this.request({
            path: `/mentor-group`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.mentorGroupList = (query, params = {}) => this.request({
            path: `/mentor-group/`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.activeList = (params = {}) => this.request({
            path: `/mentor-group/active`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.inviteDetail = (invite, params = {}) => this.request({
            path: `/mentor-group/invite/${invite}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.noteReadCreate = (tradeId, params = {}) => this.request({
            path: `/mentor-group/note/read/${tradeId}`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.noteCreate = (userId, tradeId, payload, params = {}) => this.request({
            path: `/mentor-group/note/${userId}/${tradeId}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.mentorGroupDetail = (id, params = {}) => this.request({
            path: `/mentor-group/${id}`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.mentorGroupCreate = (id, payload, params = {}) => this.request({
            path: `/mentor-group/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.mentorGroupDelete = (id, params = {}) => this.request({
            path: `/mentor-group/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.exitCreate = (id, params = {}) => this.request({
            path: `/mentor-group/${id}/exit`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.joinUpdate = (id, payload, params = {}) => this.request({
            path: `/mentor-group/${id}/join`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.mentorGroupCreate2 = (id, status, userId, params = {}) => this.request({
            path: `/mentor-group/${id}/${status}/${userId}`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=MentorGroup.js.map