import { ControllersApiSuccessServicesUserPrefsPage, ControllersApiSuccessServicesUserPrefsWriteResult, ControllersUnauthorizedResponse, DtoUserPrefsForm, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class UiPrefs<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    uiPrefsList: (query?: {
        since?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesUserPrefsPage, string | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
    uiPrefsUpdate: (payload: DtoUserPrefsForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesUserPrefsWriteResult, string | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
}
//# sourceMappingURL=UiPrefs.d.ts.map