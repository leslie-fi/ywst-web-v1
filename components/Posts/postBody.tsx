// !@ts-expect-error
import PortableText from "@sanity/block-content-to-react";
import { serializers } from "../PortableText/serializers";
import { Post } from "../../index";

const PostBody = ({ body }: { body: Post["body"] }) => {
  return (
    <div className='max-w-4xl mx-auto font-body prose xl:prose-3xl lg:prose-2xl md:prose-2xl sm:prose-2xl xs:prose-2xl prose-xl'>
      <PortableText className='' blocks={body} serializers={serializers} />
    </div>
  );
};

export default PostBody;
