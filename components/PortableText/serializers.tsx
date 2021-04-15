import { PortableTextSerializers } from "@sanity/block-content-to-react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(import("react-player/lazy"));
const Figure = dynamic(import("./Figure"));
import InstagramEmbed from "react-instagram-embed";

const token = process.env.FB_CLIENT_ACCESS_TOKEN


export const serializers: PortableTextSerializers = {
  types: {
    instagramPost: ({ node }: any) => {
      if (!node.url) return null;
      return (
        <InstagramEmbed
          clientAccessToken={token ?? `123|456`}
          className='container mx-auto mt-6 mb-6'
          url={node.url}
          maxWidth={360}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      );
    },
    figure: Figure,
    videoEmbed: ({ node }: any) => (
      <div className='w-full'>
        <ReactPlayer
          className='mt-6 mb-6'
          url={node.url}
          controls
          autoplay={false}
          pip
          width='100%'
        />
      </div>
    ),
  },
};
