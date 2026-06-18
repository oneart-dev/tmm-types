import { HttpClient } from "./http-client";
export class Internal extends HttpClient {
    constructor() {
        super(...arguments);
        this.artifactsDetail = (version, arch, params = {}) => this.request({
            path: `/internal/artifacts/${version}/${arch}`,
            method: "GET",
            ...params,
        });
        this.artifactsManifestDetail = (version, arch, params = {}) => this.request({
            path: `/internal/artifacts/${version}/${arch}/manifest`,
            method: "GET",
            format: "json",
            ...params,
        });
        this.artifactsSha256Detail = (version, arch, params = {}) => this.request({
            path: `/internal/artifacts/${version}/${arch}/sha256`,
            method: "GET",
            ...params,
        });
    }
}
//# sourceMappingURL=Internal.js.map