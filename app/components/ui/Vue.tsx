import Image from "next/image"

const Vue = ({size = 16}: {size?: number | `${number}` | undefined}) => {
  return (
    <Image className="object-cover p-[2px]" width={size} height={size} src={'/assets/projects/icons/vue.svg'} alt=""/>
  )
}

export default Vue
