import { ControllersApiSuccessResponse, ControllersDiscountResponse, ControllersTransactionCreateResponse, ControllersTransactionsListResponse, DtoTransactionCreateForm, ServicesTransactionsListPagination } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";
export declare class Transactions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    transactionsList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ServicesTransactionsListPagination, any>>;
    transactionsUpdate: (payload: DtoTransactionCreateForm, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersTransactionCreateResponse, any>>;
    discountList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersDiscountResponse, any>>;
    pendingList: (query?: {
        page?: number;
        sortBy?: string;
        sortDesc?: boolean;
        itemsPerPage?: number;
    }, params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersTransactionsListResponse, any>>;
    trialUpdate: (params?: RequestParams) => Promise<import("axios").AxiosResponse<ControllersApiSuccessResponse, any>>;
}
//# sourceMappingURL=Transactions.d.ts.map