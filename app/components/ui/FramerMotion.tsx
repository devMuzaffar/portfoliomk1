import Image from "next/image";

const FramerMotion = ({size = 16}: {size?: number | `${number}` | undefined}) => {
  return (
    <Image className="object-cover p-[2px]" width={size} height={size} src={'/assets/recents/icons/framer-motion.svg'} alt=""/>
  )
}

export default FramerMotion