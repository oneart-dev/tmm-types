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
