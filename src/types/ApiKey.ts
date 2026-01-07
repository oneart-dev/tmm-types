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
  ControllersApiSuccessArrayServicesApiKey,
  ControllersApiSuccessNoData,
  ControllersApiSuccessResponse,
  ControllersApiSuccessServicesApiKey,
  ControllersApiWarningResponse,
  ControllersUnauthorizedResponse,
  DtoApiKeyCreateForm,
  DtoApiKeyUpdateForm,
  DtoApiKeyUpdateNameForm,
  DtoBatchApiKeyCreateForm,
  ServicesApiKeysListPagination,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ApiKey<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Adds a new API key to the user's account.
   *
   * @tags api-key
   * @name ApiKeyUpdate
   * @summary Add New API Key
   * @request PUT:/api-key
   * @secure
   */
  apiKeyUpdate = (payload: DtoApiKeyCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesApiKey,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a paginated list of the current user's API keys.
   *
   * @tags api-key
   * @name ApiKeyList
   * @summary List API Keys with Pagination
   * @request GET:/api-key/
   * @secure
   */
  apiKeyList = (
    query?: {
      exchange_id?:
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 41
        | 8
        | 9
        | 10
        | 40
        | 46
        | 11
        | 21
        | 23
        | 24
        | 25
        | 12
        | 22
        | 13
        | 14
        | 15
        | 32
        | 33
        | 42
        | 43
        | 44
        | 45
        | 50;
      from_id?: number;
      frozen?: boolean;
      name?: string;
      not_frozen?: boolean;
      websocket_status?: (0 | 1 | 2 | 3 | 4)[];
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
    this.request<ServicesApiKeysListPagination, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/api-key/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Adds multiple API keys in a single batch request.
   *
   * @tags api-key
   * @name BatchUpdate
   * @summary Add API Keys in Batch
   * @request PUT:/api-key/batch
   * @secure
   */
  batchUpdate = (payload: DtoBatchApiKeyCreateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/api-key/batch`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a list of all API keys belonging to a specific user.
   *
   * @tags api-key
   * @name ListDetail
   * @summary List User's API Keys
   * @request GET:/api-key/list/{user_id}
   * @secure
   */
  listDetail = (userId: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayServicesApiKey,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key/list/${userId}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an API key. If the public or secret key is changed, the connection to the exchange will be reloaded. Changing the exchange_id is not supported.
   *
   * @tags api-key
   * @name ApiKeyCreate
   * @summary Update API Key
   * @request POST:/api-key/{id}
   * @secure
   */
  apiKeyCreate = (id: number, payload: DtoApiKeyUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/api-key/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Permanently deletes an API key and all associated trades and records.
   *
   * @tags api-key
   * @name ApiKeyDelete
   * @summary Delete API Key
   * @request DELETE:/api-key/{id}
   * @secure
   */
  apiKeyDelete = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Permanently disables an API key. A frozen key does not count towards the active connection limit. Free-tier users are limited to 3 frozen keys. This action is irreversible.
   *
   * @tags api-key
   * @name FreezeCreate
   * @summary Freeze API Key
   * @request POST:/api-key/{id}/freeze
   * @secure
   */
  freezeCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key/${id}/freeze`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Manually triggers an update for the API key's funding information.
   *
   * @tags api-key
   * @name FundingUpdateCreate
   * @summary Update API Key Funding
   * @request POST:/api-key/{id}/funding-update
   * @secure
   */
  fundingUpdateCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/api-key/${id}/funding-update`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Clones an API key to a new ID, moving all associated trades and updating all relations. This administrative action ensures no data loss but may be time-consuming.
   *
   * @tags api-key
   * @name MigrateToNewIdCreate
   * @summary Migrate API Key to New ID
   * @request POST:/api-key/{id}/migrate-to-new-id
   * @secure
   */
  migrateToNewIdCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key/${id}/migrate-to-new-id`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the name of an API key.
   *
   * @tags api-key
   * @name NameCreate
   * @summary Update API Key Name
   * @request POST:/api-key/{id}/name
   * @secure
   */
  nameCreate = (id: number, payload: DtoApiKeyUpdateNameForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/api-key/${id}/name`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Initiates a download of the orders archive if it hasn't been downloaded previously. This is an admin-only action, is not supported by all exchanges, and can take a significant amount of time.
   *
   * @tags api-key
   * @name OrdersArchiveCreate
   * @summary Force Download of Orders Archive
   * @request POST:/api-key/{id}/orders-archive
   * @secure
   */
  ordersArchiveCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key/${id}/orders-archive`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Resets and restores the API key's connection to the exchange.
   *
   * @tags api-key
   * @name RepairCreate
   * @summary Repair Exchange Connection
   * @request POST:/api-key/{id}/repair
   * @secure
   */
  repairCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key/${id}/repair`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Enables or disables the API key's connection to the exchange.
   *
   * @tags api-key
   * @name ToggleCreate
   * @summary Toggle Connection Status
   * @request POST:/api-key/{id}/toggle
   * @secure
   */
  toggleCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key/${id}/toggle`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Enables or disables the extended list of tickers, exclusively for the Binance SPOT exchange. Enabling this feature may significantly increase connection time.
   *
   * @tags api-key
   * @name ToggleExtendedCreate
   * @summary Toggle Extended Ticker List (Binance SPOT)
   * @request POST:/api-key/{id}/toggle-extended
   * @secure
   */
  toggleExtendedCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-key/${id}/toggle-extended`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Manually triggers an update for the API key's balance information.
   *
   * @tags api-key
   * @name UpdateBalanceCreate
   * @summary Update API Key Balance
   * @request POST:/api-key/{id}/update-balance
   * @secure
   */
  updateBalanceCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/api-key/${id}/update-balance`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
