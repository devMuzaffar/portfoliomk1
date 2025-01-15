"use client";

interface buttonProps {
    children: React.ReactNode | null,
    label: string | undefined,
}

const ViewButton = ({children, label} : buttonProps) => {

  return (
    <button className="animate rounded-full bg-gray-300 text-black cursor-pointer flex justify-center items-center p-2 w-9 h-9 hover:bg-gray-400 hover:-translate-y-1" title={label}>{children}</button>
  )
}

export default ViewButton