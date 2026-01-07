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
   * @description Retrieves a list of user dashboards, including their associated widgets.
   *
   * @tags dashboard
   * @name BoardList
   * @summary List Dashboards
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
   * @description Creates a new, empty dashboard with a specified name. An error is returned if the user has reached their dashboard limit.
   *
   * @tags dashboard
   * @name BoardUpdate
   * @summary Create Dashboard
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
   * @description Returns the count of trades for a dashboard based on the supplied filters.
   *
   * @tags dashboard
   * @name CounterDashboardDetail
   * @summary Get Dashboard Trade Count
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
   * @description Returns the count of trades for a widget, applying both the widget's filters and the dashboard's default filters.
   *
   * @tags dashboard
   * @name CounterWidgetDetail
   * @summary Get Widget Trade Count
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
   * @description Loads an exported dashboard layout using a short URL code.
   *
   * @tags dashboard
   * @name LayoutDetail
   * @summary Load Dashboard Layout
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
   * @description Installs a dashboard layout from a short URL code into the user's account.
   *
   * @tags dashboard
   * @name LayoutInstallCreate
   * @summary Install Dashboard Layout
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
   * @description Retrieves a list of dashboard layouts that the user has exported.
   *
   * @tags dashboard
   * @name LayoutsList
   * @summary List Dashboard Layouts
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
   * @description Loads all widgets for a public dashboard in bulk using a short URL code.
   *
   * @tags dashboard
   * @name PublicLoadDetail
   * @summary Load Public Board Widgets in Bulk
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
   * @description Updates the display order of dashboards by providing an ordered list of their IDs.
   *
   * @tags dashboard
   * @name SortCreate
   * @summary Sort Dashboards
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
   * @description Loads a widget for preview purposes without saving it.
   *
   * @tags dashboard
   * @name WidgetTempCreate
   * @summary Load Temporary Widget
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
   * @description Creates and attaches a new widget to a specified dashboard. An error is returned if the user has reached their widget limit.
   *
   * @tags dashboard
   * @name WidgetUpdate
   * @summary Add Widget to Dashboard
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
   * @description Updates the properties of a widget.
   *
   * @tags dashboard
   * @name WidgetCreate
   * @summary Update Widget
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
   * @description Deletes a widget from a dashboard.
   *
   * @tags dashboard
   * @name WidgetDelete
   * @summary Delete Widget
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
   * @description Updates the properties of a dashboard.
   *
   * @tags dashboard
   * @name BoardCreate
   * @summary Update Dashboard
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
   * @description Deletes a dashboard and all of its associated widgets.
   *
   * @tags dashboard
   * @name BoardDelete
   * @summary Delete Dashboard
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
   * @description Creates a duplicate of an existing dashboard, including all of its widgets. An error is returned if the user has reached their limit for either dashboards or widgets.
   *
   * @tags dashboard
   * @name CloneCreate
   * @summary Clone Dashboard
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
   * @description Exports a dashboard's layout and returns a short URL for sharing.
   *
   * @tags dashboard
   * @name ExportCreate
   * @summary Export Dashboard Layout
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
   * @summary Load Dashboard Widgets Asynchronously
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
   * @description Generates a shareable short link for a dashboard.
   *
   * @tags dashboard
   * @name ShortLinkCreate
   * @summary Generate Dashboard Short Link
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
