import { Post } from "..";

export const getAllPosts = `{
  posts: allPost(limit: 9, sort: [ { publishedAt: DESC } ]){
     _id
    title
    body: bodyRaw
    author {
        name
        slug {
          current
        }
        image {
          alt
          asset {
            url
          }
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    slug {
      current
    }
    categories {
      title
    
    }
    publishedAt
    excerpt: excerptRaw
    featured
   coverImage {
      alt
      
      asset {
        metadata{
          dimensions {
            aspectRatio
            width
            height
          }
          lqip
        }
        url
      }
    }
  }
}`;

export const getMorePosts = (index: number) => `{
  posts: allPost(limit: 9, offset: ${
    9 * index
  }, sort: [ { publishedAt: DESC } ], where: { featured: { neq: true }}){
     _id
    title
    body: bodyRaw
    author {
        name
        slug {
          current
        }
        image {
          alt
          asset {
            url
          }
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    slug {
      current
    }
    categories {
      title
    
    }
    publishedAt
    excerpt: excerptRaw
    featured
   coverImage {
      alt
      
      asset {
        metadata{
          dimensions {
            aspectRatio
            width
            height
          }
          lqip
        }
        url
      }
    }
  }
}`;

export const getPostsBySlug = (slug: string) => `{
posts: allPost(where: {slug: {current: {eq: "${slug}"}}}) {
  _id
    title
    body: bodyRaw
    slug {
      current
    }
    categories {
      title
    
    }
    author {
        name
        slug {
          current
        }
        image {
          alt
          asset {
            url
          }
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    publishedAt
    excerpt: excerptRaw
    featured
   coverImage {
      alt
      
      asset {
        metadata{
          dimensions {
            aspectRatio
            width
            height
          }
          lqip
        }
        url
      }
    }
  }
  }
}`;

const postFields = `
  _id,
  name,
  title,
  publishedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, image},
`;

export const indexQuery = `
*[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc) | [0...2] {
    content,
    ${postFields}
  }
}`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;