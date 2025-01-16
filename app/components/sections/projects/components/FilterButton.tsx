interface buttonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isSelected?: boolean;
}

const FilterButton = ({
  children,
  onClick,
  isSelected = false,
}: buttonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const buttonStyle = isSelected
    ? "!bg-primary text-gray-200 dark:border-gray-700 hover:bg-primary/80"
    : "border-gray-400 dark:border-gray-700 hover:border-primary hover:bg-primary hover:text-gray-200";

  return (
    <button
      className={`animate glass-effect border-[1px] font-medium text-xs rounded-xl px-4 py-2 text-center sm:text-sm ${buttonStyle}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;
