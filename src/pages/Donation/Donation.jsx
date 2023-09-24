import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Layout/Layout";
import { getStoredData } from "../../components/Local/LocalStorage";
import DonateCard from "./DonateCard";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const donations = useContext(MyContext);
  useEffect(() => {
    const stored = getStoredData();
    const match = donations?.filter((donation) => stored.includes(donation.id));
    setDonate(match);
  }, [donations]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {donate?.map((data) => (
        <DonateCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Donation;
