import { LuSend } from "react-icons/lu";

const FormBlock = () => {
  return (
    <form className="flex flex-col justify-center gap-8 md:p-8" action="">
      {/* Email */}
      <div className="animate border-2 border-transparent flex flex-col gap-2 rounded-xl bg-primary/10 p-6 font-medium text-sm md:text-lg focus-within:border-2 focus-within:border-primary">
        <label htmlFor="email">Email</label>
        <input
          className="font-normal text-gray-800 outline-none bg-transparent dark:text-gray-200"
          type="email"
          id="email"
          required
        />
      </div>

      {/* Message */}
      <div className="animate border-2 border-transparent flex flex-col gap-2 rounded-xl bg-primary/10 p-6 font-medium text-sm md:text-lg focus-within:border-2 focus-within:border-primary">
        <label htmlFor="message">Message</label>
        <textarea
          className="font-normal text-gray-800 outline-none bg-transparent dark:text-gray-200"
          id="message"
          required
        />
      </div>

      {/* Button */}
      <button className="animate rounded-xl bg-primary text-white text-lg flex justify-between items-center p-4 hover:opacity-70 hover:-translate-y-1 hover:shadow-md md:w-1/2">
        Send <LuSend size={18} />
      </button>
    </form>
  );
};

export default FormBlock;
