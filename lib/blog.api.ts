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
