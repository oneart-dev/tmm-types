import { HttpClient } from "./http-client";
export class Public extends HttpClient {
    constructor() {
        super(...arguments);
        this.announcementsList = (query, params = {}) => this.request({
            path: `/public/announcements`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        this.announcementsDetail = (slug, query, params = {}) => this.request({
            path: `/public/announcements/${slug}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Public.js.map