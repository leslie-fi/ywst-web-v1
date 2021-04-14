import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import {Author} from '..'

type Props = {
  title: string
  coverImage: string
  publishedAt: string
  author: Author
}

const PostHeader = ({ title, coverImage, publishedAt, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name ?? 'anon'} picture={author.image?.asset.url} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name!} picture={author.image?.asset.url} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={publishedAt} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
