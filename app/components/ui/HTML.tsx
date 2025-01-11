import Image from "next/image";

const HTML = ({size = 16}: {size?: number | `${number}` | undefined}) => {
  return (
    <Image className="object-cover p-[2px]" width={size} height={size} src={'/assets/recents/icons/html.png'} alt=""/>
  )
}

export default HTML