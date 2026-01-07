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
   * @description Retrieves a paginated list of the user's transactions.
   *
   * @tags transactions
   * @name TransactionsList
   * @summary List User Transactions
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
   * @description Creates a new transaction. Only one transaction can be active at a time. If a redirect URL is returned, the user must navigate to it to complete the transaction (e.g., for Stripe payments).
   *
   * @tags transactions
   * @name TransactionsUpdate
   * @summary Create New Transaction
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
   * @description Retrieves information about any available discounts for the user.
   *
   * @tags transactions
   * @name DiscountList
   * @summary Get Discount Information
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
   * @description Retrieves a list of pending transactions that have not yet been processed and can be canceled by the user.
   *
   * @tags transactions
   * @name PendingList
   * @summary List Pending Transactions
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
   * @description Redirects the user to the Stripe billing portal. If the user is not subscribed, an empty string is returned.
   *
   * @tags transactions
   * @name RedirectList
   * @summary Redirect to Stripe Billing Portal
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
   * @description Disconnects the user's Stripe account.
   *
   * @tags transactions
   * @name StripeDelete
   * @summary Disconnect Stripe Account
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
   * @description Allows a user to apply for a 15-day trial, available once per account.
   *
   * @tags transactions
   * @name TrialUpdate
   * @summary Apply for 15-Day Trial
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
