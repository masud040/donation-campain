import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const DonationCard = ({ donation }) => {
  const navigation = useNavigate();
  const { id, image, title, category, category_bg, color, card_bg } =
    donation || {};

  return (
    <div
      onClick={() => navigation(`/details/${id}`)}
      style={{ background: card_bg }}
      className="rounded-xl"
    >
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body p-4">
        <h4
          className="px-3 w-max rounded-md text-sm py-1 font-semibold"
          style={{ background: category_bg, color: color }}
        >
          {category}
        </h4>
        <h2 className="card-title" style={{ color: color }}>
          {title}
        </h2>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationCard;
