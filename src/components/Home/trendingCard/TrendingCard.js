import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./trendingCard.css";
const data = [
  "https://www.bookswagon.com/productimages/images200/544/9781421520544.jpg",
  "https://www.bookswagon.com/productimages/images200/449/9781421522449.jpg",
  "https://www.bookswagon.com/productimages/images200/700/9781974738700.jpg",
  "https://www.bookswagon.com/productimages/images200/456/9781421522456.jpg",
  "https://www.bookswagon.com/productimages/images200/456/9781421522456.jpg",
];
function TrendingCard() {
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
  return (
    <>
      <div>
        <h1 className="nowTrendingH1">now trending</h1>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={true}
        keyBoardControl={true}
        centerMode={true}
        containerClass="trendingCardContainer"
      >
        {data.map((e) => {
          return (
            <div className="tcardImg">
              <img src={e} alt="productItem" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default TrendingCard;
