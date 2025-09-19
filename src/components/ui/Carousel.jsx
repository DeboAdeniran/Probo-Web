import React, { useState, useEffect } from "react";
import IconNext from "../../assets/svg/icon-next.svg?react";
import IconPrev from "../../assets/svg/icon-previous.svg?react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel({ items, autoPlay = false, autoPlayInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create extended items array for infinite scroll effect
  const extendedItems = [items[items.length - 1], ...items, items[0]];
  const [displayIndex, setDisplayIndex] = useState(1); // Start at first real item

  // Handle transition end to reset position for infinite scroll
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (displayIndex === 0) {
      // At fake last item, jump to real last item
      setDisplayIndex(items.length);
      setCurrentIndex(items.length - 1);
    } else if (displayIndex === extendedItems.length - 1) {
      // At fake first item, jump to real first item
      setDisplayIndex(1);
      setCurrentIndex(0);
    }
  };

  const goToPrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const newCurrentIndex =
      currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    const newDisplayIndex = displayIndex - 1;

    setCurrentIndex(newCurrentIndex);
    setDisplayIndex(newDisplayIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const newCurrentIndex =
      currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    const newDisplayIndex = displayIndex + 1;

    setCurrentIndex(newCurrentIndex);
    setDisplayIndex(newDisplayIndex);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(index);
    setDisplayIndex(index + 1);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="relative  overflow-hidden rounded-lg bg-gray-200">
        {/* Carousel items */}
        <div
          className={`flex h-full ${
            isTransitioning
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{ transform: `translateX(-${displayIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              <div className="w-full h-full bg-gray-200 rounded-lg">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.alt || `Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                {item.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm mt-2">{item.description}</p>
                    )}
                  </div>
                )}
                {!item.image && item.title && (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg">
                    <div className="text-center text-white">
                      <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="text-lg">{item.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom controls container */}
      <div className="flex justify-between items-center mt-4 w-full">
        {/* Dots indicator - bottom left */}
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-flamingo-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Navigation buttons - bottom right */}
        <div className="flex space-x-2">
          <button
            onClick={goToPrevious}
            className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <IconPrev className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <IconNext className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
