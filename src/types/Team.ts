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
  ControllersApiSuccessArrayServicesTeamTopRow,
  ControllersApiSuccessResponse,
  ControllersApiSuccessServicesTeam,
  ControllersApiSuccessServicesTeamMember,
  ControllersApiSuccessServicesTeamWithStatsAndMember,
  ControllersApiWarningResponse,
  ControllersUnauthorizedResponse,
  DtoTeamCreateForm,
  DtoTeamMemberCreateForm,
  DtoTeamMemberUpdateForm,
  DtoTeamUpdateForm,
  ServicesPaginationResponseArrayServicesTeamMember,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Team<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates empty team. Owner may join team but its not required.
   *
   * @tags team
   * @name TeamUpdate
   * @summary create new team
   * @request PUT:/team
   * @secure
   */
  teamUpdate = (payload: DtoTeamCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesTeam,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get team by ID with count of active members. If endpoint is called by owner, it will return pending members count as well. If team is private, user must provide invite code to get access to team data. If user submit join request, current member will be returned. User can revoke join request at any time.
   *
   * @tags team
   * @name TeamDetail
   * @summary Get team by ID
   * @request GET:/team/{id}
   * @secure
   */
  teamDetail = (
    id: number,
    query?: {
      /** Team invite code */
      invite_code?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessServicesTeamWithStatsAndMember,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update team name, description
   *
   * @tags team
   * @name TeamCreate
   * @summary update team
   * @request POST:/team/{id}
   * @secure
   */
  teamCreate = (id: number, payload: DtoTeamUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/team/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Deleting team
   *
   * @tags team
   * @name TeamDelete
   * @summary delete team
   * @request DELETE:/team/{id}
   * @secure
   */
  teamDelete = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessResponse,
      ControllersUnauthorizedResponse | ControllersApiWarningResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates join request for the team. If team is private, user
   *
   * @tags team
   * @name JoinUpdate
   * @summary join team
   * @request PUT:/team/{id}/join
   * @secure
   */
  joinUpdate = (id: number, payload: DtoTeamMemberCreateForm, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessServicesTeamMember,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}/join`,
      method: "PUT",
      body: payload,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description User can revoke join request. Team owner can decline or accept
   *
   * @tags team
   * @name JoinCreate
   * @summary Update join request
   * @request POST:/team/{id}/join/{user_id}
   * @secure
   */
  joinCreate = (id: number, userId: number, payload: DtoTeamMemberUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/team/${id}/join/${userId}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Get list of team members. Available only for team owner if team is private. Only owner can use filters to search. Nobody can see revoked members. By default only active members are showing.
   *
   * @tags team
   * @name MembersDetail
   * @summary Get team members
   * @request GET:/team/{id}/members
   * @secure
   */
  membersDetail = (
    id: number,
    query?: {
      /**
       * @min 1
       * @example 1
       */
      page?: number;
      itemsPerPage?: number;
      sortBy?: string;
      sortDesc?: boolean;
      /**
       * Partion name search is supported
       * @example "name"
       */
      name?: string;
      /** @example 1 */
      show_pnl?: 1 | 2;
      /**
       * Default value is 2 (active). Nobody can see revoked members.
       * @example 2
       */
      status?: 1 | 2 | 3 | 4;
      /**
       * @min 1
       * @example 1
       */
      user_id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ServicesPaginationResponseArrayServicesTeamMember,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}/members`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get top members of team
   *
   * @tags team
   * @name GetTeam
   * @summary Members top
   * @request GET:/team/{id}/top
   * @secure
   */
  getTeam = (
    id: number,
    query: {
      /** @example [1] */
      exchange_id?: (
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 40
        | 11
        | 21
        | 23
        | 24
        | 25
        | 12
        | 22
        | 13
        | 14
        | 15
        | 32
        | 33
      )[];
      /** @example "today" */
      period: "today" | "week" | "month";
      /** @example "pnl" */
      type: "pnl" | "percent" | "volume";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessArrayServicesTeamTopRow,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/team/${id}/top`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
