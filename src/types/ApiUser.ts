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
