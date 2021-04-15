import { useRouter } from "next/router";
import { request } from "graphql-request";
import { format } from "date-fns";
import React from "react";
import { Post } from "../..";
import Head from 'next/head'
import ErrorPage from 'next/error'
import PostBody from '../../components/Posts/postBody'
import PostHeader from '../../components/Posts/postHeader'
import PostTitle from '../../components/Posts/postTitle'
const BlogPost = ({post}: {post: Post}) => {
  const { _id, _type, title, coverImage, featured,publishedAt, body, slug, excerpt, categories }: Post = post;
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
      return <ErrorPage statusCode={404} />;
    }
  return (
    <article className='mb-10'>
      <Head>
        <title>{title} | YWST</title>
      </Head>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <div className='relative py-16 overflow-hidden'>
            <PostHeader
              _type={_type}
                title={title}
                featured={featured}
              coverImage={coverImage}
              publishedAt={publishedAt}
              excerpt={excerpt}
              categories={categories}
              slug={slug}
            />
            <PostBody body={body!} />
          </div>
        </>)}
    </article>
  );
};

export const postQuery = (slug: string) => `{
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
    publishedAt
    excerpt: excerptRaw
    
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
}`


export default BlogPost;

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: any
  preview: boolean
}) {
  const data: {
    posts: Post[];
  } = await request("https://47nyuv7w.api.sanity.io/v1/graphql/production/default", postQuery(params.slug));
  return {
    props: {
      preview,
      post: data.posts[0]
    },
    revalidate: 600,
  }
}

export async function getStaticPaths() {
  const paths = await request(
    `${"https://47nyuv7w.api.sanity.io/v1/graphql/production/default"}`,
    `{
    allPost{
      publishedAt
      slug {
        current
      }
    }
  }`
  );
  return {
    paths: paths.allPost.map(
      (slug: { slug: { current: string }; publishedAt: string }) => {
        return {
          params: { slug: `${slug.slug.current}`, date: slug.publishedAt },
        };
      }
    ),
    fallback: false,
  };
}
