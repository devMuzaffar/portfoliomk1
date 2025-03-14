import Image from "next/image";

interface SizeProp {size?: number | `${number}` | undefined}

const Bootstrap = ({size = 16}: SizeProp) => {
  return (
    <Image
      className="object-cover p-[2px]"
      width={size}
      height={size}
      src={"/assets/projects/icons/bootstrap.svg"}
      alt=""
    />
  );
};

export default Bootstrap;
