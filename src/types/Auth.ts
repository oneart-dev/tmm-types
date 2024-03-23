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
  ControllersLoginSuccessResponse,
  ControllersMeSuccessResponse,
  ControllersRefreshSuccessResponse,
  ControllersUnauthorizedResponse,
  DtoLoginCredentials,
  DtoNewPasswordCredentials,
  DtoPasswordResetCredentials,
  DtoSignUpCredentials,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description In case link expired or email lost user can request new verification email
   *
   * @tags auth
   * @name EmailResendCreate
   * @summary Resend verification email
   * @request POST:/auth/email/resend
   * @secure
   */
  emailResendCreate = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string>({
      path: `/auth/email/resend`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Request reset email with link to change password
   *
   * @tags auth
   * @name ForgotCreate
   * @summary Reset password request
   * @request POST:/auth/forgot
   */
  forgotCreate = (payload: DtoPasswordResetCredentials, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ServicesValidationErrorResponse | string | ControllersApiErrorResponse>(
      {
        path: `/auth/forgot`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description get JWT token to communicate with API. Expires in 1 hour if not refreshed
   *
   * @tags auth
   * @name LoginCreate
   * @summary User login
   * @request POST:/auth/login
   */
  loginCreate = (payload: DtoLoginCredentials, params: RequestParams = {}) =>
    this.request<
      ControllersLoginSuccessResponse,
      ServicesValidationErrorResponse | ControllersUnauthorizedResponse | string
    >({
      path: `/auth/login`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description User logout
   *
   * @tags auth
   * @name LogoutCreate
   * @summary User logout
   * @request POST:/auth/logout
   */
  logoutCreate = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string>({
      path: `/auth/logout`,
      method: "POST",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Endpoint to get full information about account
   *
   * @tags auth
   * @name GetAuth
   * @summary Get my account info
   * @request GET:/auth/me
   * @secure
   */
  getAuth = (params: RequestParams = {}) =>
    this.request<ControllersMeSuccessResponse, void | string>({
      path: `/auth/me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Generate new token to replace exist one
   *
   * @tags auth
   * @name RefreshList
   * @summary Refresh JWT token
   * @request GET:/auth/refresh
   * @secure
   */
  refreshList = (params: RequestParams = {}) =>
    this.request<ControllersRefreshSuccessResponse, ControllersUnauthorizedResponse | string>({
      path: `/auth/refresh`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Create new user and obtain JWT token. User have to confirm account by following the link in the email
   *
   * @tags auth
   * @name RegisterCreate
   * @summary Register new user
   * @request POST:/auth/register
   */
  registerCreate = (payload: DtoSignUpCredentials, params: RequestParams = {}) =>
    this.request<
      ControllersLoginSuccessResponse,
      ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/auth/register`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description After getting token from email user able to change password by providing token
   *
   * @tags auth
   * @name ResetCreate
   * @summary Change password
   * @request POST:/auth/reset
   */
  resetCreate = (payload: DtoNewPasswordCredentials, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ServicesValidationErrorResponse | string | ControllersApiErrorResponse>(
      {
        path: `/auth/reset`,
        method: "POST",
        body: payload,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Link from verification email point to this endpoint. Link valid for 1 hour If header "Accept" is "application/json" then response is json Overwise response is redirect `301` to dashboard
   *
   * @tags auth
   * @name VerifyDetail
   * @summary Verify email
   * @request GET:/auth/verify/{user_id}/{token}
   */
  verifyDetail = (token: number, userId: string, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/auth/verify/${userId}/${token}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
