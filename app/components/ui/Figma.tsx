import Image from "next/image"

const Figma = ({size = 16}: {size?: number | `${number}` | undefined}) => {
  return (
    <Image className="object-cover p-[2px]" width={size} height={size} src={'/assets/recents/icons/figma.png'} alt=""/>
  )
}

export default Figma