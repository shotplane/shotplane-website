// import LottieAnimator from "./lottie-animator";

import { AiOutlineLoading } from "react-icons/ai";

const PageLoading = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return <></>;

  return (
    <div className="fixed w-screen h-screen bg-current opacity-90 z-500 flex justify-center items-center">
      <div className="w-52 h-52 text-secondary-content">
        {/* <LottieAnimator animationSrc="/anims/88796-loading-animation-gradient-line-1.json" /> */}
        <div className="flex justify-center items-center mb-5">
        <AiOutlineLoading className="animate-spin  text-7xl" />
        </div>
        <div className="text-xl text-center">
          Please wait...
        </div>
      </div>
    </div>
  );
};

export default PageLoading;
