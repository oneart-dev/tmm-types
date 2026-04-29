import { ContentType, HttpClient } from "./http-client";
export class Transcribe extends HttpClient {
    constructor() {
        super(...arguments);
        this.transcribeCreate = (data, params = {}) => this.request({
            path: `/transcribe`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.FormData,
            format: "json",
            ...params,
        });
        this.usageList = (params = {}) => this.request({
            path: `/transcribe/usage`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Transcribe.js.map