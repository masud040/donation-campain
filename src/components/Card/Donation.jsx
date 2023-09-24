import { MyContext } from "../../Layout/Layout";

import { useContext, useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import PropTypes from "prop-types";
const Donation = ({ inputValue }) => {
  const donations = useContext(MyContext);
  const [searchItem, setSearchItem] = useState([]);
  useEffect(() => {
    const matchItem = donations.filter(
      (donation) => donation.category === inputValue
    );
    setSearchItem(matchItem);
  }, [donations, inputValue]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {inputValue
        ? searchItem.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))
        : donations?.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
    </div>
  );
};
Donation.propTypes = {
  inputValue: PropTypes.string,
};

export default Donation;
