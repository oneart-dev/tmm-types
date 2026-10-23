import { ControllersApiSuccessNoData, ControllersApiWarningResponse, ControllersUnauthorizedResponse, DtoClientErrorForm, ServicesValidationErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class ClientErrors<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    clientErrorsCreate: (payload: DtoClientErrorForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessNoData, string | ControllersApiWarningResponse | ControllersUnauthorizedResponse | ServicesValidationErrorResponse>>;
}
//# sourceMappingURL=ClientErrors.d.ts.map