import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "@smastrom/react-rating/style.css";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div>
      <SectionTitle heading="Testimonial" subHeading="What our client want" />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-36 flex flex-col items-center ">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readonly
                />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
