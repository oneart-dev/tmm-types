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
   * @description Retrieves UI data, which acts as a form of persistent local storage for the frontend.
   *
   * @tags ui-data
   * @name UiDataList
   * @summary Get UI Data
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
   * @description Saves UI data, which acts as a form of persistent local storage for the frontend.
   *
   * @tags ui-data
   * @name UiDataUpdate
   * @summary Save UI Data
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
