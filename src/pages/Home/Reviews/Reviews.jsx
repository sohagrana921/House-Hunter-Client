import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SubtitleSectionTitle from "../../../components/SubtitleSectionTitle/SubtitleSectionTitle";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Abdul Bari Rabin",
      quote:
        "As a bachelor, I have to look for room most of the time in the city area. Perhaps there are lots of rental services available offline but online I prefer THE TOLET now. One of the finest & smooth apps nowadays",
    },
    {
      id: 2,
      name: "Abdul Bari Rabin",
      quote:
        "As a bachelor, I have to look for room most of the time in the city area. Perhaps there are lots of rental services available offline but online I prefer THE TOLET now. One of the finest & smooth apps nowadays",
    },
    {
      id: 3,
      name: "Abdul Bari Rabin",
      quote:
        "As a bachelor, I have to look for room most of the time in the city area. Perhaps there are lots of rental services available offline but online I prefer THE TOLET now. One of the finest & smooth apps nowadays",
    },
    {
      id: 4,
      name: "Abdul Bari Rabin",
      quote:
        "As a bachelor, I have to look for room most of the time in the city area. Perhaps there are lots of rental services available offline but online I prefer THE TOLET now. One of the finest & smooth apps nowadays",
    },
    {
      id: 5,
      name: "Abdul Bari Rabin",
      quote:
        "As a bachelor, I have to look for room most of the time in the city area. Perhaps there are lots of rental services available offline but online I prefer THE TOLET now. One of the finest & smooth apps nowadays",
    },
  ];
  return (
    <div id="testimonials">
      <SubtitleSectionTitle
        title={"Feedback"}
        subTitle={
          "OUR USERS SEND US BUNCH OF SMILIES WITH OUR SERVICES, AND WE LOVE THEM 😍"
        }
      />

      <div className="text-center md:mb-20 my-container bg-white">
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div
                className=" flex flex-col items-center lg:mx-40"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <p className="my-4">{review?.quote}</p>
                <h3 className="md:text-2xl text-purple-950 font-bold uppercase">
                  {review?.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
