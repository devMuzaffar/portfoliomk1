import Image from "next/image";

const Chakra = ({size = 16}: {size?: number | `${number}` | undefined}) => {
  return (
    <Image
      className="object-cover p-[2px]"
      width={size}
      height={size}
      src={"/assets/projects/icons/chakra.png"}
      alt=""
    />
  );
};

export default Chakra