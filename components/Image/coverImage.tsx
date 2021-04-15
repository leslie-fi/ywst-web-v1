import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@lib/sanity";

const yogaDefaultImg = `https://cdn.pixabay.com/photo/2017/08/20/15/51/yoga-2662234_1280.jpg`;
const MainImage = ({ title, src, slug, preview, featured }: any) => {
  const imageFile = src && urlForImage(src).width(710).height(455).format("jpg").url()
  
  const lqip= urlForImage(src ?? yogaDefaultImg)
      .format("jpg")
      .width(45)
      .height(30)
      .quality(10)
      .url() || "https://reddit.com/favicon.png";
const bigImage = urlForImage(src).width(2000).height(1000).format("jpg").url();
  const image = featured ? (
    <div className='relative overflow-hidden rounded-lg'>
      <Image
        src={imageFile || yogaDefaultImg}
        width={710}
        height={455}
        alt={`Cover Image for ${title}`}
        layout={"responsive"}
        priority
        className='object-cover shadow-inner rounded-lg'
      />
    </div>
  ) : (
    <div className='relative overflow-hidden inner-shadow'>
      <div className='absolute overflow-hidden object-cover'>
        <Image
          src={bigImage || yogaDefaultImg}
          alt={`Cover Image for ${src.asset.title}`}
          width={2000}
          height={1000}
          objectFit='contain'
          quality={100}
          priority
        />
      </div>
      <Image
        src={
          urlForImage(src)
            .width(preview ? 710 : 1500)
            .height(preview ? 455 : 1000)
            .format("jpg")
            .url() || yogaDefaultImg
        }
        width={preview ? 710 : 1500}
        height={preview ? 455 : 1000}
        alt={`Cover Image for ${title}`}
        layout={"responsive"}
        loading='lazy'
        className={`shadow-inner hover:shadow-md transition-opacity ease-out opacity-100 duration-500 ${
          preview ? "" : "rounded-lg"
        }`}
      />
    </div>
  );

  return (
    <div className='sm:mx-0 z-0'>
      {slug ? (
        <Link as={`${slug}`} href='/blog/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default MainImage;
