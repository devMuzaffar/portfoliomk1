// Svelte and SvelteKit Icons are same

import Image from "next/image"

const SvelteKit = ({size = 16}: {size?: number | `${number}` | undefined}) => {
  return (
    <Image className="object-cover p-[2px]" width={size} height={size} src={'/assets/projects/icons/svelte.png'} alt=""/>
  )
}

export default SvelteKit
