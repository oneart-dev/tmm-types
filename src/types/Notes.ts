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
  DtoUserNoteCreateForm,
  DtoUserNoteReorderForm,
  DtoUserNoteUpdateForm,
  ServicesUserNote,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Notes<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags notes
   * @name NotesList
   * @summary List notes
   * @request GET:/notes
   * @secure
   */
  notesList = (
    query?: {
      /** Filter: category id */
      category_id?: number;
      /** Filter: notes overlapping >= this date (YYYY-MM-DD) */
      from_date?: string;
      /** Filter: notes overlapping <= this date (YYYY-MM-DD) */
      to_date?: string;
      /** Filter: any of tag IDs */
      tag_ids?: number[];
      /** Free-text search across title + body. Tokens ≥3 chars use FULLTEXT (relevance-ranked, prefix-matched); shorter use LIKE. */
      q?: string;
      /** Page size (default 50, max 200) */
      limit?: number;
      /** Page offset */
      offset?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ServicesUserNote[], any>({
      path: `/notes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notes
   * @name NotesCreate
   * @summary Create note
   * @request POST:/notes
   * @secure
   */
  notesCreate = (request: DtoUserNoteCreateForm, params: RequestParams = {}) =>
    this.request<ServicesUserNote, any>({
      path: `/notes`,
      method: "POST",
      body: request,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Apply (category_id, order) to every note whose position changed in a single drag-drop drop. category_id may differ from the note's current value to support cross-category drag in the same call. Service validates ownership of every id + every target category.
   *
   * @tags notes
   * @name ReorderCreate
   * @summary Bulk reorder notes
   * @request POST:/notes/reorder
   * @secure
   */
  reorderCreate = (request: DtoUserNoteReorderForm, params: RequestParams = {}) =>
    this.request<void, ControllersApiErrorResponse>({
      path: `/notes/reorder`,
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
   * @name NotesDetail
   * @summary Read note
   * @request GET:/notes/{id}
   * @secure
   */
  notesDetail = (id: number, params: RequestParams = {}) =>
    this.request<ServicesUserNote, any>({
      path: `/notes/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags notes
   * @name NotesDelete
   * @summary Soft-delete note
   * @request DELETE:/notes/{id}
   * @secure
   */
  notesDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/notes/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags notes
   * @name NotesPartialUpdate
   * @summary Update note
   * @request PATCH:/notes/{id}
   * @secure
   */
  notesPartialUpdate = (id: number, request: DtoUserNoteUpdateForm, params: RequestParams = {}) =>
    this.request<ServicesUserNote, any>({
      path: `/notes/${id}`,
      method: "PATCH",
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
   * @name RestoreCreate
   * @summary Restore soft-deleted note
   * @request POST:/notes/{id}/restore
   * @secure
   */
  restoreCreate = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/notes/${id}/restore`,
      method: "POST",
      secure: true,
      ...params,
    });
}
