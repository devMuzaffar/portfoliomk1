import Image from "next/image";

const Bootstrap = ({size = 16}: {size?: number | `${number}` | undefined}) => {
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
