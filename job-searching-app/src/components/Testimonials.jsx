import React, { useState } from "react";

const testimonials = [
  {
    text: "Getting a job through the website was great! It made everything easy. There were lots of jobs to choose from, and applying was simple. Talking to employers was easy too. Overall, it was a stress-free experience.",
    author: "DOP",
    image: "https://via.placeholder.com/150", // Replace this with the actual image URL
  },
  {
    text: "Getting a job through the website was great! It made everything easy. There were lots of jobs to choose from, and applying was simple. Talking to employers was easy too. Overall, it was a stress-free experience.",
    author: "DP",
    image: "https://via.placeholder.com/150", // Replace this with the actual image URL
  },
  {
    text: "Getting a job through the website was great! It made everything easy. There were lots of jobs to choose from, and applying was simple. Talking to employers was easy too. Overall, it was a stress-free experience.",
    author: "bhuvi",
    image: "https://via.placeholder.com/150", // Replace this with the actual image URL
  },
  {
    text: "Getting a job through the website was great! It made everything easy. There were lots of jobs to choose from, and applying was simple. Talking to employers was easy too. Overall, it was a stress-free experience.",
    author: "virat",
    image: "https://via.placeholder.com/150", // Replace this with the actual image URL
  },
  // You can add more testimonials here
];
function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handlePrevClick = () => {
    setAnimationClass("slide-out-right");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setAnimationClass("slide-in-left");
    }, 300);
  };

  const handleNextClick = () => {
    setAnimationClass("slide-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setAnimationClass("slide-in-right");
    }, 300);
  };

  return (
    <>
      <h1 className="testimonial-heading">Testimonials</h1>
      <div className="heading-line"></div>
      <div className="testimonial-slider">
        <button className="nav-button" onClick={handlePrevClick}>
          ❮
        </button>
        <div
          className={`testimonial ${animationClass}`}
          onAnimationEnd={() => setAnimationClass("")}
        >
          <img
            src={testimonials[currentIndex].image}
            alt="Testimonial author"
            className="author-image"
          />
          <p className="testimonial-text">
            “{testimonials[currentIndex].text}”
          </p>
          <p className="testimonial-author">
            - BY {testimonials[currentIndex].author}
          </p>
        </div>
        <button className="nav-button" onClick={handleNextClick}>
          ❯
        </button>
      </div>
    </>
  );
}

export default Testimonials;
