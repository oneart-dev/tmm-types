import { ContentType, HttpClient } from "./http-client";
export class Board extends HttpClient {
    constructor() {
        super(...arguments);
        this.boardList = (params = {}) => this.request({
            path: `/board`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.boardUpdate = (payload, params = {}) => this.request({
            path: `/board`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.counterDashboardDetail = (id, query, params = {}) => this.request({
            path: `/board/counter/dashboard/${id}`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.counterWidgetDetail = (id, query, params = {}) => this.request({
            path: `/board/counter/widget/${id}`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.publicLoadDetail = (id, code, params = {}) => this.request({
            path: `/board/public/${code}/load`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.sortCreate = (payload, params = {}) => this.request({
            path: `/board/sort`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.widgetTempCreate = (payload, params = {}) => this.request({
            path: `/board/widget-temp`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.widgetUpdate = (id, payload, params = {}) => this.request({
            path: `/board/widget/${id}`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.widgetCreate = (id, payload, params = {}) => this.request({
            path: `/board/widget/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.widgetDelete = (id, params = {}) => this.request({
            path: `/board/widget/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.boardCreate = (id, payload, params = {}) => this.request({
            path: `/board/${id}`,
            method: "POST",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.boardDelete = (id, params = {}) => this.request({
            path: `/board/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.cloneCreate = (id, params = {}) => this.request({
            path: `/board/${id}/clone`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.loadDetail = (id, params = {}) => this.request({
            path: `/board/${id}/load`,
            method: "GET",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.shortLinkCreate = (id, params = {}) => this.request({
            path: `/board/${id}/short-link`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Board.js.map