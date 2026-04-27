import { ContentType, HttpClient } from "./http-client";
export class Notes extends HttpClient {
    constructor() {
        super(...arguments);
        this.notesList = (query, params = {}) => this.request({
            path: `/notes`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
        this.notesCreate = (request, params = {}) => this.request({
            path: `/notes`,
            method: "POST",
            body: request,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.checkBucketList = (query, params = {}) => this.request({
            path: `/notes/check-bucket`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
        this.notesDetail = (id, params = {}) => this.request({
            path: `/notes/${id}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.notesDelete = (id, params = {}) => this.request({
            path: `/notes/${id}`,
            method: "DELETE",
            secure: true,
            ...params,
        });
        this.notesPartialUpdate = (id, request, params = {}) => this.request({
            path: `/notes/${id}`,
            method: "PATCH",
            body: request,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.restoreCreate = (id, params = {}) => this.request({
            path: `/notes/${id}/restore`,
            method: "POST",
            secure: true,
            ...params,
        });
    }
}
//# sourceMappingURL=Notes.js.map