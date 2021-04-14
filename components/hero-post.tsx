import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from '../components/Image/coverImage'
import Link from 'next/link'
import { ExcerptPortableText, Author, Post, MainImage, Figure } from '..'
import PortableText from "@sanity/block-content-to-react";
type AProps = { name: string; image: MainImage; }
type Props = {
  title: string
  coverImage: Figure
  publishedAt: string
  excerpt: any
  author: AProps
  slug: string
}
const img =
    "https://cdn.sanity.io/images/3do82whm/next/46f420efe0408caaf07eb2c4e6989323001f080f-1200x802.jpg?rect=129,0,802,802&w=200&h=200&fit=clip&auto=format";
const HeroPost = ({
  title,
  coverImage,
  publishedAt,
  excerpt,
  author,
  slug,
}: Props) => {
  console.log({coverImage})
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage
          featured
          preview={false}
          title={title}
          src={coverImage}
          slug={`/blog/${slug}`}
        />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
            <Link as={`/blog/${slug}`} href='/blog/[slug]'>
              <a className='hover:underline'>{title}</a>
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <DateFormatter dateString={publishedAt} />
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'><PortableText blocks={excerpt}/></p>
          <Avatar
            name={author.name || "anonymous"}
            image={author.image?.asset.url ?? img}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroPost
