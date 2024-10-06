import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const ReviewCard = () => {
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/reviews");
      return res.data;
    },
  });

  return (
    <div>
      <div className="">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop="true"
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div
                className="space-y-4 bg-green-200 px-16 py-8 rounded-xl"
                key={review._id}
              >
                <div className="flex items-center gap-4 mb-4 justify-center">
                  <div className="w-24 mask mask-squircle">
                    <img src={review.studentImage} alt="" />
                  </div>
                  <h2>
                    <h2 className="text-2xl font-semibold">{review.studentName} </h2>
                  </h2>
                </div>
                <h2 className="font-bold text-xl ">{review.collegeName}</h2>
                <p>{review.review} </p>
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 250 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewCard;
