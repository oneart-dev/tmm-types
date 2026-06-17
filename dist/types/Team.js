import { ContentType, HttpClient } from "./http-client";
export class Team extends HttpClient {
    constructor() {
        super(...arguments);
        this.teamList = (params = {}) => this.request({
            path: `/team`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
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
        this.chatRoomsDetail = (id, params = {}) => this.request({
            path: `/team/${id}/chat/rooms`,
            method: "GET",
            secure: true,
            ...params,
        });
        this.chatRoomsCreate = (id, body, params = {}) => this.request({
            path: `/team/${id}/chat/rooms`,
            method: "POST",
            body: body,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
        this.chatRoomsDetail2 = (id, roomId, query, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}`,
            method: "GET",
            query: query,
            secure: true,
            ...params,
        });
        this.chatRoomsDelete = (id, roomId, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        this.chatRoomsCommentCreate = (id, roomId, body, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/comment`,
            method: "POST",
            body: body,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
        this.chatRoomsCommentsDetail = (id, roomId, query, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/comments`,
            method: "GET",
            query: query,
            secure: true,
            ...params,
        });
        this.chatRoomsJoinCreate = (id, roomId, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/join`,
            method: "POST",
            secure: true,
            ...params,
        });
        this.chatRoomsLeaveCreate = (id, roomId, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/leave`,
            method: "POST",
            secure: true,
            ...params,
        });
        this.chatRoomsMembersDetail = (id, roomId, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/members`,
            method: "GET",
            secure: true,
            ...params,
        });
        this.chatRoomsMembersBanCreate = (id, roomId, userId, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/members/${userId}/ban`,
            method: "POST",
            secure: true,
            ...params,
        });
        this.chatRoomsMembersMuteCreate = (id, roomId, userId, body, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/members/${userId}/mute`,
            method: "POST",
            body: body,
            secure: true,
            ...params,
        });
        this.chatRoomsMembersRoleCreate = (id, roomId, userId, body, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/members/${userId}/role`,
            method: "POST",
            body: body,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
        this.chatRoomsMembersUnbanCreate = (id, roomId, userId, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/members/${userId}/unban`,
            method: "POST",
            secure: true,
            ...params,
        });
        this.chatRoomsMuteCreate = (id, roomId, body, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/mute`,
            method: "POST",
            body: body,
            secure: true,
            ...params,
        });
        this.chatRoomsSeenCreate = (id, roomId, params = {}) => this.request({
            path: `/team/${id}/chat/rooms/${roomId}/seen`,
            method: "POST",
            secure: true,
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
        this.widgetValuesDetail = (id, query, params = {}) => this.request({
            path: `/team/${id}/widget-values`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.widgetsDetail = (id, params = {}) => this.request({
            path: `/team/${id}/widgets`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.widgetsUpdate = (id, payload, params = {}) => this.request({
            path: `/team/${id}/widgets`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.widgetsDetail2 = (id, key, query, params = {}) => this.request({
            path: `/team/${id}/widgets/${key}`,
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