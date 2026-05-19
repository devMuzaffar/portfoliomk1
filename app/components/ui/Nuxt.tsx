import Image from "next/image"

const Nuxt = ({size = 16}: {size?: number | `${number}` | undefined}) => {
  return (
    <Image className="object-cover p-[2px]" width={size} height={size} src={'/assets/projects/icons/nuxt.png'} alt=""/>
  )
}

export default Nuxt
