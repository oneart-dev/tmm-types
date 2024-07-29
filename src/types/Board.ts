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
  ControllersShortUrlResponse,
  ControllersUnauthorizedResponse,
  DtoDashboardCreateForm,
  DtoDashboardUpdateForm,
  DtoDashboardsSortForm,
  DtoWidgetCreateForm,
  DtoWidgetUpdateForm,
  ServicesLoadBoardResponseChunk,
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
      api_key_id?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with api key ids specified
       */
      api_key_id_params?: "not:";
      /**
       * Trades by default have no category.
       * ID 1 is system category for archive trades. Excluded by default.
       */
      category?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with category ids specified
       */
      category_params?: "not:";
      /** @example "2019-01-01,2019-01-02" */
      closeBetween?: string;
      /**
       * Days of week 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday
       * @example [2]
       */
      daysOfWeek?: number[];
      /**
       * Duration specified in milliseconds
       * Example: 1000,10000 - trades with duration between 1 and 10 seconds
       */
      durationBetween?: string;
      /** @example "today" */
      durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
      exit_tags?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with tags specified
       * "all:" - all provided tags must be included/excluded
       * "only:" - trades with tags specified only
       * @example "not:all:"
       */
      exit_tags_params?: "not:" | "all:" | "not:all:" | "only:";
      /** @example "conclusion:empty" */
      extraInfo?:
        | "conclusion:empty"
        | "conclusion:not-empty"
        | "desc:empty"
        | "desc:not-empty"
        | "mentor_note:not-empty"
        | "mentor_note:empty";
      /** Used in summary widget settings */
      groupBy?: "minute" | "hour" | "month" | "date" | "week";
      /** Headers are required only for CSV export method */
      headers?: string[];
      /** @example 1 */
      id?: number;
      /** @example [1] */
      ids?: number[];
      /** @example "0.5,1.5" */
      leverageBetween?: string;
      /** @example "-0.5,-1.5" */
      maeBetween?: string;
      /** @example "0.5,1.5" */
      mfeBetween?: string;
      multiplier?: string;
      /** @example "2019-01-01,2019-01-02" */
      openBetween?: string;
      /** @example "0.5,1.5" */
      percentBetween?: string;
      profitBetween?: string;
      /** @example "0.5,1.5" */
      profitDepositBetween?: string;
      side?: "LONG" | "SHORT";
      /** Select only open or only closed trades. */
      state?: 0 | 1 | 2;
      /** @example ["BTCUSDT"] */
      symbol?: string[];
      /** @example "not:" */
      symbol_params?: "not:";
      tags?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with tags specified
       * "all:" - all provided tags must be included/excluded
       * "only:" - trades with tags specified only
       * @example "not:all:"
       */
      tags_params?: "not:" | "all:" | "not:all:" | "only:";
      /** Default value comes from user profile settings. By default is "open_time" */
      trade_time?: string;
      /** @example 1 */
      user_id?: number;
      /**
       * Turnover in USD - including all buy and sell orders value
       * @example "0.5,1.5"
       */
      volumeBetween?: string;
      volumeFrom?: number;
      volumeTo?: number;
      /**
       * By default archive trades are not included. If you want to include them,
       * set this to true. Or set category id to 1 (Archive ID).
       */
      with_archive?: boolean;
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
      api_key_id?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with api key ids specified
       */
      api_key_id_params?: "not:";
      /**
       * Trades by default have no category.
       * ID 1 is system category for archive trades. Excluded by default.
       */
      category?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with category ids specified
       */
      category_params?: "not:";
      /** @example "2019-01-01,2019-01-02" */
      closeBetween?: string;
      /**
       * Days of week 1=Sunday, 2=Monday, 3=Tuesday, 4=Wednesday, 5=Thursday, 6=Friday, 7=Saturday
       * @example [2]
       */
      daysOfWeek?: number[];
      /**
       * Duration specified in milliseconds
       * Example: 1000,10000 - trades with duration between 1 and 10 seconds
       */
      durationBetween?: string;
      /** @example "today" */
      durationType?: "today" | "yesterday" | "past1w" | "1w" | "1m" | "7d" | "30d" | "90d";
      exit_tags?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with tags specified
       * "all:" - all provided tags must be included/excluded
       * "only:" - trades with tags specified only
       * @example "not:all:"
       */
      exit_tags_params?: "not:" | "all:" | "not:all:" | "only:";
      /** @example "conclusion:empty" */
      extraInfo?:
        | "conclusion:empty"
        | "conclusion:not-empty"
        | "desc:empty"
        | "desc:not-empty"
        | "mentor_note:not-empty"
        | "mentor_note:empty";
      /** Used in summary widget settings */
      groupBy?: "minute" | "hour" | "month" | "date" | "week";
      /** Headers are required only for CSV export method */
      headers?: string[];
      /** @example 1 */
      id?: number;
      /** @example [1] */
      ids?: number[];
      /** @example "0.5,1.5" */
      leverageBetween?: string;
      /** @example "-0.5,-1.5" */
      maeBetween?: string;
      /** @example "0.5,1.5" */
      mfeBetween?: string;
      multiplier?: string;
      /** @example "2019-01-01,2019-01-02" */
      openBetween?: string;
      /** @example "0.5,1.5" */
      percentBetween?: string;
      profitBetween?: string;
      /** @example "0.5,1.5" */
      profitDepositBetween?: string;
      side?: "LONG" | "SHORT";
      /** Select only open or only closed trades. */
      state?: 0 | 1 | 2;
      /** @example ["BTCUSDT"] */
      symbol?: string[];
      /** @example "not:" */
      symbol_params?: "not:";
      tags?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with tags specified
       * "all:" - all provided tags must be included/excluded
       * "only:" - trades with tags specified only
       * @example "not:all:"
       */
      tags_params?: "not:" | "all:" | "not:all:" | "only:";
      /** Default value comes from user profile settings. By default is "open_time" */
      trade_time?: string;
      /** @example 1 */
      user_id?: number;
      /**
       * Turnover in USD - including all buy and sell orders value
       * @example "0.5,1.5"
       */
      volumeBetween?: string;
      volumeFrom?: number;
      volumeTo?: number;
      /**
       * By default archive trades are not included. If you want to include them,
       * set this to true. Or set category id to 1 (Archive ID).
       */
      with_archive?: boolean;
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
    this.request<
      ServicesLoadBoardResponseChunk,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
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
