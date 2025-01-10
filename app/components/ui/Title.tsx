interface TitleProps {
  text: string | null;
}

const Title = ({ text }: TitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-fit mx-auto gap-1">
      <h2 className="text-4xl">{text}</h2>
      <div className="bg-primary w-8 rounded-full h-1" />
    </div>
  );
};

export default Title;
