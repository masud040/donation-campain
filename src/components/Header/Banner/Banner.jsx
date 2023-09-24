import PropTypes from "prop-types";
const Banner = ({ handleClick }) => {
  const handleForm = (e) => {
    e.preventDefault();
    handleClick(e.target.name.value);
  };
  return (
    <div className="hero min-h-[20vh] md:min-h-[40vh] lg:min-h-[80vh] mb-10 bg-hero">
      <div className="hero-overlay bg-white bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col">
        <h1 className="md:mb-2 text-2xl md:text-3xl text-black font-bold">
          I Grow By Helping People In Need
        </h1>

        <form className="flex justify-center" onSubmit={handleForm}>
          <input
            type="text"
            name="name"
            placeholder="Search here"
            className="input input-bordered rounded-e-none w-full max-w-xs text-black focus:outline-none"
          />
          <input
            type="submit"
            className="btn bg-red-400 rounded-s-none capitalize text-white "
            value="Search"
          />
        </form>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleClick: PropTypes.func,
};

export default Banner;
