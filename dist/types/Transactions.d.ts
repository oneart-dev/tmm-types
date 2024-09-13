import { ControllersApiErrorResponse, ControllersApiSuccessArrayServicesTransaction, ControllersApiSuccessResponse, ControllersApiSuccessServicesTransactionDiscount, ControllersApiSuccessString, ControllersTransactionCreateResponse, ControllersUnauthorizedResponse, DtoTransactionCreateForm, ServicesPaginationResponseArrayServicesTransaction } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Transactions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    transactionsList: (query?: {
        page?: number;
        itemsPerPage?: number;
        sortBy?: string;
        sortDesc?: boolean;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesPaginationResponseArrayServicesTransaction, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    transactionsUpdate: (payload: DtoTransactionCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTransactionCreateResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    discountList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessServicesTransactionDiscount, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    pendingList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessArrayServicesTransaction, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    redirectList: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessString, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    stripeDelete: (query: {
        user_id: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    trialUpdate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Transactions.d.ts.map