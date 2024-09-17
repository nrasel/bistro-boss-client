import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  console.log(title);
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 justify-start gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 text-black">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
