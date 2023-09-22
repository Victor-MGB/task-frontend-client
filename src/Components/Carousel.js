import React, { useState, useEffect } from "react";
import "../Styles/Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  // Function to automatically advance the slide every 3 seconds
  const autoAdvance = () => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // 3000 milliseconds (3 seconds)

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  };

  // Start auto-advancing when the component mounts
  useEffect(() => {
    const clearAutoAdvance = autoAdvance();
    return clearAutoAdvance;
  });

  return (
    <div className="carousel">
      <div className={`slide ${currentSlide === 0 && "active"}`}>
        <img
          src="https://static8.depositphotos.com/1000128/947/i/450/depositphotos_9476258-stock-photo-storage-warehouse-with-packaged-goods.jpg"
          alt="Slide 1"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          corporis reiciendis porro similique, debitis vel voluptatum sit
          tempore vitae enim fugit animi perferendis commodi error nisi vero
          ipsam, repudiandae dolores?
        </p>
      </div>
      <div className={`slide ${currentSlide === 1 && "active"}`}>
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2297586015/display_1500/stock-photo-rising-commodity-prices-and-higher-commodities-price-or-rise-in-economic-goods-and-natural-2297586015.jpg"
          alt="Slide 2"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          cumque, maxime asperiores ullam perspiciatis corrupti expedita
          adipisci repellat harum assumenda iste? Minima at illum eos ipsum
          consectetur non quaerat. Distinctio!
        </p>
      </div>
      <div className={`slide ${currentSlide === 2 && "active"}`}>
        <img
          src="https://st2.depositphotos.com/1000128/6688/i/450/depositphotos_66888203-stock-photo-shipping-and-logistics-concept.jpg"
          alt="Slide 3"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          aspernatur architecto nam voluptates nemo eum repellendus, adipisci
          inventore placeat, explicabo assumenda amet id totam, labore molestias
          blanditiis perferendis illo ducimus!
        </p>
      </div>
      <button onClick={prevSlide} className="control prev">
        &lt;
      </button>
      <button onClick={nextSlide} className="control next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
