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
   * @description Create api key
   *
   * @tags api-user
   * @name ApiUserUpdate
   * @summary Create api key
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
   * @description List of all api keys
   *
   * @tags api-user
   * @name ApiUserList
   * @summary List of all api keys
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
   * @description Delete api key
   *
   * @tags risk-management
   * @name ApiUserDelete
   * @summary Delete api key
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
