/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="sanity/types" />

import Sanity from '@sanity/types'

export interface Author extends Sanity.Document {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * image — `mainImage`
   *
   *
   */
  image?: MainImage;

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<Sanity.Keyed<Sanity.Block>>;
}

/**
 * Bookmarks
 *
 *
 */
export interface Bookmark extends Sanity.Document {
  _type: "bookmark";

  /**
   * Title — `string`
   *
   *
   */
  pageTitle?: string;

  /**
   * URL — `string`
   *
   *
   */
  url?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Save Date — `datetime`
   *
   *
   */
  time?: string;
}

/**
 * Category
 *
 *
 */
export interface Category extends Sanity.Document {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Newsletter
 *
 *
 */
export interface Newsletter extends Sanity.Document {
  _type: "newsletter";

  /**
   * Subject Line — `string`
   *
   *
   */
  title?: string;

  /**
   * Cover Image — `figure`
   *
   *
   */
  figure?: Figure;

  /**
   * Published at — `datetime`
   *
   * This can be used to schedule post for publishing
   */
  publishedAt?: string;

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  body?: BodyPortableText;

  /**
   * Bookmarks — `array`
   *
   *
   */
  bookmarks?: Array<Sanity.KeyedReference<Bookmark>>;
}

export interface Page extends Sanity.Document {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Cover Image — `figure`
   *
   *
   */
  figure?: Figure;

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  body?: BodyPortableText;

  /**
   * Excerpt — `excerptPortableText`
   *
   * This ends up on summary pages, on Google, when people share your post in social media.
   */
  excerpt?: ExcerptPortableText;

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;
}

export interface Post extends Sanity.Document {
  _type: "post";
  _id?: string;
  title: string;
  featured: boolean;
  author?: Sanity.Reference<Author>;
  body?: BodyPortableText;
  categories?: Array<Sanity.KeyedReference<Category>>;
  excerpt?: ExcerptPortableText;
  slug?: {
    _type: "slug";
    current: string;
  };
  publishedAt: string;
  coverImage?: Figure;
  seo?: Seo;
}

export interface Route extends Sanity.Document {
  _type: "route";

  /**
   * page — `reference`
   *
   * The page you want to appear at this path. Remember it needs to be published.
   */
  page?: Sanity.Reference<Page>;

  /**
   * Path — `slug`
   *
   * This is the website path the page will accessible on
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Include in sitemap — `boolean`
   *
   * For search engines. Will be generateed to /sitemap.xml
   */
  includeInSitemap?: boolean;

  /**
   * Disallow in robots.txt — `boolean`
   *
   * Hide this route for search engines like google
   */
  disallowRobots?: boolean;
}

export interface SiteSettings extends Sanity.Document {
  _type: "siteSettings";

  /**
   * Site Title — `string`
   *
   * The name of your site, usually your company/brand name.
   */
  siteTitle?: string;

  /**
   * Default Meta Title — `string`
   *
   * Title used for search engines and browsers.
   */
  metaTitle?: string;

  /**
   * Default Meta Description — `text`
   *
   * Description for search engines.
   */
  metaDesc?: string;

  /**
   * Default Meta Keywords — `tags`
   *
   * Keywords for search engines
   */
  tags?: Tags;

  /**
   * Default Share Title — `string`
   *
   * TItle used for social sharing cards.
   */
  shareTitle?: string;

  /**
   * Default Share Description — `text`
   *
   * Description for social sharing cards.
   */
  shareDesc?: string;

  /**
   * Default Share Graphic — `mainImage`
   *
   * Share graphics will be cropped to 1200x630
   */
  mainImage?: MainImage;
}

export type ExcerptPortableText = Array<Sanity.KeyedObject<Sanity.Block>>;

export type VideoEmbed = {
  _type: "videoEmbed";
  /**
   * url — `url`
   *
   *
   */
  url?: string;
};
export type BodyPortableText = Array<
  | Sanity.KeyedObject<Sanity.Block[]>
  | Sanity.KeyedObject<InstagramPost>
  | Sanity.KeyedObject<Figure>
  | Sanity.KeyedObject<VideoEmbed>
  >;
export type Figure = {
  _type: "figure";
  asset: Sanity.Asset;
  crop?: Sanity.ImageCrop;
  hotspot?: Sanity.ImageHotspot;

  /**
   * Display Size (aspect ratio) — `number`
   *
   *
   */
  customRatio?: number;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type InstagramPost = {
  _type: "instagramPost";
  /**
   * url — `url`
   *
   * Visit an Instagram post in a browser and copy the URL.
   */
  url?: string;
};

export type MainImage = {
  _type: "mainImage";
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessibility.
   */
  alt?: string;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta Description — `text`
   *
   * Description for search engines.
   */
  metaDesc?: string;

  /**
   * Keywords — `tags`
   *
   * Keywords for search engines
   */
  tags?: Tags;

  /**
   * Share Graphic — `figure`
   *
   * Share graphics will be cropped to 1200x630, and replace any cover image already uploaded
   */
  ogImage?: Figure;
};

export type TextSection = {
  _type: "textSection";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Text — `bodyPortableText`
   *
   *
   */
  text?: BodyPortableText;
};

export type Tags = any;