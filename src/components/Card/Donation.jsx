import { MyContext } from "../../Layout/Layout";

import { useContext } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const donations = useContext(MyContext);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {donations?.map((donation) => (
        <DonationCard key={donation.id} donation={donation} />
      ))}
    </div>
  );
};

export default Donation;
