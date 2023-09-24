import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[90%] mx-auto py-3">
      <div>
        <img className="w-48" src="https://i.ibb.co/ZMmV7Gk/Logo.png" alt="" />
      </div>
      <ul className="flex gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600 underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600 underline" : ""
            }
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600 underline" : ""
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
