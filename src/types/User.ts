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
   * @description Get oauth2 token
   *
   * @tags users
   * @name Oauth2Create
   * @summary Get oauth2 token
   * @request POST:/user/oauth2
   * @secure
   */
  oauth2Create = (
    query?: {
      /** only code is supported */
      response_type?: string;
      /** client id */
      client_id?: string;
      /** redirect uri */
      redirect_uri?: string;
      /** state */
      state?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessString,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/user/oauth2`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Redeem promo code
   *
   * @tags auth
   * @name RedeemCreate
   * @summary Redeem promo code
   * @request POST:/user/{code}/redeem
   */
  redeemCreate = (code: string, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      void | ServicesValidationErrorResponse | string | ControllersApiErrorResponse
    >({
      path: `/user/${code}/redeem`,
      method: "POST",
      format: "json",
      ...params,
    });
}
