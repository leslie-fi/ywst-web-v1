import { MainImage, Author } from ".."
import {urlFor} from '../lib/sanity'


type AProps = { name: string; image: string };
const img = "https://cdn.sanity.io/images/3do82whm/next/46f420efe0408caaf07eb2c4e6989323001f080f-1200x802.jpg?rect=129,0,802,802&w=200&h=200&fit=clip&auto=format";
const Avatar = ({ name, image }: AProps) => {
  
  return (
    <div className="flex items-center">
      <img src={image} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
