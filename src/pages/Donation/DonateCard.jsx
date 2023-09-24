import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DonateCard = ({ data }) => {
  const { id, image, title, category, price, color, category_bg, card_bg } =
    data || {};
  return (
    <div
      className="rounded-lg flex items-center gap-7"
      style={{ background: card_bg }}
    >
      <img className="max-w-[40%]" src={image} alt="" />
      <div>
        <h4
          style={{ background: category_bg, color: color }}
          className="px-3 w-max rounded-md text-sm py-1 font-semibold"
        >
          {category}
        </h4>
        <h1 className="text-xl font-bold">{title}</h1>
        <p style={{ color: color }}>{price}</p>
        <Link to={`/details/${id}`}>
          <button
            style={{ background: color }}
            className="text-white px-3 py-1 rounded-lg"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
DonateCard.propTypes = {
  data: PropTypes.object,
};

export default DonateCard;
