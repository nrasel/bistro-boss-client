import React from "react";
import featuredImage from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./FeaturedImage.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed bg-slate-500 bg-opacity-40 my-10 py-2 text-white">
      <SectionTitle subHeading="Chekc it out" heading="Featured Item" />
      <div className="md:flex justify-center items-center py-8 px-36">
        <div>
          <img className="w-[90%]" src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            labore? Voluptatibus minima dolor cum facilis nihil quo sint
            perferendis nemo, nobis a soluta id dolores mollitia possimus animi
            dolore ratione.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-black">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
