import { ControllersApiErrorResponse, ControllersApiSuccessNoData, ControllersContactBadRequestResponse, DtoContactForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Contact<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    contactCreate: (payload: DtoContactForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, string | ControllersApiErrorResponse | ControllersContactBadRequestResponse>>;
}
//# sourceMappingURL=Contact.d.ts.map