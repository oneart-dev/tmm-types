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
  ControllersCategoriesListResponse,
  ControllersOrdersListResponse,
  ControllersPublicTradeGroupResponse,
  ControllersPublicTradeResponse,
  ControllersShortUrlResponse,
  ControllersTagsResponse,
  ControllersTradeChartDrawingsResponse,
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
       * Page
       * @default 1
       */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /**
       * Descending order
       * @default true
       */
      sortDesc?: boolean;
      /**
       * Items per page
       * @min 1
       * @max 150
       * @default 20
       */
      itemsPerPage?: number;
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
      ControllersApiSuccessResponse,
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
  dayOrdersList = (apiKeyId: number, date: string, symbol: string, params: RequestParams = {}) =>
    this.request<
      ControllersOrdersListResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/trades/day/orders`,
      method: "GET",
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
      /**
       * Page
       * @min 1
       * @max 150
       * @default 20
       */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /**
       * Descending order
       * @default true
       */
      sortDesc?: boolean;
      /** Items per page */
      itemsPerPage?: number;
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
      ControllersApiSuccessResponse,
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
      ControllersApiSuccessResponse,
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
   * @description Get trade preview
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
   * @description Generate short link for list of trade IDs. It will use privacy settings from the public profile settings.
   *
   * @tags trades
   * @name ShortLinkGroupCreate
   * @summary Generate short link for group of trades
   * @request POST:/trades/short-link-group
   * @secure
   */
  shortLinkGroupCreate = (payload: DtoTradeGroupShortLink, params: RequestParams = {}) =>
    this.request<
      ControllersShortUrlResponse,
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
   * @description Update tags for all selected trades
   *
   * @tags trades
   * @name TagsCreate
   * @summary Update tags for all selected trades
   * @request POST:/trades/tags
   * @secure
   */
  tagsCreate = (payload: DtoTradeUpdateTagsBulkForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
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
   * @description Send list of tags ids with order to update entry reasons order
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
      ControllersApiSuccessResponse,
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
   * @description user drawings on the chart
   *
   * @tags trades
   * @name ChartDataCreate
   * @summary get drawings for chart
   * @request POST:/trades/{id}/chart-data
   * @secure
   */
  chartDataCreate = (id: number, payload: DtoTradeDrawingForm, params: RequestParams = {}) =>
    this.request<
      ControllersTradeChartDrawingsResponse,
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
      ControllersApiSuccessResponse,
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
   * @description List of orders for trade
   *
   * @tags trades
   * @name OrdersDetail
   * @summary get order list for trade
   * @request GET:/trades/{id}/orders
   * @secure
   */
  ordersDetail = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersOrdersListResponse,
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
   * @description Save chart drawings for trade.
   *
   * @tags trades
   * @name SaveChartCreate
   * @summary Save chart drawings for trade.
   * @request POST:/trades/{id}/save-chart
   * @secure
   */
  saveChartCreate = (id: number, payload: DtoTradeChartDataForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
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
   * @description Generate short link for trade. It will use privacy settings from the public profile settings.
   *
   * @tags trades
   * @name ShortLinkCreate
   * @summary Generate short link
   * @request POST:/trades/{id}/short-link
   * @secure
   */
  shortLinkCreate = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersShortUrlResponse,
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
      ControllersApiSuccessResponse,
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
      ControllersApiSuccessResponse,
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
