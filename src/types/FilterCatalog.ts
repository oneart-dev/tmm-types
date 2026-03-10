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
  ControllersApiSuccessServicesFilterCatalogPayload,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class FilterCatalog<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns the shared filter catalog contract for the authenticated user or an accessible mentor subject. Use subject_user_id to load another accessible user.
   *
   * @tags auth
   * @name FilterCatalogList
   * @summary Retrieve filter catalog
   * @request GET:/filter-catalog
   * @secure
   */
  filterCatalogList = (
    query?: {
      /** Accessible subject user id */
      subject_user_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessServicesFilterCatalogPayload,
      ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/filter-catalog`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
