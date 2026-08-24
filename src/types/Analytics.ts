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

import { ControllersApiErrorResponse, ControllersApiSuccessArrayServicesActivationRow } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Analytics<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Weekly signup cohorts (verified users only) with the share that connected their first API key within 7 and 30 days. Rates are ratios in [0,1]. Admin only.
   *
   * @tags analytics, internal
   * @name ActivationList
   * @summary Weekly activation cohorts
   * @request GET:/analytics/activation
   * @secure
   */
  activationList = (
    query?: {
      /** Lookback in weeks, default 26, clamped to 104 */
      weeks?: number;
      /** Split each week by signup source */
      dimension?: "attribution_source";
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessArrayServicesActivationRow, ControllersApiErrorResponse>({
      path: `/analytics/activation`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
