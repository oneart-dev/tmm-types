import { ContentType, HttpClient } from "./http-client";
export class Transactions extends HttpClient {
    constructor() {
        super(...arguments);
        this.transactionsList = (query, params = {}) => this.request({
            path: `/transactions`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.transactionsUpdate = (payload, params = {}) => this.request({
            path: `/transactions`,
            method: "PUT",
            body: payload,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.discountList = (query, params = {}) => this.request({
            path: `/transactions/discount`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.pendingList = (query, params = {}) => this.request({
            path: `/transactions/pending`,
            method: "GET",
            query: query,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
        this.trialUpdate = (params = {}) => this.request({
            path: `/transactions/trial`,
            method: "PUT",
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=Transactions.js.map