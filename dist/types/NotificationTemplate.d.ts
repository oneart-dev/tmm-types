import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersApiSuccessServicesNotificationTemplate, ControllersApiWarningResponse, ControllersUnauthorizedResponse, DtoNotificationTemplateCreateForm, DtoNotificationTemplateUpdateForm, ServicesPaginationResponseArrayServicesNotificationTemplate } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class NotificationTemplate<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    notificationTemplateList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
        name?: string;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesPaginationResponseArrayServicesNotificationTemplate, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    notificationTemplateUpdate: (payload: DtoNotificationTemplateCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesNotificationTemplate, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    notificationTemplateCreate: (id: number, payload: DtoNotificationTemplateUpdateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    notificationTemplateDelete: (id: number, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersApiWarningResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=NotificationTemplate.d.ts.map