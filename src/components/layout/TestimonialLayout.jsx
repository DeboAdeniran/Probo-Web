import React from "react";
import Carousel from "../ui/Carousel";

function TestimonialLayout() {
  return (
    <div className="py-20 flex justify-center items-center flex-col gap-4 bg-shark-50 h-auto ">
      <p className="text-flamingo-700 font-bold text-center">TESTIMONIAL</p>
      <div>
        <h1 className=" text-6xl font-medium text-center  ">
          What our customers say:
        </h1>
        <h1 className=" text-6xl font-medium text-center  ">
          These are the success stories
        </h1>
      </div>
      <TestimonialCarousel />
    </div>
  );
}

const TestimonialCarousel = () => {
  const imageSlides = [
    {
      title: "Beautiful Landscape",
      description: "Amazing mountain views and crystal clear lakes",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
    },
    {
      title: "City Skyline",
      description: "Modern architecture meets urban planning",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=400&fit=crop",
    },
    {
      title: "Ocean Waves",
      description: "Peaceful waves crashing on the shore",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div>
      <Carousel items={imageSlides} />
    </div>
  );
};

export default TestimonialLayout;
