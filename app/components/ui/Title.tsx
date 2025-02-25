interface TitleProps {
  text: string | null;
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-1 pb-4 md:pb-8">
      <h2 className="text-3xl sm:text-4xl text-center">{text}</h2>
      <div className="bg-primary w-8 rounded-full h-1" />
    </div>
  );
};

export default Title;
