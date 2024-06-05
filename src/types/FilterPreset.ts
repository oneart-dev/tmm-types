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
  ControllersFilterPresetsListResponse,
  ControllersUnauthorizedResponse,
  DtoFilterPresetCreateForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FilterPreset<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description List filter presets
   *
   * @tags filter-preset
   * @name FilterPresetList
   * @summary List filter presets
   * @request GET:/filter-preset
   * @secure
   */
  filterPresetList = (params: RequestParams = {}) =>
    this.request<
      ControllersFilterPresetsListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/filter-preset`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Create filter preset
   *
   * @tags filter-preset
   * @name FilterPresetUpdate
   * @summary Create filter preset
   * @request PUT:/filter-preset
   * @secure
   */
  filterPresetUpdate = (payload: DtoFilterPresetCreateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/filter-preset`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Create filter preset
   *
   * @tags filter-preset
   * @name FilterPresetCreate
   * @summary Create filter preset
   * @request POST:/filter-preset/{id}
   * @secure
   */
  filterPresetCreate = (id: string, payload: DtoFilterPresetCreateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/filter-preset/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Delete filter preset
   *
   * @tags filter-preset
   * @name FilterPresetDelete
   * @summary Delete filter preset
   * @request DELETE:/filter-preset/{id}
   * @secure
   */
  filterPresetDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/filter-preset/${id}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
