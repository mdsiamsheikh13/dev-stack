import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-5 py-5 mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#475569] my-5">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] hover:bg-gradient-to-l text-white py-2 px-5 rounded transition-all duration-300">
              Explore Technologies
            </button>

            <button className="text-black hover:text-white border py-2 px-5 rounded hover:bg-gradient-to-r hover:from-[#F97316] hover:to-[#EC4899] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={BannerImg}
            alt="Development stack"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;