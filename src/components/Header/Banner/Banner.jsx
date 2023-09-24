const Banner = () => {
  return (
    <div className="hero min-h-[20vh] md:min-h-[30vh] lg:min-h-[60vh] mb-10 bg-hero">
      <div className="hero-overlay bg-white bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col">
        <h1 className="md:mb-2 text-2xl md:text-3xl text-black font-bold">
          I Grow By Helping People In Need
        </h1>
        <div className="flex justify-center ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered rounded-e-none w-full max-w-xs text-black focus:outline-none"
          />
          <button className="btn bg-red-400 rounded-s-none ">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
