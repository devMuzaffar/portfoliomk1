interface buttonType {
    children: React.ReactNode;
    className?: string;
}
  
  const HeroButton = ({ children, className }: buttonType) => {
    return (
      <button
        className={`animate rounded-md text-white flex justify-between items-center gap-2 p-4 hover:-translate-y-1 hover:shadow-md  ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default HeroButton;
  