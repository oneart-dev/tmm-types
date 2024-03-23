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
  ControllersDashboardCreateResponse,
  ControllersDashboardListResponse,
  ControllersLoadBoardResponse,
  ControllersShortUrlResponse,
  ControllersUnauthorizedResponse,
  DtoDashboardCreateForm,
  DtoDashboardUpdateForm,
  DtoDashboardsSortForm,
  DtoWidgetCreateForm,
  DtoWidgetUpdateForm,
  ServicesWidgetCreateResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Board<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Dashboard list include widgets attached to dashboard
   *
   * @tags dashboard
   * @name BoardList
   * @summary Dashboards list
   * @request GET:/board
   * @secure
   */
  boardList = (params: RequestParams = {}) =>
    this.request<
      ControllersDashboardListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/board`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Create new dashboard
   *
   * @tags dashboard
   * @name BoardUpdate
   * @summary add dashboard
   * @request PUT:/board
   * @secure
   */
  boardUpdate = (payload: DtoDashboardCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersDashboardCreateResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/board`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returning count of trades with supplied new filters
   *
   * @tags dashboard
   * @name CounterDashboardDetail
   * @summary Get trades count for dashboard
   * @request GET:/board/counter/dashboard/{id}
   * @secure
   */
  counterDashboardDetail = (
    id: number,
    query?: {
      /** Trade ID */
      id?: number;
      /** Trade IDs */
      ids?: number[];
      /** Api key id */
      api_key_id?: number[];
      /** Entry reason tag id */
      tags?: number[];
      /**
       * Trade time based on open time or close time
       * @default "open_time"
       */
      trade_time?: string;
      /** Date period based on trade_time variable */
      durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
      /**
       * trade entry date
       * @example ""2019-01-01,2019-01-31""
       */
      openBetween?: string;
      /**
       * trade exit date
       * @example ""2019-01-01,2019-01-31""
       */
      closeBetween?: string;
      /**
       * trade percent
       * @example ""1,2.5""
       */
      percentBetween?: string;
      /**
       * trade net profit
       * @example ""100,2500""
       */
      profitBetween?: string;
      /**
       * trade duration in milliseconds. Example: '1,60000' 1 minute max
       * @example ""1000,60000""
       */
      durationBetween?: string;
      /**
       * trade leverage. Example: '0.5,3.5' from 0.5x to 3.5x
       * @example ""0.5,3.5""
       */
      leverageBetween?: string;
      /** trade side */
      side?: "SHORT" | "LONG";
      /** User ID. Only available for mentors to see students trades */
      user_id?: string;
      /** Category ID (1 - Archive) */
      category_id?: number;
      /** Trade Volume from */
      volumeFrom?: number;
      /** Trade Volume to */
      volumeTo?: number;
      /** Days of week 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday */
      daysOfWeek?: number[];
      /** trade ticker */
      symbol?: string[];
      /** trade extra info filled by user */
      extraInfo?:
        | "conclusion:empty"
        | "conclusion:not-empty"
        | "desc:empty"
        | "desc:not-empty"
        | "mentor_note:not-empty"
        | "mentor_note:empty";
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/board/counter/dashboard/${id}`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Returning count of trades with supplied new filters and dashboard filters as default
   *
   * @tags dashboard
   * @name CounterWidgetDetail
   * @summary Get trades count for widget
   * @request GET:/board/counter/widget/{id}
   * @secure
   */
  counterWidgetDetail = (
    id: number,
    query?: {
      /** Trade ID */
      id?: number;
      /** Trade IDs */
      ids?: number[];
      /** Api key id */
      api_key_id?: number[];
      /** Entry reason tag id */
      tags?: number[];
      /**
       * Trade time based on open time or close time
       * @default "open_time"
       */
      trade_time?: string;
      /** Date period based on trade_time variable */
      durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
      /**
       * trade entry date
       * @example ""2019-01-01,2019-01-31""
       */
      openBetween?: string;
      /**
       * trade exit date
       * @example ""2019-01-01,2019-01-31""
       */
      closeBetween?: string;
      /**
       * trade percent
       * @example ""1,2.5""
       */
      percentBetween?: string;
      /**
       * trade net profit
       * @example ""100,2500""
       */
      profitBetween?: string;
      /**
       * trade duration in milliseconds. Example: '1,60000' 1 minute max
       * @example ""1000,60000""
       */
      durationBetween?: string;
      /**
       * trade leverage. Example: '0.5,3.5' from 0.5x to 3.5x
       * @example ""0.5,3.5""
       */
      leverageBetween?: string;
      /** trade side */
      side?: "SHORT" | "LONG";
      /** User ID. Only available for mentors to see students trades */
      user_id?: string;
      /** Category ID (1 - Archive) */
      category_id?: number;
      /** Trade Volume from */
      volumeFrom?: number;
      /** Trade Volume to */
      volumeTo?: number;
      /** Days of week 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday */
      daysOfWeek?: number[];
      /** trade ticker */
      symbol?: string[];
      /** trade extra info filled by user */
      extraInfo?:
        | "conclusion:empty"
        | "conclusion:not-empty"
        | "desc:empty"
        | "desc:not-empty"
        | "mentor_note:not-empty"
        | "mentor_note:empty";
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/board/counter/widget/${id}`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Load all dashboard widgets in bulk
   *
   * @tags dashboard
   * @name PublicLoadDetail
   * @summary Load widgets in bulk
   * @request GET:/board/public/{code}/load
   */
  publicLoadDetail = (id: number, code: string, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/board/public/${code}/load`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Send list of dashboard ids with order to update dashboard order
   *
   * @tags dashboard
   * @name SortCreate
   * @summary Sort dashboards
   * @request POST:/board/sort
   * @secure
   */
  sortCreate = (payload: DtoDashboardsSortForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/board/sort`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Load widget without creating or saving. Using for preview
   *
   * @tags dashboard
   * @name WidgetTempCreate
   * @summary load widget without creating or saving
   * @request POST:/board/widget-temp
   * @secure
   */
  widgetTempCreate = (payload: DtoWidgetCreateForm, params: RequestParams = {}) =>
    this.request<ServicesWidgetCreateResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/board/widget-temp`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Create new widget attached to dashboard by ID
   *
   * @tags dashboard
   * @name WidgetUpdate
   * @summary add widget to dashboard
   * @request PUT:/board/widget/{id}
   * @secure
   */
  widgetUpdate = (id: number, payload: DtoWidgetCreateForm, params: RequestParams = {}) =>
    this.request<ServicesWidgetCreateResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/board/widget/${id}`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Widget update
   *
   * @tags dashboard
   * @name WidgetCreate
   * @summary Widget update
   * @request POST:/board/widget/{id}
   * @secure
   */
  widgetCreate = (id: number, payload: DtoWidgetUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/board/widget/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Delete widget
   *
   * @tags dashboard
   * @name WidgetDelete
   * @summary Delete widget
   * @request DELETE:/board/widget/{id}
   * @secure
   */
  widgetDelete = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | void | string | ControllersApiErrorResponse
    >({
      path: `/board/widget/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update dashboard
   *
   * @tags dashboard
   * @name BoardCreate
   * @summary Update dashboard
   * @request POST:/board/{id}
   * @secure
   */
  boardCreate = (id: number, payload: DtoDashboardUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/board/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Delete dashboard and all widgets attached to it
   *
   * @tags dashboard
   * @name BoardDelete
   * @summary Delete dashboard
   * @request DELETE:/board/{id}
   * @secure
   */
  boardDelete = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | void | string | ControllersApiErrorResponse
    >({
      path: `/board/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Clone exist dashboard with all widgets attached to it. Will throw error if user reached limit of boards or limit of widgets
   *
   * @tags dashboard
   * @name CloneCreate
   * @summary Clone dashboard
   * @request POST:/board/{id}/clone
   * @secure
   */
  cloneCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersDashboardCreateResponse,
      ControllersUnauthorizedResponse | void | string | ControllersApiErrorResponse
    >({
      path: `/board/${id}/clone`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Load all dashboard widgets in bulk
   *
   * @tags dashboard
   * @name LoadDetail
   * @summary Load widgets in bulk
   * @request GET:/board/{id}/load
   * @secure
   */
  loadDetail = (id: number, params: RequestParams = {}) =>
    this.request<ControllersLoadBoardResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/board/${id}/load`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Generate short link for dashboard. Using this link you can share your dashboard with other users.
   *
   * @tags dashboard
   * @name ShortLinkCreate
   * @summary Generate short link
   * @request POST:/board/{id}/short-link
   * @secure
   */
  shortLinkCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersShortUrlResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/board/${id}/short-link`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
