import { ContentType, HttpClient } from "./http-client";
export class Team extends HttpClient {
    constructor() {
        super(...arguments);
        this.teamUpdate = (payload, params = {}) => this.request({
            path: `/team`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.teamDetail = (id, query, params = {}) => this.request({
            path: `/team/${id}`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.teamCreate = (id, payload, params = {}) => this.request({
            path: `/team/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.teamDelete = (id, params = {}) => this.request({
            path: `/team/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.joinUpdate = (id, payload, params = {}) => this.request({
            path: `/team/${id}/join`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.joinCreate = (id, userId, payload, params = {}) => this.request({
            path: `/team/${id}/join/${userId}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.membersDetail = (id, query, params = {}) => this.request({
            path: `/team/${id}/members`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.getTeam = (id, query, params = {}) => this.request({
            path: `/team/${id}/top`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Team.js.map