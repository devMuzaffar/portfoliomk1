import Image from "next/image"

const Mui = ({size = 16}: {size?: number | `${number}` | undefined}) => {
  return (
    <Image className="object-cover p-[2px]" width={size} height={size} src={'/assets/recents/icons/mui.png'} alt=""/>
  )
}

export default Mui