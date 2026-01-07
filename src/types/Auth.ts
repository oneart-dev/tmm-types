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
   * @description Resends the account verification email if the previous link has expired or was not received.
   *
   * @tags auth
   * @name EmailResendCreate
   * @summary Request new verification link
   * @request POST:/auth/email/resend
   * @secure
   */
  emailResendCreate = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse>({
      path: `/auth/email/resend`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Triggers a password reset process by sending an email with a unique recovery link to the specified address.
   *
   * @tags auth
   * @name ForgotCreate
   * @summary Initiate password recovery
   * @request POST:/auth/forgot
   */
  forgotCreate = (payload: DtoPasswordResetCredentials, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ServicesValidationErrorResponse | ControllersApiErrorResponse>({
      path: `/auth/forgot`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Authenticates a user and returns a JWT token for API communication. The token expires in 1 hour if not refreshed.
   *
   * @tags auth
   * @name LoginCreate
   * @summary User Login
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
   * @description Logs the user out of the current session.
   *
   * @tags auth
   * @name LogoutCreate
   * @summary User Logout
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
   * @description Fetches the complete profile for the authenticated user, including API keys, trading categories, custom tags, public profile status, and active integrations (Telegram/Discord/Risk Management).
   *
   * @tags auth
   * @name GetAuth
   * @summary Retrieve account profile
   * @request GET:/auth/me
   * @secure
   */
  getAuth = (params: RequestParams = {}) =>
    this.request<ControllersMeSuccessResponse, ControllersUnauthorizedResponse>({
      path: `/auth/me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Generates a new JWT token to replace an existing, unexpired one.
   *
   * @tags auth
   * @name RefreshList
   * @summary Refresh JWT Token
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
   * @description Creates a new user profile and returns an initial JWT authentication token. Users must verify their email via the link sent to their inbox to gain full access.
   *
   * @tags auth
   * @name RegisterCreate
   * @summary Register a new user account
   * @request POST:/auth/register
   */
  registerCreate = (payload: DtoSignUpCredentials, params: RequestParams = {}) =>
    this.request<ControllersLoginSuccessResponse, ServicesValidationErrorResponse | ControllersApiErrorResponse>({
      path: `/auth/register`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Finalizes the password recovery process. Requires a valid token received via email and the new password.
   *
   * @tags auth
   * @name ResetCreate
   * @summary Complete password reset
   * @request POST:/auth/reset
   */
  resetCreate = (payload: DtoNewPasswordCredentials, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ServicesValidationErrorResponse | ControllersApiErrorResponse>({
      path: `/auth/reset`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Forcefully signs out the user from all connected devices and browsers by resetting the session security timestamp.
   *
   * @tags auth
   * @name SessionsResetCreate
   * @summary Invalidate all active sessions
   * @request POST:/auth/sessions-reset
   * @secure
   */
  sessionsResetCreate = (params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersApiErrorResponse>({
      path: `/auth/sessions-reset`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Validates the verification token sent via email. If requested via a browser (Accept: text/html), it redirects to the dashboard. If requested via API, it returns a JSON response. Link is valid for 1 hour.
   *
   * @tags auth
   * @name VerifyDetail
   * @summary Confirm account email
   * @request GET:/auth/verify/{user_id}/{token}
   */
  verifyDetail = (userId: number, token: string, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, void | ServicesValidationErrorResponse | ControllersApiErrorResponse>({
      path: `/auth/verify/${userId}/${token}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
