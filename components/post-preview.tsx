import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Author, ExcerptPortableText } from '..'
import PortableText from "@sanity/block-content-to-react";
import { serializers } from './PortableText/serializers'

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: ExcerptPortableText;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const img =
    "https://cdn.sanity.io/images/3do82whm/next/46f420efe0408caaf07eb2c4e6989323001f080f-1200x802.jpg?rect=129,0,802,802&w=200&h=200&fit=clip&auto=format";
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/blog/${slug}`} href='/blog/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-lg leading-relaxed mb-4'>
        {" "}
        <PortableText className='' blocks={excerpt} serializers={serializers} />
      </p>
      <Avatar
        name={author.name || "anonymous"}
        image={author.image?.asset.url}
      />
    </div>
  );
}

export default PostPreview
