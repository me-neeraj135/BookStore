import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slide.css";

const data = [
  "https://www.bookswagon.com/bannerimages/85_inr.jpg",
  "https://www.bookswagon.com/bannerimages/86_inr.jpg?v=2.5",
  "https://www.bookswagon.com/bannerimages/79_inr.jpg?v=2.5",
  "https://www.bookswagon.com/bannerimages/83_inr.jpg?v=1.9",
  "https://www.bookswagon.com/bannerimages/81_inr.jpg?v=3.1",
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slide() {
  return (
    <div className="slideContainer">
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={true}
        centerMode={false}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="bannerImg"
      >
        {data.map((e) => {
          return (
            <div className="product_img">
              <img src={e} alt="productItem" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slide;
