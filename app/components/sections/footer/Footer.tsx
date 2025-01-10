const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="glass-effect desktop-px mobile-px">
      <div className="border-[1px] border-gray-200 dark:border-gray-600" />
      <div className="text-gray-700 flex items-center justify-center w-full h-full py-8">
        <p className="text-xs dark:text-gray-200 sm:text-sm">
          Copyright © {currentYear} Designed with 💖. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
