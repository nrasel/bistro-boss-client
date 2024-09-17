import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12 text-center mx-auto my-12">
      <p className="text-yellow-600  mb-2">{subHeading}</p>
      <h3 className="text-4xl uppercase text-center border-orange-500 border-y-4 py-4 ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
