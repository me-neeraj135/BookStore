import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./card.css";
const data = [
  "https://www.bookswagon.com/Images/staticimages/icon1.png",
  "https://www.bookswagon.com/Images/staticimages/icon8.png",
  "https://www.bookswagon.com/Images/staticimages/icon4.png",
  "https://www.bookswagon.com/Images/staticimages/icon4.png",
  "https://www.bookswagon.com/Images/staticimages/icon2.png",
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
function Card() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      draggable={false}
      swipeable={true}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="cardContainer"
    >
      {data.map((e) => {
        return (
          <div className="card_img">
            <img src={e} alt="productItem" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Card;
