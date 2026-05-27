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
   * @description Uploads one or more images and associates them with a specified model by owner type and ID.
   *
   * @tags files
   * @name UploadImageCreate
   * @summary Upload Images
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
   * @description Deletes a pending temp file the caller uploaded. Caller must own (user_id) and the file must still be unbound (model_id=0, expires_at NOT NULL). For files already adopted onto an entity, use the regular DELETE /files/:ownerType/:id route.
   *
   * @tags files
   * @name UploadTempDelete
   * @summary Delete Temp File
   * @request DELETE:/files/upload/temp/{id}
   * @secure
   */
  uploadTempDelete = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersApiWarningResponse | ControllersUnauthorizedResponse | ControllersApiErrorResponse
    >({
      path: `/files/upload/temp/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Uploads one or more images and stores them as TEMP rows under the given intent (eventual FileOwnerType). The owning entity does not have to exist yet — temp rows are stored with model_id=0 and expires_at=NOW()+1h. Pass the returned file IDs in the create-form payload of the target entity; the create handler calls AdoptTempFiles to atomically bind them. Unclaimed temp rows are GC'd by the files:purge-temp cron every 5 minutes.
   *
   * @tags files
   * @name UploadTempCreate
   * @summary Upload Temp Images
   * @request POST:/files/upload/temp/{intent}
   * @secure
   */
  uploadTempCreate = (intent: string, params: RequestParams = {}) =>
    this.request<
      ControllersFilesResponse,
      ControllersApiWarningResponse | ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/files/upload/temp/${intent}`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a file based on its owner type and ID.
   *
   * @tags files
   * @name FilesDelete
   * @summary Delete File
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
