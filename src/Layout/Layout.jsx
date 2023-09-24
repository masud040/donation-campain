import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext(null);

const Layout = () => {
  const [donations, setDonation] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    fetch("../donationData.json")
      .then((res) => res.json())
      .then((data) => setDonation(data));
    if (pathname === "/") {
      document.title = "Donation";
    } else {
      document.title = `Donation${pathname.replace("/", "-")}`;
    }
  }, [pathname]);
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-[90%] mx-auto my-3">
        <MyContext.Provider value={donations}>
          <Outlet></Outlet>
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default Layout;
