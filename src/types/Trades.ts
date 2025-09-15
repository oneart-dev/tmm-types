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
  ControllersApiSuccessArrayServicesOrder,
  ControllersApiSuccessArrayServicesTag,
  ControllersApiSuccessNoData,
  ControllersApiSuccessResponse,
  ControllersApiSuccessServicesTag,
  ControllersApiSuccessString,
  ControllersApiWarningResponse,
  ControllersCategoriesListResponse,
  ControllersOrdersListResponse,
  ControllersPublicTradeGroupResponse,
  ControllersPublicTradeResponse,
  ControllersTagsResponse,
  ControllersUnauthorizedResponse,
  DtoCategoryListForm,
  DtoGlobalChartDataForm,
  DtoTagForm,
  DtoTagsSortForm,
  DtoTradeChartDataForm,
  DtoTradeChartForm,
  DtoTradeDrawingForm,
  DtoTradeGroupShortLink,
  DtoTradeUpdateDescForm,
  DtoTradeUpdateTagsBulkForm,
  DtoTradeUpdateTagsForm,
  DtoTradesCategoryForm,
  DtoTradesMergeForm,
  ServicesTradeChartResponse,
  ServicesTradesListPagination,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Trades<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description List trades with pagination and filters Multiple values example: ```&api_key_id=1&api_key_id=2&api_key_id=3```
   *
   * @tags trades
   * @name TradesList
   * @summary List trades
   * @request GET:/trades/
   * @secure
   */
  tradesList = (
    query?: {
      /**
       * @min 1
       * @example 1
       */
      page?: number;
      itemsPerPage?: number;
      sortBy?: string;
      sortDesc?: boolean;
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
    this.request<ServicesTradesListPagination, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/trades/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Moving all trades to archive category.
   *
   * @tags trades
   * @name ArchiveAllCreate
   * @summary Archive all trades
   * @request POST:/trades/archive-all
   * @secure
   */
  archiveAllCreate = (params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/archive-all`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Categories list include default archive category. You can't delete or modify default archive category.
   *
   * @tags trades
   * @name CategoriesList
   * @summary Categories list
   * @request GET:/trades/categories
   * @secure
   */
  categoriesList = (params: RequestParams = {}) =>
    this.request<
      ControllersCategoriesListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/categories`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update all categories
   *
   * @tags trades
   * @name CategoriesCreate
   * @summary Update all categories
   * @request POST:/trades/categories
   * @secure
   */
  categoriesCreate = (payload: DtoCategoryListForm, params: RequestParams = {}) =>
    this.request<
      ControllersCategoriesListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/categories`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update category
   *
   * @tags trades
   * @name CategoriesCreate2
   * @summary Update category
   * @request POST:/trades/categories/{id}
   * @originalName categoriesCreate
   * @duplicate
   * @secure
   */
  categoriesCreate2 = (id: number, payload: DtoCategoryListForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/trades/categories/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Delete category
   *
   * @tags trades
   * @name CategoriesDelete
   * @summary Delete category
   * @request DELETE:/trades/categories/{id}
   * @secure
   */
  categoriesDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/trades/categories/${id}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description List of orders for full day
   *
   * @tags trades
   * @name DayOrdersList
   * @summary get order list for full day
   * @request GET:/trades/day/orders
   * @secure
   */
  dayOrdersList = (
    query: {
      api_key_id: number;
      date: string;
      symbol: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersOrdersListResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/day/orders`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Export trades to file with filters Multiple values example: ```&api_key_id=1&api_key_id=2&api_key_id=3```
   *
   * @tags trades
   * @name ExportDetail
   * @summary Export trades to file
   * @request GET:/trades/export/{format}
   * @secure
   */
  exportDetail = (
    format: string,
    query?: {
      /** Sort by field */
      sortBy?: string;
      /**
       * Descending order
       * @default true
       */
      sortDesc?: boolean;
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
    this.request<void, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/trades/export/${format}`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Save chart drawings for ticker
   *
   * @tags trades
   * @name GlobalSaveChartCreate
   * @summary Save chart drawings for ticker
   * @request POST:/trades/global/{ticker}/save-chart
   * @secure
   */
  globalSaveChartCreate = (id: number, ticker: string, payload: DtoGlobalChartDataForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/global/${ticker}/save-chart`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Merge trades with same api key, symbol and side overwise return error
   *
   * @tags trades
   * @name MergeCreate
   * @summary Merge trades
   * @request POST:/trades/merge
   * @secure
   */
  mergeCreate = (payload: DtoTradesMergeForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/merge`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get trades group by short url hash
   *
   * @tags trades
   * @name PublicGroupDetail
   * @summary Get trades group by short url hash
   * @request GET:/trades/public-group/{code}
   */
  publicGroupDetail = (code: string, params: RequestParams = {}) =>
    this.request<
      ControllersPublicTradeGroupResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/public-group/${code}`,
      method: "GET",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get trade by short url hash
   *
   * @tags trades
   * @name PublicDetail
   * @summary Get trade by short url hash
   * @request GET:/trades/public/{code}
   */
  publicDetail = (code: string, params: RequestParams = {}) =>
    this.request<
      ControllersPublicTradeResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/public/${code}`,
      method: "GET",
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description get klines for chart using hash from short url
   *
   * @tags trades
   * @name PublicLoadCandlesDataCreate
   * @summary get klines for chart using hash from short url
   * @request POST:/trades/public/{code}/loadCandlesData
   * @deprecated
   */
  publicLoadCandlesDataCreate = (code: string, payload: DtoTradeChartForm, params: RequestParams = {}) =>
    this.request<
      ServicesTradeChartResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/public/${code}/loadCandlesData`,
      method: "POST",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get trade preview. Preview is cached and regenerated only if
   *
   * @tags trades
   * @name PublicPreviewDetail
   * @summary Get trade preview
   * @request GET:/trades/public/{code}/preview
   */
  publicPreviewDetail = (code: string, params: RequestParams = {}) =>
    this.request<
      void,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/public/${code}/preview`,
      method: "GET",
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Generate short link for list of trade IDs. It will use privacy settings from the public profile settings. It will return same link for the same trades.
   *
   * @tags trades
   * @name ShortLinkGroupCreate
   * @summary Generate short link for group of trades
   * @request POST:/trades/short-link-group
   * @secure
   */
  shortLinkGroupCreate = (payload: DtoTradeGroupShortLink, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessString,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/short-link-group`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get all tags created by user and attached at least for one trade
   *
   * @tags trades
   * @name TagsList
   * @summary Get all tags
   * @request GET:/trades/tags
   * @secure
   */
  tagsList = (params: RequestParams = {}) =>
    this.request<
      ControllersTagsResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/tags`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update tags for all selected trades. You can expect to receive an update for each trade through the SSE channel.
   *
   * @tags trades
   * @name TagsCreate
   * @summary Update tags for all selected trades
   * @request POST:/trades/tags
   * @secure
   */
  tagsCreate = (payload: DtoTradeUpdateTagsBulkForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/tags`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Send list of tags ids with order to update tags order
   *
   * @tags trades
   * @name TagsSortCreate
   * @summary Sort entry reasons
   * @request POST:/trades/tags/sort
   * @secure
   */
  tagsSortCreate = (payload: DtoTagsSortForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/trades/tags/sort`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Update tag
   *
   * @tags trades
   * @name TagsCreate2
   * @summary Update tag
   * @request POST:/trades/tags/{id}
   * @originalName tagsCreate
   * @duplicate
   * @secure
   */
  tagsCreate2 = (id: number, payload: DtoTagForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesTag,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/tags/${id}`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete tag will remove tag from all trades. ⚠️ CAUTION: this action is irreversible. ⚠️
   *
   * @tags trades
   * @name TagsDelete
   * @summary Delete tag
   * @request DELETE:/trades/tags/{id}
   * @secure
   */
  tagsDelete = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/tags/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update trades category
   *
   * @tags trades
   * @name UpdateCategoryCreate
   * @summary Update trades category
   * @request POST:/trades/update-category
   * @secure
   */
  updateCategoryCreate = (payload: DtoTradesCategoryForm, params: RequestParams = {}) =>
    this.request<
      ControllersCategoriesListResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/update-category`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description user drawings on the chart in JSON format. Returns unparsed JSON
   *
   * @tags trades
   * @name ChartDataCreate
   * @summary get drawings for chart
   * @request POST:/trades/{id}/chart-data
   * @secure
   */
  chartDataCreate = (id: number, payload: DtoTradeDrawingForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessString,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/${id}/chart-data`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Close trade. Only for SPOT trades. If trade has no sell orders it will move it to archive category.
   *
   * @tags trades
   * @name CloseCreate
   * @summary Close trade
   * @request POST:/trades/{id}/close
   * @secure
   */
  closeCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/${id}/close`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get klines for chart with interval selected. Will include user drawings on the chart
   *
   * @tags trades
   * @name LoadCandlesDataCreate
   * @summary get klines for chart
   * @request POST:/trades/{id}/loadCandlesData
   * @deprecated
   * @secure
   */
  loadCandlesDataCreate = (id: number, payload: DtoTradeChartForm, params: RequestParams = {}) =>
    this.request<
      ServicesTradeChartResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/${id}/loadCandlesData`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description List of orders for the trade
   *
   * @tags trades
   * @name OrdersDetail
   * @summary get order list for trade
   * @request GET:/trades/{id}/orders
   * @secure
   */
  ordersDetail = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayServicesOrder,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/${id}/orders`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Save chart drawings for the trade.
   *
   * @tags trades
   * @name SaveChartCreate
   * @summary Save chart drawings for the trade.
   * @request POST:/trades/{id}/save-chart
   * @secure
   */
  saveChartCreate = (id: number, payload: DtoTradeChartDataForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/${id}/save-chart`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Generate short link for trade. It will use privacy settings from the public profile settings. It will return same link for the same trade.
   *
   * @tags trades
   * @name ShortLinkCreate
   * @summary Generate short link
   * @request POST:/trades/{id}/short-link
   * @secure
   */
  shortLinkCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessString,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/${id}/short-link`,
      method: "POST",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Endpoint accept list of all tags belongs to the trade. Empty list will remove all tags. Tag with zero ID will be created and attached to the trade.
   *
   * @tags trades
   * @name TagsCreate3
   * @summary Update trade tags
   * @request POST:/trades/{id}/tags
   * @originalName tagsCreate
   * @duplicate
   * @secure
   */
  tagsCreate3 = (id: number, payload: DtoTradeUpdateTagsForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessArrayServicesTag,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/${id}/tags`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update trade description, conclusion and video link
   *
   * @tags trades
   * @name UpdateCreate
   * @summary Update trade description
   * @request POST:/trades/{id}/update
   * @secure
   */
  updateCreate = (id: number, payload: DtoTradeUpdateDescForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessNoData,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/${id}/update`,
      method: "POST",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
