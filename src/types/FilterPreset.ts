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
  ControllersApiSuccessServicesFilterPreset,
  ControllersFilterPresetsListResponse,
  ControllersUnauthorizedResponse,
  DtoFilterPresetCreateForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FilterPreset<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieves a list of all saved filter presets for the user.
   *
   * @tags filter-preset
   * @name FilterPresetList
   * @summary List Filter Presets
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
   * @description Creates a new filter preset.
   *
   * @tags filter-preset
   * @name FilterPresetUpdate
   * @summary Create Filter Preset
   * @request PUT:/filter-preset
   * @secure
   */
  filterPresetUpdate = (payload: DtoFilterPresetCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesFilterPreset,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/filter-preset`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing filter preset.
   *
   * @tags filter-preset
   * @name FilterPresetCreate
   * @summary Update Filter Preset
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
   * @description Deletes a filter preset.
   *
   * @tags filter-preset
   * @name FilterPresetDelete
   * @summary Delete Filter Preset
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
