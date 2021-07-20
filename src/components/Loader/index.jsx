/* eslint-disable import/no-anonymous-default-export */
import Lottie from "react-lottie";
import animationData from "../../assets/animation.json";

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie style={{marginTop: "2rem"}} height={400} width={400} options={defaultOptions} />;
};
