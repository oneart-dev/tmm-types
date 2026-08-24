import { ControllersApiErrorResponse, ControllersApiSuccessControllersEmailPreferencesData, ControllersApiSuccessNoData, ControllersApiWarningResponse, ControllersUnauthorizedResponse, DtoEmailPreferencesForm } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Email<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    preferencesList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersEmailPreferencesData, ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    preferencesUpdate: (payload: DtoEmailPreferencesForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
    preferencesPublicList: (query: {
        token: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessControllersEmailPreferencesData, ControllersApiErrorResponse | ControllersApiWarningResponse>>;
    preferencesPublicUpdate: (query: {
        token: string;
    }, payload: DtoEmailPreferencesForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersApiWarningResponse>>;
    unsubscribeList: (query: {
        token: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<any, void | ControllersApiErrorResponse | ControllersApiWarningResponse>>;
    unsubscribeCreate: (query: {
        token: string;
        feed?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, ControllersApiErrorResponse | ControllersApiWarningResponse>>;
}
//# sourceMappingURL=Email.d.ts.map