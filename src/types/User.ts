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
  ServicesValidationErrorResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
