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
  ControllersApiSuccessArrayServicesTransaction,
  ControllersApiSuccessResponse,
  ControllersApiSuccessServicesTransactionDiscount,
  ControllersApiSuccessString,
  ControllersTransactionCreateResponse,
  ControllersUnauthorizedResponse,
  DtoTransactionCreateForm,
  ServicesPaginationResponseArrayServicesTransaction,
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
      /**
       * @min 1
       * @example 1
       */
      page?: number;
      itemsPerPage?: number;
      sortBy?: string;
      sortDesc?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ServicesPaginationResponseArrayServicesTransaction,
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
  discountList = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesTransactionDiscount,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/transactions/discount`,
      method: "GET",
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
  pendingList = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayServicesTransaction,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/transactions/pending`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Redirect to Stripe billing portal. If user is not subscribed to Stripe, return empty string
   *
   * @tags transactions
   * @name RedirectList
   * @summary Redirect to Stripe billing portal
   * @request GET:/transactions/redirect
   * @secure
   */
  redirectList = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessString, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/transactions/redirect`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Disconnect stripe account
   *
   * @tags transactions
   * @name StripeDelete
   * @summary Disconnect stripe account
   * @request DELETE:/transactions/stripe
   * @secure
   */
  stripeDelete = (
    query: {
      /** User id */
      user_id: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/transactions/stripe`,
        method: "DELETE",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
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
