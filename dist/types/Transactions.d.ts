import { ControllersApiErrorResponse, ControllersApiSuccessResponse, ControllersDiscountResponse, ControllersTransactionCreateResponse, ControllersTransactionsListResponse, ControllersUnauthorizedResponse, DtoTransactionCreateForm, ServicesTransactionsListPagination } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Transactions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    transactionsList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ServicesTransactionsListPagination, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    transactionsUpdate: (payload: DtoTransactionCreateForm, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTransactionCreateResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    discountList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersDiscountResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    pendingList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersTransactionsListResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
    trialUpdate: (params?: RequestParams) => Promise<import("./http-client").HttpResponse<ControllersApiSuccessResponse, string | ControllersApiErrorResponse | ControllersUnauthorizedResponse>>;
}
//# sourceMappingURL=Transactions.d.ts.map