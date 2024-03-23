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
  ControllersMentorGroupResponse,
  ControllersMentorGroupsActiveResponse,
  ControllersMentorListResponse,
  ControllersMentorResponse,
  ControllersUnauthorizedResponse,
  DtoMentorGroupForm,
  DtoMentorGroupJoinRequestForm,
  DtoMentorNoteUpdateForm,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class MentorGroup<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Create mentorship group
   *
   * @tags mentor-group
   * @name MentorGroupUpdate
   * @summary Create mentorship group
   * @request PUT:/mentor-group
   * @secure
   */
  mentorGroupUpdate = (payload: DtoMentorGroupForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description List of mentor groups belongs to user. Joined by user. Public groups.
   *
   * @tags mentor-group
   * @name MentorGroupList
   * @summary List mentor groups
   * @request GET:/mentor-group/
   * @secure
   */
  mentorGroupList = (
    query?: {
      /** Language */
      language?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ControllersMentorListResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description List mentor groups with accepted students
   *
   * @tags mentor-group
   * @name ActiveList
   * @summary List mentor groups with accepted students
   * @request GET:/mentor-group/active
   * @secure
   */
  activeList = (params: RequestParams = {}) =>
    this.request<
      ControllersMentorGroupsActiveResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/mentor-group/active`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Return group if invite code is valid
   *
   * @tags mentor-group
   * @name InviteDetail
   * @summary Return group if invite code is valid
   * @request GET:/mentor-group/invite/{invite}
   * @secure
   */
  inviteDetail = (invite: string, params: RequestParams = {}) =>
    this.request<ControllersMentorResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>({
      path: `/mentor-group/invite/${invite}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Set all notes as read belongs to the trade. Available only for students.
   *
   * @tags mentor-group
   * @name NoteReadCreate
   * @summary Set note as read
   * @request POST:/mentor-group/note/read/{trade_id}
   * @secure
   */
  noteReadCreate = (tradeId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/note/read/${tradeId}`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Create note for the trade. Available only for mentors.
   *
   * @tags mentor-group
   * @name NoteCreate
   * @summary Create note for the trade
   * @request POST:/mentor-group/note/{user_id}/{trade_id}
   * @secure
   */
  noteCreate = (userId: number, tradeId: number, payload: DtoMentorNoteUpdateForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/note/${userId}/${tradeId}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Available for group owner only.
   *
   * @tags mentor-group
   * @name MentorGroupDetail
   * @summary Get mentorship group by id
   * @request GET:/mentor-group/{id}
   * @secure
   */
  mentorGroupDetail = (id: number, params: RequestParams = {}) =>
    this.request<
      ControllersMentorGroupResponse,
      ControllersUnauthorizedResponse | string | ControllersApiErrorResponse
    >({
      path: `/mentor-group/${id}`,
      method: "GET",
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update mentorship group
   *
   * @tags mentor-group
   * @name MentorGroupCreate
   * @summary Update mentorship group
   * @request POST:/mentor-group/{id}
   * @secure
   */
  mentorGroupCreate = (id: number, payload: DtoMentorGroupForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}`,
        method: "POST",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Delete mentorship group
   *
   * @tags mentor-group
   * @name MentorGroupDelete
   * @summary Delete mentorship group
   * @request DELETE:/mentor-group/{id}
   * @secure
   */
  mentorGroupDelete = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description User can exit mentorship group at any time.
   *
   * @tags mentor-group
   * @name ExitCreate
   * @summary Exit mentorship group
   * @request POST:/mentor-group/{id}/exit
   * @secure
   */
  exitCreate = (id: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}/exit`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Send request to join mentorship group. If group is private invite code is required. All requests are pending until group owner approves or rejects them.
   *
   * @tags mentor-group
   * @name JoinUpdate
   * @summary Send request to join mentorship group
   * @request PUT:/mentor-group/{id}/join
   * @secure
   */
  joinUpdate = (id: number, payload: DtoMentorGroupJoinRequestForm, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}/join`,
        method: "PUT",
        body: payload,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
  /**
   * @description Mentor of sub mentor can accept or decline join request. If request is accepted, student will be added to mentor group and receive email notification. If request is declined, student will receive email notification.
   *
   * @tags mentor-group
   * @name MentorGroupCreate2
   * @summary Accept or decline join request
   * @request POST:/mentor-group/{id}/{status}/{user_id}
   * @originalName mentorGroupCreate
   * @duplicate
   * @secure
   */
  mentorGroupCreate2 = (id: number, status: string, userId: number, params: RequestParams = {}) =>
    this.request<ControllersApiSuccessResponse, ControllersUnauthorizedResponse | string | ControllersApiErrorResponse>(
      {
        path: `/mentor-group/${id}/${status}/${userId}`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      },
    );
}
