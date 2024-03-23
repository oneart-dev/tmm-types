import { ContentType, HttpClient } from "./http-client";
export class Files extends HttpClient {
    constructor() {
        super(...arguments);
        this.uploadImageCreate = (model, id, params = {}) => this.request({
            path: `/files/upload/image/${model}/${id}`,
            method: "POST",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.filesDelete = (id, type, model, params = {}) => this.request({
            path: `/files/${model}/${id}`,
            method: "DELETE",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Files.js.map