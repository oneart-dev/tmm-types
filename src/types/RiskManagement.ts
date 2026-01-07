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
  ControllersUnauthorizedResponse,
  DtoRiskManagementCreateForm,
  DtoRiskManagementUpdateForm,
  ServicesRiskManagementLogPagination,
  ServicesRiskManagementPagination,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class RiskManagement<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new risk management rule.
   *
   * @tags risk-management
   * @name RiskManagementUpdate
   * @summary Create Risk Management Rule
   * @request PUT:/risk-management
   * @secure
   */
  riskManagementUpdate = (payload: DtoRiskManagementCreateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/risk-management`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Updates an existing risk management rule.
   *
   * @tags risk-management
   * @name RiskManagementCreate
   * @summary Update Risk Management Rule
   * @request POST:/risk-management
   * @secure
   */
  riskManagementCreate = (payload: DtoRiskManagementUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/risk-management`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Retrieves a paginated list of all risk management rules.
   *
   * @tags risk-management
   * @name RiskManagementList
   * @summary List Risk Management Rules
   * @request GET:/risk-management/
   * @secure
   */
  riskManagementList = (
    query?: {
      /** Page */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /** Descending order */
      sortDesc?: boolean;
      /** Items per page */
      itemsPerPage?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ServicesRiskManagementPagination,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/risk-management/`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves a paginated list of all risk management violations recorded by the system.
   *
   * @tags risk-management
   * @name GetRiskManagement
   * @summary List Risk Management Violations
   * @request GET:/risk-management/log
   * @secure
   */
  getRiskManagement = (
    query?: {
      /** Page */
      page?: number;
      /** Sort by field */
      sortBy?: string;
      /** Descending order */
      sortDesc?: boolean;
      /** Items per page */
      itemsPerPage?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ServicesRiskManagementLogPagination,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/risk-management/log`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a risk management rule.
   *
   * @tags risk-management
   * @name RiskManagementDelete
   * @summary Delete Risk Management Rule
   * @request DELETE:/risk-management/{id}
   * @secure
   */
  riskManagementDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/risk-management/${id}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Enables or disables a risk management rule.
   *
   * @tags risk-management
   * @name ToggleCreate
   * @summary Toggle Risk Management Rule
   * @request POST:/risk-management/{id}/toggle
   * @secure
   */
  toggleCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/risk-management/${id}/toggle`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
