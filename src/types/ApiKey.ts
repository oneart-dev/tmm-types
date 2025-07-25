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
  ServicesApiKeysListPagination,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ApiKey<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Add new api key
   *
   * @tags api-key
   * @name ApiKeyUpdate
   * @summary add api key
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
   * @description List API keys with pagination
   *
   * @tags api-key
   * @name ApiKeyList
   * @summary List API keys
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
        | 45;
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
   * @description List API keys belongs to user
   *
   * @tags api-key
   * @name ListDetail
   * @summary List API keys belongs to user
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
   * @description Update api key. If key public or key secret changed will reload connection to the exchange Changing exchange_id do not supported
   *
   * @tags api-key
   * @name ApiKeyCreate
   * @summary update api key
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
   * @description Deleting api key will delete all trades and records associated with the api key
   *
   * @tags api-key
   * @name ApiKeyDelete
   * @summary delete api key
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
   * @description update api key balance
   *
   * @tags api-key
   * @name BalanceUpdateCreate
   * @summary update api key balance
   * @request POST:/api-key/{id}/balance-update
   * @secure
   */
  balanceUpdateCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/api-key/${id}/balance-update`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Freeze api key. If api key is frozen, then it will be disabled
   *
   * @tags api-key
   * @name FreezeCreate
   * @summary Freeze api key
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
   * @description update api key funding
   *
   * @tags api-key
   * @name FundingUpdateCreate
   * @summary update api key funding
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
   * @description Create new clone of api key with new id. All trades will be No data loss will occur. Available only for admin. Can take a long time.
   *
   * @tags api-key
   * @name MigrateToNewIdCreate
   * @summary migrate api key to new id
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
   * @description Simple endpoint to update api key name
   *
   * @tags api-key
   * @name NameCreate
   * @summary change name
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
   * @description If the orders archive is not downloaded, it will be downloaded again. Available only for admin and not all exchanges. Can take a long time.
   *
   * @tags api-key
   * @name OrdersArchiveCreate
   * @summary force download of orders archive
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
   * @description Drop and restore api key connection to the exchange
   *
   * @tags api-key
   * @name RepairCreate
   * @summary connection to exchange repair
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
   * @description Toggle connection status. If connection is active, then it will be disabled. If connection is disabled, then it will be enabled.
   *
   * @tags api-key
   * @name ToggleCreate
   * @summary Toggle connection status
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
   * @description Works only for Binance SPOT exchange. Toggle enables/disables extended list of tickers. If enabled connection time will be increased significantly.
   *
   * @tags api-key
   * @name ToggleExtendedCreate
   * @summary Toggle extended list of tickers
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
}
