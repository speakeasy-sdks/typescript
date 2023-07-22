/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * pet response
 */
export class Pet extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag?: string;
}
