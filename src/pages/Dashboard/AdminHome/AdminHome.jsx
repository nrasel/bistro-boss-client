import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiBag1 } from "react-icons/ci";
import { FaBook, FaDollarSign } from "react-icons/fa6";
import { PiUsersThreeThin } from "react-icons/pi";
import useAuth from "./../../../hooks/useAuth";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div>
        <div className="stats shadow w-full ">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-3xl" />
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">$ {stats?.revenue}</div>
            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <PiUsersThreeThin className="text-3xl" />
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">{stats?.users}</div>
            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBook className="text-3xl" />
            </div>
            <div className="stat-title">Menu Items</div>
            <div className="stat-value">{stats?.menuItems}</div>
            {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <CiBag1 className="text-3xl" />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{stats?.orders}</div>
            {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
