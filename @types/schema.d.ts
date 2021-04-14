import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
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
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Bookmarks
 *
 *
 */
export interface Bookmark extends SanityDocument {
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
export interface Category extends SanityDocument {
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
export interface Newsletter extends SanityDocument {
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
  bookmarks?: Array<SanityKeyedReference<Bookmark>>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
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

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Excerpt — `excerptPortableText`
   *
   * This ends up on summary pages, on Google, when people share your post in social media.
   */
  excerpt?: ExcerptPortableText;

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

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
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   * This can be used to schedule post for publishing
   */
  publishedAt?: string;

  /**
   * Seo/Social — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Routes
 *
 *
 */
export interface Route extends SanityDocument {
  _type: "route";

  /**
   * page — `reference`
   *
   * The page you want to appear at this path. Remember it needs to be published.
   */
  page?: SanityReference<Page>;

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

/**
 * Site Settings
 *
 *
 */
export interface SiteSettings extends SanityDocument {
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

export type BodyPortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<InstagramPost>
  | SanityKeyed<Figure>
  | SanityKeyed<VideoEmbed>
>;

export type ExcerptPortableText = Array<SanityKeyed<SanityBlock>>;

export type VideoEmbed = {
  _type: "videoEmbed";
  /**
   * url — `url`
   *
   *
   */
  url?: string;
};

export type Figure = {
  _type: "figure";
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

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

export type Documents =
  | Author
  | Bookmark
  | Category
  | Newsletter
  | Page
  | Post
  | Route
  | SiteSettings;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Tags = any;
