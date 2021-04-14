import { useState, useEffect } from "react";
import { request } from "graphql-request";
import type { Post } from "../";
import { getMorePosts } from "./blog.api";

// Custom Hook that manages loading more posts on scroll
const useLoadMore = (posts: Post[]) => {
  const [allPosts, setAllPosts] = useState<Post[]>(posts);
  const [index, setIndex] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noMorePosts, setNoMorePosts] = useState<boolean>(false);

  useEffect(() => {
    setAllPosts(posts);
  }, []);

  const loadMore = async () => {
    setIsLoading(true);

    await request(`${process.env.SANITY_API}`, getMorePosts(index)).then(
      (morePosts: { posts: Post[] }): void => {
        if (morePosts.posts.length < 6) {
          setNoMorePosts(true);
          // @ts-ignore
          setAllPosts((allPosts) => [...allPosts, ...morePosts.posts]);
          setIsLoading(false);
          return;
        }
        // @ts-ignore
        setAllPosts((allPosts) => [...allPosts, ...morePosts.posts]);
        setIndex(index + 1);
        setIsLoading(false);
        return;
      }
    );
  };
  return { isLoading, noMorePosts, allPosts, loadMore };
};

export default useLoadMore;
