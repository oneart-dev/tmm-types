import { ControllersApiErrorResponse, ControllersApiSuccessServicesPublicAnnouncementDetail, ControllersApiWarningResponse, ControllersPublicAnnouncementsListResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Public<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    announcementsList: (query?: {
        limit?: number;
        offset?: number;
        lang?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersPublicAnnouncementsListResponse, ControllersApiErrorResponse>>;
    announcementsDetail: (slug: string, query?: {
        lang?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesPublicAnnouncementDetail, ControllersApiErrorResponse | ControllersApiWarningResponse>>;
}
//# sourceMappingURL=Public.d.ts.map