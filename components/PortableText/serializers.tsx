import { PortableTextSerializers } from "@sanity/block-content-to-react";

import dynamic from "next/dynamic";

const YouTubePlayer = dynamic(import('react-player/youtube'))
const Figure = dynamic(import("./Figure"));
export const serializers: PortableTextSerializers = {
  types: {
    instagramPost: ({ node }: any) => (
      <a href={node.url}/>
    ),
    figure: Figure,
    videoEmbed: ({ node }: any) => ( 
    <div className='w-full'>
        <YouTubePlayer
          url={node.url}
          autoplay={false}
          pip
          width='100%' />
      </div>
    )
  },
};
