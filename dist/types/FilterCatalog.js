import { HttpClient } from "./http-client";
export class FilterCatalog extends HttpClient {
    constructor() {
        super(...arguments);
        this.filterCatalogList = (query, params = {}) => this.request({
            path: `/filter-catalog`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=FilterCatalog.js.map