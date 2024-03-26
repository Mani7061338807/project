import React from "react";
import RateReview from "../Data";

const Rating = () => {
  return (
    <>
      <div className="wave mb-[4rem]">
        <p className="ss:text-3xl text-2xl font-Lato text-center  ">
          Hear what our customers say
        </p>
        <span className="brand-container">
          <span className="flex justify-between items-center p-[2rem] mt-[2rem] scrolling-wrapper">
            {RateReview.RateReview.map((review, index) => (
              <span
                key={index}
                className="flex-grow-0 flex-shrink-0 mr-[1rem]  bg-white/20 opacity-90 backdrop-filter backdrop-blur-xl ss:w-[32%] w-full rounded-xl border border-primary"
              >
                <span className="flex">
                  <span className="m-4">
                    <img src={review.User_src} alt="" />
                  </span>
                  <span className="mt-4">
                    <p className="font-Lato font-semibold text-md">
                      {review.name}
                    </p>
                    <p className="font-Lato text-slate-500 font-semibold">
                      {review.source}
                    </p>
                    <img src={review.Review_src} alt="" />
                  </span>
                </span>
                <p className="m-4 text-lg font-Lato">{review.content}</p>
              </span>
            ))}
          </span>
        </span>
      </div>
    </>
  );
};

export default Rating;
