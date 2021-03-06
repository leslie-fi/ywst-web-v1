import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};
import PortableText from "@sanity/block-content-to-react";
import { serializers } from "./PortableText/serializers";
import { Post } from "..";

const PostBody = ({ body }: { body: Post["body"] }) => {
  return (
    <div className='max-w-2xl mx-auto'>
      <PortableText className='' blocks={body} serializers={serializers} />
    </div>
  );
};

export default PostBody;
