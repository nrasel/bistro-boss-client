import React from "react";
import {
  CiBoxList,
  CiCalendarDate,
  CiHome,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen  bg-orange-400 text-black">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <CiHome className="text-black text-2xl" />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
              <CiCalendarDate className="text-black text-2xl" />
              Reservation
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/cart">
              <CiShoppingCart className="text-black text-2xl" />
              My cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <MdOutlineReviews className="text-black text-2xl" />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <CiBoxList className="text-black text-2xl" />
              My Bookings
            </NavLink>
          </li>
          <div className="divider divider-info"></div>
          <li>
            <NavLink to="/">
              <CiHome className="text-black text-2xl" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <CiSearch className="text-black text-2xl" />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
