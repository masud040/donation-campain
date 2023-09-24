import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Layout/Layout";
import { getStoredData } from "../../components/Local/LocalStorage";
import DonateCard from "./DonateCard";

const Donation = () => {
  const [donate, setDonate] = useState([]);
  const [item, setItem] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const donations = useContext(MyContext);
  useEffect(() => {
    const stored = getStoredData();
    const match = donations?.filter((donation) => stored.includes(donation.id));
    setDonate(match);
    setItem(match);
  }, [donations]);
  const handleClick = () => {
    setIsShow(!isShow);
    setDonate([]);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {isShow
          ? item?.map((data) => <DonateCard key={data.id} data={data} />)
          : item
              .slice(0, 4)
              .map((data) => <DonateCard key={data.id} data={data} />)}
      </div>
      <div
        className={donate.length >= 4 ? "flex justify-center mt-6" : "hidden"}
      >
        <button
          onClick={handleClick}
          className="bg-green-600  px-4 py-1 rounded-lg"
        >
          See All
        </button>
      </div>
    </>
  );
};

export default Donation;
