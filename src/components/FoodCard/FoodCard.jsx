import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  
  return (
    <div>
      <div className="card card-compact  bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <p className="bg-slate-900 text-white absolute right-2   mt-4 px-4">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions ">
            <button className="btn btn-outline text-black bg-slate-100 border-0 border-b-4 mt-4 border-orange-400">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
