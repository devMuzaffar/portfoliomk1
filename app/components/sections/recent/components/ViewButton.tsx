"use client";

interface buttonProps {
    children: React.ReactNode | null,
    label: string | undefined,
}

const ViewButton = ({children, label} : buttonProps) => {

  return (
    <button className="animate rounded-full bg-gray-200 text-black cursor-pointer p-2 w-8 hover:bg-gray-400" title={label}>{children}</button>
  )
}

export default ViewButton