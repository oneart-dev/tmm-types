import { ContentType, HttpClient } from "./http-client";
export class NoteCategories extends HttpClient {
    constructor() {
        super(...arguments);
        this.noteCategoriesList = (params = {}) => this.request({
            path: `/note-categories`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
        this.noteCategoriesCreate = (request, params = {}) => this.request({
            path: `/note-categories`,
            method: "POST",
            body: request,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.noteCategoriesDelete = (id, query, params = {}) => this.request({
            path: `/note-categories/${id}`,
            method: "DELETE",
            query: query,
            secure: true,
            ...params,
        });
        this.noteCategoriesPartialUpdate = (id, request, params = {}) => this.request({
            path: `/note-categories/${id}`,
            method: "PATCH",
            body: request,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=NoteCategories.js.map