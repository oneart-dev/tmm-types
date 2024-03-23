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
  ControllersUIDataResponse,
  ControllersUnauthorizedResponse,
  DtoUIData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UiData<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Its the form of persistent local storage
   *
   * @tags ui-data
   * @name UiDataList
   * @summary UI data getter
   * @request GET:/ui-data
   * @secure
   */
  uiDataList = (params: RequestParams = {}) =>
    this.request<ControllersUIDataResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/ui-data`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Save local storage data
   *
   * @tags ui-data
   * @name UiDataUpdate
   * @summary Save UI data
   * @request PUT:/ui-data
   * @secure
   */
  uiDataUpdate = (payload: DtoUIData, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/ui-data`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
