interface buttonType {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void
}
  
  const HeroButton = ({ children, className, onClick }: buttonType) => {

    const handleEvent = () => {
      if(onClick){
        onClick();
      }
    }

    return (
      <button
        className={`animate rounded-md text-white flex justify-between items-center gap-2 p-4 hover:-translate-y-1 hover:shadow-md  ${className}`}
        onClick={handleEvent}
      >
        {children}
      </button>
    );
  };
  
  export default HeroButton;
  