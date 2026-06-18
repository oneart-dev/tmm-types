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
  ControllersApiSuccessControllersArtifactManifestResponse,
  ControllersApiWarningResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Internal<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Streams the tmm-ws binary for the given version and arch. Internal-token gated.
   *
   * @tags artifacts, internal
   * @name ArtifactsDetail
   * @summary Download artifact binary
   * @request GET:/internal/artifacts/{version}/{arch}
   */
  artifactsDetail = (version: string, arch: string, params: RequestParams = {}) =>
    this.request<File, ControllersApiErrorResponse>({
      path: `/internal/artifacts/${version}/${arch}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Returns the manifest JSON, Ed25519 signature (hex), and signer key (hex) so node-agent can verify before executing. Internal-token gated.
   *
   * @tags artifacts, internal
   * @name ArtifactsManifestDetail
   * @summary Get artifact manifest + signature
   * @request GET:/internal/artifacts/{version}/{arch}/manifest
   */
  artifactsManifestDetail = (version: string, arch: string, params: RequestParams = {}) =>
    this.request<
      ControllersApiSuccessControllersArtifactManifestResponse,
      ControllersApiErrorResponse | ControllersApiWarningResponse
    >({
      path: `/internal/artifacts/${version}/${arch}/manifest`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the hex sha256 of the stored binary. Internal-token gated.
   *
   * @tags artifacts, internal
   * @name ArtifactsSha256Detail
   * @summary Get artifact SHA256
   * @request GET:/internal/artifacts/{version}/{arch}/sha256
   */
  artifactsSha256Detail = (version: string, arch: string, params: RequestParams = {}) =>
    this.request<string, ControllersApiErrorResponse>({
      path: `/internal/artifacts/${version}/${arch}/sha256`,
      method: "GET",
      ...params,
    });
}
