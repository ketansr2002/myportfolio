import { HERO_CONTENT } from "../constants/index.js";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-fill lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight  lg:mt-16 lg:text-8xl">
              KETAN SINGH RAJPOOT
            </h1>
            <span className="bg-gradient-to-r from-slate-400 via-slate-600 to-purple-800 bg-clip-text tracking-tight text-3xl text-transparent ">
              Full Stack / Machine Learning
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src="" alt="myimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
