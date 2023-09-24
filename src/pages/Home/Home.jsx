import { useState } from "react";
import Donation from "../../components/Card/Donation";
import Banner from "../../components/Header/Banner/Banner";

const Home = () => {
  const [inputValue, setInputValue] = useState(null);
  const handleClick = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <Banner handleClick={handleClick}></Banner>
      <Donation inputValue={inputValue}></Donation>
    </div>
  );
};

export default Home;
