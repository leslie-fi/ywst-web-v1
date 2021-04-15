import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from "next-sanity";
import { sanityConfig } from "./config";

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: SanityImageSource) =>
  createImageUrlBuilder(sanityConfig).image(source).auto("format").fit("max");

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig
);


