import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { id, image, title, price, color, description } = item || {};

  return (
    <div>
      <div
        className="hero min-h-[60vh] rounded-lg p-0 mb-7 relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay h-24 min-w-full bg-opacity-80 absolute bottom-0 rounded-lg flex justify-start items-center ps-5">
          <button
            className="py-2 px-3 rounded-lg text-white"
            style={{ background: color }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};
export default Card;
