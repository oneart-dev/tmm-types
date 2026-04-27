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
  ControllersUnauthorizedResponse,
  DtoNoteCategoryForm,
  DtoNoteCategoryReorderForm,
  ServicesNoteCategory,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NoteCategories<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags notes
   * @name NoteCategoriesList
   * @summary List note categories
   * @request GET:/note-categories
   * @secure
   */
  noteCategoriesList = (params: RequestParams = {}) =>
    this.request<ServicesNoteCategory[], ControllersUnauthorizedResponse>({
      path: `/note-categories`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notes
   * @name NoteCategoriesCreate
   * @summary Create note category
   * @request POST:/note-categories
   * @secure
   */
  noteCategoriesCreate = (request: DtoNoteCategoryForm, params: RequestParams = {}) =>
    this.request<ServicesNoteCategory, ControllersApiErrorResponse>({
      path: `/note-categories`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Apply (parent_id, order) to every category whose position changed in a single drag-drop drop. parent_id=null means root level. Service validates ownership of every id + every target parent and rejects payloads that would create a cycle.
   *
   * @tags notes
   * @name ReorderCreate
   * @summary Bulk reorder note categories
   * @request POST:/note-categories/reorder
   * @secure
   */
  reorderCreate = (request: DtoNoteCategoryReorderForm, params: RequestParams = {}) =>
    this.request<void, ControllersApiErrorResponse>({
      path: `/note-categories/reorder`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags notes
   * @name NoteCategoriesDelete
   * @summary Delete note category
   * @request DELETE:/note-categories/{id}
   * @secure
   */
  noteCategoriesDelete = (
    id: number,
    query?: {
      /** move_to_parent | cascade | move_notes_to */
      on_children?: string;
      /** Target category id when on_children=move_notes_to */
      move_to?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/note-categories/${id}`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags notes
   * @name NoteCategoriesPartialUpdate
   * @summary Update note category
   * @request PATCH:/note-categories/{id}
   * @secure
   */
  noteCategoriesPartialUpdate = (id: number, request: DtoNoteCategoryForm, params: RequestParams = {}) =>
    this.request<ServicesNoteCategory, any>({
      path: `/note-categories/${id}`,
      method: "PATCH",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
