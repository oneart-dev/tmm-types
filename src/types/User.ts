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
  ControllersApiSuccessNoData,
  ControllersApiSuccessString,
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Generates a temporary authorization code for third-party integration. This code can be exchanged for an API key.
   *
   * @tags users
   * @name Oauth2Create
   * @summary Initiate OAuth2 authorization flow
   * @request POST:/user/oauth2
   * @secure
   */
  oauth2Create = (
    query: {
      /** Response type (only 'code' supported) */
      response_type?: string;
      /** Client ID assigned to the 3rd party service */
      client_id: string;
      /** Authorized redirect URL */
      redirect_uri?: string;
      /** Anti-forgery state token */
      state?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessString, ServicesValidationErrorResponse>({
      path: `/user/oauth2`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Redeems a promotional code to activate specific features, membership levels, or bonuses. Validates expiration and usage limits.
   *
   * @tags auth
   * @name RedeemCreate
   * @summary Apply promotional code
   * @request POST:/user/{code}/redeem
   */
  redeemCreate = (code: string, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessNoData, ServicesValidationErrorResponse | ControllersApiErrorResponse>({
      path: `/user/${code}/redeem`,
      method: "POST",
      format: "json",
      ...params,
    });
}
