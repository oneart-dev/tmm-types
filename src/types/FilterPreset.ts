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
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FilterPreset<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Delete filter preset
   *
   * @tags filter-preset
   * @name FilterPresetUpdate
   * @summary Delete filter preset
   * @request PUT:/filter-preset
   * @secure
   */
  filterPresetUpdate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/filter-preset`,
        method: "PUT",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
