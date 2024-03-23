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
  ControllersApiWarningResponse,
  ControllersFilesResponse,
  ControllersUnauthorizedResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Files<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Upload images. Image should belong to model with owner type and owner id.
   *
   * @tags files
   * @name UploadImageCreate
   * @summary Upload images
   * @request POST:/files/upload/image/{model}/{id}
   * @secure
   */
  uploadImageCreate = (model: string, id: number, params: RequestParams = {}) =>
    this.request<ControllersFilesResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/files/upload/image/${model}/${id}`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete file
   *
   * @tags files
   * @name FilesDelete
   * @summary Delete file
   * @request DELETE:/files/{model}/{id}
   * @secure
   */
  filesDelete = (id: number, type: string, model: string, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/files/${model}/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
