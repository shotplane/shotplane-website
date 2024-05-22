import { useEffect, useRef } from "react";

const LottieAnimator = ({
  className,
  animationSrc,
  id = "firstLottie",
}: {
  className?: string;
  animationSrc: string;
  id?: string;
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (window) {
      import("@lottiefiles/lottie-player");
    }
  }, [typeof window]);
  return (
    <div className={className}>
      <lottie-player
        id={id}
        ref={ref}
        autoplay
        loop
        mode="normal"
        src={animationSrc}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieAnimator;
