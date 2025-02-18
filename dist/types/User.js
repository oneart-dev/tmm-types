import { HttpClient } from "./http-client";
export class User extends HttpClient {
    constructor() {
        super(...arguments);
        this.redeemCreate = (code, params = {}) => this.request({
            path: `/user/${code}/redeem`,
            method: "POST",
            format: "json",
            ...params,
        });
    }
}
//# sourceMappingURL=User.js.map