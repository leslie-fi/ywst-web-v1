import Image from "next/image";
import { urlForImage } from "@lib/sanity";
export const Figure = (props: any) => {
  const { asset } = props.node;

  const dimensions = {
    width: asset._ref.split("-")[2].split("x")[0],
    height: asset._ref.split("-")[2].split("x")[1],
    aspectRatio:
      Math.round(
        (asset._ref.split("-")[2].split("x")[0] /
          asset._ref.split("-")[2].split("x")[1]) *
          100
      ) / 100,
  };

  if (!asset) {
    return null;
  }

  if (asset.extension === "gif") {
    return (
      <figure>
        <img
          src={asset.url}
          alt={props.alt}
          loading='lazy'
          className='w-full'
        />
        <figcaption>{props.node.alt}</figcaption>
      </figure>
    );
  }

  return (
    <figure className='relative rounded-lg'>
      <div className='absolute overflow-hidden object-cover rounded-lg'>
        <Image
          src={asset.url}
          alt={`Cover Image for ${asset.title || 'x'}`}
          width={896}
          height={896 / dimensions.aspectRatio}
          objectFit='contain'
          className={"rounded-lg"}
          quality={100}
        />
      </div>
      <Image
        src={
          urlForImage(asset).width(896).format("jpg").quality(95).url() ||
          "https://reddit.com/favicon.png"
        }
        width={896}
        height={896 / dimensions.aspectRatio}
        alt={`Cover Image for ${asset.title || 'ok'}`}
        loading='lazy'
        quality={100}
        layout={"responsive"}
        objectFit='cover'
        className={`w-full object-cover shadow-inner hover:shadow-md transition-opacity ease-out duration-500 rounded-lg`}
      />
      <figcaption>{props.alt || 'alt'}</figcaption>
    </figure>
  );
};

export default Figure;
