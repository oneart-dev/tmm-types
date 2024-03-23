/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ControllersApiErrorResponse,
  ControllersApiSuccessResponse,
  ControllersDiscountResponse,
  ControllersTransactionCreateResponse,
  ControllersTransactionsListResponse,
  ControllersUnauthorizedResponse,
  DtoTransactionCreateForm,
  ServicesTransactionsListPagination,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Transactions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description List user transactions with pagination
   *
   * @tags transactions
   * @name TransactionsList
   * @summary List user transactions
   * @request GET:/transactions
   * @secure
   */
  transactionsList = (
    query?: {
      /** Page */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /** Descending order */
      sortDesc?: boolean;
      /** Items per page */
      itemsPerPage?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ServicesTransactionsListPagination,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/transactions`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description create new transaction. Only one transaction can be active at a time. If there is already active transaction return error. If redirect url is not empty you should follow the link to complete the transaction. (Stripe integration)
   *
   * @tags transactions
   * @name TransactionsUpdate
   * @summary create new transaction
   * @request PUT:/transactions
   * @secure
   */
  transactionsUpdate = (payload: DtoTransactionCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersTransactionCreateResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/transactions`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description If user has available discount, it will be returned here
   *
   * @tags transactions
   * @name DiscountList
   * @summary Discount data
   * @request GET:/transactions/discount
   * @secure
   */
  discountList = (
    query?: {
      /** Page */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /** Descending order */
      sortDesc?: boolean;
      /** Items per page */
      itemsPerPage?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersDiscountResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/transactions/discount`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List pending transactions. Pending transactions are transactions that are in pending(created) state, have not been processed yet and can be canceled by user.
   *
   * @tags transactions
   * @name PendingList
   * @summary List pending transactions
   * @request GET:/transactions/pending
   * @secure
   */
  pendingList = (
    query?: {
      /** Page */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /** Descending order */
      sortDesc?: boolean;
      /** Items per page */
      itemsPerPage?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersTransactionsListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/transactions/pending`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description once per account user can apply for 15 days trial by sending this request.
   *
   * @tags transactions
   * @name TrialUpdate
   * @summary apply for 15 days trial
   * @request PUT:/transactions/trial
   * @secure
   */
  trialUpdate = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/transactions/trial`,
        method: "PUT",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
