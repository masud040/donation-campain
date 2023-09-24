import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext(null);

const Layout = () => {
  const [donations, setDonation] = useState([]);
  useEffect(() => {
    fetch("../donationData.json")
      .then((res) => res.json())
      .then((data) => setDonation(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-[90%] mx-auto my-8">
        <MyContext.Provider value={donations}>
          <Outlet></Outlet>
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default Layout;
