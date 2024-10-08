import React, { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart" className="p-0">
          <button className="btn">
            <CiShoppingCart className="text-2xl" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <button
            onClick={handleLogout}
            className="bg-yellow-500 px-3 ml-3 rounded text-black "
          >
            LogOut
            <span className="mt-2 mx-2">{user?.displayName}</span>
          </button>
        </>
      ) : (
        <>
          <li className="bg-yellow-500 ml-2 flex justify-center items-center rounded text-black ">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white  max-w-[95%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
              <li>nav</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
            {/* <li>nav</li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
