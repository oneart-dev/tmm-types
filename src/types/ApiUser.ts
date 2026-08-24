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
  ControllersApiSuccessControllersApiUserNewsTokenData,
  ControllersApiSuccessResponse,
  ControllersApiUsersListResponse,
  ControllersUnauthorizedResponse,
  DtoApiUserUpdateForm,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ApiUser<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new API user.
   *
   * @tags api-user
   * @name ApiUserUpdate
   * @summary Create API User
   * @request PUT:/api-user
   * @secure
   */
  apiUserUpdate = (payload: DtoApiUserUpdateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ServicesValidationErrorResponse | ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-user`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a list of all API users associated with the current user.
   *
   * @tags api-user
   * @name ApiUserList
   * @summary List All API Users
   * @request GET:/api-user/
   * @secure
   */
  apiUserList = (params: RequestParams = {}) =>
    this.request<
      ControllersApiUsersListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/api-user/`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Mints (or returns the existing) read-only, MCP-only API token for the current user. Available to every verified user. The token is scoped to the /api/v2/mcp endpoint only and is rejected on every other REST route. Idempotent — one MCP token per user.
   *
   * @tags api-user
   * @name PutApiUser
   * @summary Create MCP Token
   * @request PUT:/api-user/mcp
   * @secure
   */
  putApiUser = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/api-user/mcp`,
        method: "PUT",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Mints (or returns the existing) news/i18n machine token for the current user and returns its value. ADMIN ONLY. The token is fenced by ApiKeyAuthMiddleware to the /api/v2/admin/notifications surface, and within it to reads, the draft create and the merge-only translations PUT — publish, the destructive full update and delete are all rejected with 403. Idempotent — one news token per user.
   *
   * @tags api-user
   * @name NewsUpdate
   * @summary Create news/i18n Token
   * @request PUT:/api-user/news
   * @secure
   */
  newsUpdate = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessControllersApiUserNewsTokenData,
      ControllersUnauthorizedResponse | ControllersApiErrorResponse | string
    >({
      path: `/api-user/news`,
      method: "PUT",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes an API user.
   *
   * @tags api-user
   * @name ApiUserDelete
   * @summary Delete API User
   * @request DELETE:/api-user/{id}
   * @secure
   */
  apiUserDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/api-user/${id}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
