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
  ControllersLoadWidgetResponse,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Widget<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Loads a single widget's data for a public embed using a short URL code. No auth; permissive CORS so third-party pages can fetch cross-origin.
   *
   * @tags dashboard
   * @name PublicLoadDetail
   * @summary Load Public Widget
   * @request GET:/widget/public/{code}/load
   */
  publicLoadDetail = (code: string, params: RequestParams = {}) =>
    this.request<ControllersLoadWidgetResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/widget/public/${code}/load`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
