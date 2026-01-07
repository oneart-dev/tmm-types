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
  ControllersApiSuccessArrayServicesTeamTopData,
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
   * @description Creates a new, empty team. The owner is not required to be a member.
   *
   * @tags team
   * @name TeamUpdate
   * @summary Create New Team
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
   * @description Retrieves team details by ID, including a count of active members. If called by the owner, it also returns the pending members count. For private teams, an invite code is required to access data. If the user has a pending join request, their membership status will be returned. A user can revoke their join request at any time.
   *
   * @tags team
   * @name TeamDetail
   * @summary Get Team by ID
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
   * @description Updates a team's name and description.
   *
   * @tags team
   * @name TeamCreate
   * @summary Update Team
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
   * @description Deletes a team.
   *
   * @tags team
   * @name TeamDelete
   * @summary Delete Team
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
   * @description Creates a request to join a team. For private teams, an invite code is required, and the team owner must approve the request.
   *
   * @tags team
   * @name JoinUpdate
   * @summary Join Team
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
   * @description Allows a user to revoke a join request, or a team owner to accept or decline it. A revoked request cannot be altered by the team owner.
   *
   * @tags team
   * @name JoinCreate
   * @summary Update Join Request
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
   * @description Retrieves a list of team members. For private teams, this is available only to the team owner, who can also use filters for searching. Revoked members are not visible, and by default, only active members are shown.
   *
   * @tags team
   * @name MembersDetail
   * @summary Get Team Members
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
   * @description Retrieves the top-performing members of a team.
   *
   * @tags team
   * @name GetTeam
   * @summary Get Top Team Members
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
        | 41
        | 8
        | 9
        | 10
        | 40
        | 46
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
        | 42
        | 43
        | 44
        | 45
        | 50
      )[];
      /** @example "today" */
      period: "today" | "yesterday" | "7days" | "14days" | "30days" | "custom";
      /** @example "false" */
      sortAsc?: "true" | "false";
      /** @example "pnl" */
      type: "pnl" | "percent" | "volume";
    },
    params: RequestParams = {},
  ) =>
    this.request<
      ControllersApiSuccessArrayServicesTeamTopData,
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
