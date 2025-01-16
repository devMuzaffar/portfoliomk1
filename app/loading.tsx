import { HashLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
        <HashLoader className="dark:invert" size={64}/>
    </div>
  )
}

export default Loading