import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getMorePosts } from '../lib/blog.api';
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import {Post }from '..'
import { request } from 'graphql-request'

type Props = {
  posts: Post[]
}

const Index = ({ posts }: Props) => {
   const heroPost = posts[0];
  const morePosts = posts.slice(1);
  console.log(posts[0])
  console.log({morePosts})
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              publishedAt={heroPost.publishedAt}
              author={heroPost.author}
              slug={heroPost.slug!.current!}
              excerpt={heroPost.excerpt || 
            ''}
            />
          )} {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps({ preview = false }) {
  const data: {
    posts: Post[];
  } = await request(`${process.env.SANITY_API}`, getAllPosts);



  return {
    props: {
      preview,
      posts: data.posts,
    },
    revalidate: 600,
  }
}