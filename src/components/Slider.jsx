import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP.jn_HBMcNUcl62Skn4iTwYAHaE8&pid=Api&P=0&h=220",
    "https://www.opalwebdesign.com/wp-content/uploads/2014/03/ecommerce-SLIDER.jpg",
    "https://www.pagetraffic.com/blog/wp-content/uploads/2022/11/best-ecommerce-platforms.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 py-4">
      <div className="relative overflow-hidden rounded-lg h-80 w-full">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 text-white hover:bg-opacity-75 focus:outline-none"
          onClick={goToPreviousSlide}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-white hover:bg-opacity-75 focus:outline-none"
          onClick={goToNextSlide}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>

        <div className="transition-transform duration-1000 ease-in-out w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-center"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
