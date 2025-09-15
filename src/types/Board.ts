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
  ControllersApiSuccessArrayServicesDashboard,
  ControllersApiSuccessInt64,
  ControllersApiSuccessNoData,
  ControllersApiSuccessResponse,
  ControllersApiSuccessServicesDashboard,
  ControllersApiSuccessString,
  ControllersApiWarningResponse,
  ControllersLoadBoardResponse,
  ControllersLoadLayoutResponse,
  ControllersUnauthorizedResponse,
  DtoDashboardCreateForm,
  DtoDashboardExportForm,
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
   * @description Dashboard list including widgets attached to dashboard
   *
   * @tags dashboard
   * @name BoardList
   * @summary Dashboards list
   * @request GET:/board
   * @secure
   */
  boardList = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayServicesDashboard,
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
   * @description Create new empty dashboard with specified name If user reached dashboards limit throws error
   *
   * @tags dashboard
   * @name BoardUpdate
   * @summary Create dashboard
   * @request PUT:/board
   * @secure
   */
  boardUpdate = (payload: DtoDashboardCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesDashboard,
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
      /** @example "0,10000" */
      avgTrades15m6h?: string;
      /** @example "0,40000" */
      avgTrades1h24h?: string;
      /**
       * Moving averages of trades
       * @example "0,1000"
       */
      avgTrades1m30m?: string;
      /** @example "0,20000" */
      avgTrades30m12h?: string;
      /** @example "0,5000" */
      avgTrades5m2h?: string;
      /** @example "0,1000000" */
      avgVolume15m6h?: string;
      /** @example "0,5000000" */
      avgVolume1h24h?: string;
      /**
       * Moving averages of volume
       * @example "0,100000"
       */
      avgVolume1m30m?: string;
      /** @example "0,2000000" */
      avgVolume30m12h?: string;
      /** @example "0,500000" */
      avgVolume5m2h?: string;
      /** @example "-0.8,0.8" */
      btcCorr1m50?: string;
      /**
       * BTC correlation [-1,1]
       * @example "-0.8,0.8"
       */
      btcCorr5m20?: string;
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
      /**
       * Funding rate, e.g. "-0.01,0.01"
       * @example "-0.01,0.01"
       */
      fundingRate?: string;
      /** Used in summary widget settings */
      groupBy?: "minute" | "hour" | "month" | "date" | "week";
      /** Headers are required only for CSV export method */
      headers?: string[];
      hours_of_day?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with hours specified
       */
      hours_of_day_params?: string;
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
      /** @example "0,2" */
      natr1m30?: string;
      /**
       * NATR
       * @example "0,2"
       */
      natr5m14?: string;
      /** @example "2019-01-01,2019-01-02" */
      openBetween?: string;
      /** @example "0.5,1.5" */
      percentBetween?: string;
      /** @example "-2,2" */
      priceRange12h?: string;
      /** @example "-2,2" */
      priceRange15m?: string;
      /** @example "-2,2" */
      priceRange1h?: string;
      /**
       * Price range (normalized), e.g. "-2,2"
       * @example "-2,2"
       */
      priceRange1m?: string;
      /** @example "-2,2" */
      priceRange24h?: string;
      /** @example "-2,2" */
      priceRange2h?: string;
      /** @example "-2,2" */
      priceRange30m?: string;
      /** @example "-2,2" */
      priceRange4h?: string;
      /** @example "-2,2" */
      priceRange5m?: string;
      /** @example "-2,2" */
      priceRange6h?: string;
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
      /** @example "0,150000" */
      trades12h?: string;
      /** @example "0,10000" */
      trades15m?: string;
      /** @example "0,40000" */
      trades1h?: string;
      /**
       * Trades count per window
       * @example "0,1000"
       */
      trades1m?: string;
      /** @example "0,200000" */
      trades24h?: string;
      /** @example "0,60000" */
      trades2h?: string;
      /** @example "0,20000" */
      trades30m?: string;
      /** @example "0,80000" */
      trades4h?: string;
      /** @example "0,5000" */
      trades5m?: string;
      /** @example "0,100000" */
      trades6h?: string;
      /** @example "-3,3" */
      tradesSpike15m6h?: string;
      /** @example "-3,3" */
      tradesSpike1h24h?: string;
      /**
       * Trades spikes
       * @example "-3,3"
       */
      tradesSpike1m30m?: string;
      /** @example "-3,3" */
      tradesSpike30m12h?: string;
      /** @example "-3,3" */
      tradesSpike5m2h?: string;
      /** @example 1 */
      user_id?: number;
      /** @example "0,20000000" */
      volume12h?: string;
      /** @example "0,1000000" */
      volume15m?: string;
      /** @example "0,5000000" */
      volume1h?: string;
      /**
       * Volumes (USD or native units—match your backend), counts per window
       * @example "0,100000"
       */
      volume1m?: string;
      /** @example "0,30000000" */
      volume24h?: string;
      /** @example "0,8000000" */
      volume2h?: string;
      /** @example "0,2000000" */
      volume30m?: string;
      /** @example "0,12000000" */
      volume4h?: string;
      /** @example "0,500000" */
      volume5m?: string;
      /** @example "0,16000000" */
      volume6h?: string;
      /**
       * Turnover in USD - including all buy and sell orders value
       * @example "0.5,1.5"
       */
      volumeBetween?: string;
      volumeFrom?: number;
      /** @example "-3,3" */
      volumeSpike15m6h?: string;
      /** @example "-3,3" */
      volumeSpike1h24h?: string;
      /**
       * Volume spikes (ratio/z-score as you define), keep 1h24h included
       * @example "-3,3"
       */
      volumeSpike1m30m?: string;
      /** @example "-3,3" */
      volumeSpike30m12h?: string;
      /** @example "-3,3" */
      volumeSpike5m2h?: string;
      volumeTo?: number;
      /**
       * By default archive trades are not included. If you want to include them,
       * set this to true. Or set category id to 1 (Archive ID).
       */
      with_archive?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessInt64, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/board/counter/dashboard/${id}`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
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
      /** @example "0,10000" */
      avgTrades15m6h?: string;
      /** @example "0,40000" */
      avgTrades1h24h?: string;
      /**
       * Moving averages of trades
       * @example "0,1000"
       */
      avgTrades1m30m?: string;
      /** @example "0,20000" */
      avgTrades30m12h?: string;
      /** @example "0,5000" */
      avgTrades5m2h?: string;
      /** @example "0,1000000" */
      avgVolume15m6h?: string;
      /** @example "0,5000000" */
      avgVolume1h24h?: string;
      /**
       * Moving averages of volume
       * @example "0,100000"
       */
      avgVolume1m30m?: string;
      /** @example "0,2000000" */
      avgVolume30m12h?: string;
      /** @example "0,500000" */
      avgVolume5m2h?: string;
      /** @example "-0.8,0.8" */
      btcCorr1m50?: string;
      /**
       * BTC correlation [-1,1]
       * @example "-0.8,0.8"
       */
      btcCorr5m20?: string;
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
      /**
       * Funding rate, e.g. "-0.01,0.01"
       * @example "-0.01,0.01"
       */
      fundingRate?: string;
      /** Used in summary widget settings */
      groupBy?: "minute" | "hour" | "month" | "date" | "week";
      /** Headers are required only for CSV export method */
      headers?: string[];
      hours_of_day?: number[];
      /**
       * string based params separated by ":"
       * "not:" - exclude trades with hours specified
       */
      hours_of_day_params?: string;
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
      /** @example "0,2" */
      natr1m30?: string;
      /**
       * NATR
       * @example "0,2"
       */
      natr5m14?: string;
      /** @example "2019-01-01,2019-01-02" */
      openBetween?: string;
      /** @example "0.5,1.5" */
      percentBetween?: string;
      /** @example "-2,2" */
      priceRange12h?: string;
      /** @example "-2,2" */
      priceRange15m?: string;
      /** @example "-2,2" */
      priceRange1h?: string;
      /**
       * Price range (normalized), e.g. "-2,2"
       * @example "-2,2"
       */
      priceRange1m?: string;
      /** @example "-2,2" */
      priceRange24h?: string;
      /** @example "-2,2" */
      priceRange2h?: string;
      /** @example "-2,2" */
      priceRange30m?: string;
      /** @example "-2,2" */
      priceRange4h?: string;
      /** @example "-2,2" */
      priceRange5m?: string;
      /** @example "-2,2" */
      priceRange6h?: string;
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
      /** @example "0,150000" */
      trades12h?: string;
      /** @example "0,10000" */
      trades15m?: string;
      /** @example "0,40000" */
      trades1h?: string;
      /**
       * Trades count per window
       * @example "0,1000"
       */
      trades1m?: string;
      /** @example "0,200000" */
      trades24h?: string;
      /** @example "0,60000" */
      trades2h?: string;
      /** @example "0,20000" */
      trades30m?: string;
      /** @example "0,80000" */
      trades4h?: string;
      /** @example "0,5000" */
      trades5m?: string;
      /** @example "0,100000" */
      trades6h?: string;
      /** @example "-3,3" */
      tradesSpike15m6h?: string;
      /** @example "-3,3" */
      tradesSpike1h24h?: string;
      /**
       * Trades spikes
       * @example "-3,3"
       */
      tradesSpike1m30m?: string;
      /** @example "-3,3" */
      tradesSpike30m12h?: string;
      /** @example "-3,3" */
      tradesSpike5m2h?: string;
      /** @example 1 */
      user_id?: number;
      /** @example "0,20000000" */
      volume12h?: string;
      /** @example "0,1000000" */
      volume15m?: string;
      /** @example "0,5000000" */
      volume1h?: string;
      /**
       * Volumes (USD or native units—match your backend), counts per window
       * @example "0,100000"
       */
      volume1m?: string;
      /** @example "0,30000000" */
      volume24h?: string;
      /** @example "0,8000000" */
      volume2h?: string;
      /** @example "0,2000000" */
      volume30m?: string;
      /** @example "0,12000000" */
      volume4h?: string;
      /** @example "0,500000" */
      volume5m?: string;
      /** @example "0,16000000" */
      volume6h?: string;
      /**
       * Turnover in USD - including all buy and sell orders value
       * @example "0.5,1.5"
       */
      volumeBetween?: string;
      volumeFrom?: number;
      /** @example "-3,3" */
      volumeSpike15m6h?: string;
      /** @example "-3,3" */
      volumeSpike1h24h?: string;
      /**
       * Volume spikes (ratio/z-score as you define), keep 1h24h included
       * @example "-3,3"
       */
      volumeSpike1m30m?: string;
      /** @example "-3,3" */
      volumeSpike30m12h?: string;
      /** @example "-3,3" */
      volumeSpike5m2h?: string;
      volumeTo?: number;
      /**
       * By default archive trades are not included. If you want to include them,
       * set this to true. Or set category id to 1 (Archive ID).
       */
      with_archive?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersApiSuccessInt64, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/board/counter/widget/${id}`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Load exported dashboard layout using short url
   *
   * @tags dashboard
   * @name LayoutDetail
   * @summary Load dashboard layout
   * @request GET:/board/layout/{code}
   * @secure
   */
  layoutDetail = (code: string, params: RequestParams = {}) =>
    this.request<ControllersLoadLayoutResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/board/layout/${code}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Install dashboard layout
   *
   * @tags dashboard
   * @name LayoutInstallCreate
   * @summary Install dashboard layout
   * @request POST:/board/layout/{code}/install
   * @secure
   */
  layoutInstallCreate = (code: string, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesDashboard,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/board/layout/${code}/install`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List exported by user dashboard layouts
   *
   * @tags dashboard
   * @name LayoutsList
   * @summary Dashboard layouts list
   * @request GET:/board/layouts
   * @secure
   */
  layoutsList = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayServicesDashboard,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/board/layouts`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Load all dashboard widgets in bulk
   *
   * @tags dashboard
   * @name PublicLoadDetail
   * @summary Load widgets in bulk
   * @request GET:/board/public/{code}/load
   */
  publicLoadDetail = (code: string, params: RequestParams = {}) =>
    this.request<ControllersLoadBoardResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/board/public/${code}/load`,
      method: "GET",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
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
    this.request<ControllersApiSuccessNoData, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/board/sort`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
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
   * @description Create new widget attached to dashboard by ID If user reached widget limit throws error
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
      ControllersApiSuccessNoData,
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
    this.request<ControllersApiSuccessNoData, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/board/${id}`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
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
      ControllersApiSuccessNoData,
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
      ControllersApiSuccessServicesDashboard,
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
   * @description Export dashboard layout and return short url
   *
   * @tags dashboard
   * @name ExportCreate
   * @summary Export dashboard layout
   * @request POST:/board/{id}/export
   * @secure
   */
  exportCreate = (id: number, payload: DtoDashboardExportForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessString,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/board/${id}/export`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint streams data using "Transfer-Encoding: chunked", allowing asynchronous loading of widgets in real-time. Each chunk of data is a JSON object representing a widget's data or errors. The chunks are separated by the custom delimiter "\x02\x03\x04END\x04\x03\x02". Clients should accumulate the streamed data until this delimiter is encountered. Once the delimiter is detected, the client can safely split the chunks, parse each JSON object, and process the widget's data. **Client-side logic**: - Listen for data chunks from the server. - Accumulate the response until the delimiter is detected. - Split the response using the delimiter and process each JSON chunk individually. - Handle potential parsing errors for incomplete or malformed JSON objects. **Note**: The widgets are loaded asynchronously, so the client should wait for all chunks to be received before assuming that all widget data is complete.
   *
   * @tags dashboard
   * @name LoadDetail
   * @summary Load dashboard widgets asynchronously
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
      ControllersApiSuccessString,
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
