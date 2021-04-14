import { format } from "date-fns";
import client from "../../lib/sanity";
import { useState, useEffect } from "react";
import Link from "next/link";


const InternalLink = ({ mark, children }: any) => {
  const [postUrl, setPostUrl] = useState("");

  const query = '*[_type == "post" && _id == $_ref ] {publishedAt, slug}';
  const sanityClient = client;
  useEffect(() => {
    const getSlug = async () => {
      const querySlug = await sanityClient.fetch(query, {
        _ref: mark.reference._ref,
      });
      const slug = await querySlug;

      setPostUrl(
        `/blog/${
          slug[0].slug!.current
        }`
      );
    };
    getSlug();
  }, []);

  return (
    <Link href={postUrl} as={postUrl}>
      {children[0]}
    </Link>
  );
};

export default InternalLink;
