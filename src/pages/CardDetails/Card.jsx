import PropTypes from "prop-types";
import { setData } from "../../components/Local/LocalStorage";

const Card = ({ item }) => {
  const { id, image, title, price, color, description } = item || {};

  return (
    <div>
      <div
        className="hero min-h-[30vh] md:min-h-[40vh] lg:min-h-[80vh] rounded-lg p-0 mb-7 object-contain bg-cover bg-center  relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay h-20 md:h-24 min-w-full bg-opacity-80 absolute bottom-0 rounded-lg flex justify-start items-center ps-5">
          <button
            onClick={() => setData(id)}
            className="py-1 md:py-2 px-3 rounded-lg text-white text-sm md:text-base"
            style={{ background: color }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-sm ">{description}</p>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};
export default Card;
