import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const guideData = [
  {
    id: 1,
    image: image1,
    title: "We help you get good & perfect job.",
    description:
      "We help you secure the best job that perfectly matches your skills and aspirations.",
  },
  {
    id: 2,
    image: image2,
    title: "We help you to find expert Freelancer.",
    description:
      "We assist you in finding the best freelancers to meet your project needs with precision and quality.",
  },
  {
    id: 3,
    image: image3,
    title: "We help you get success with great ideas.",
    description:
      "We help you achieve success by turning great ideas into reality.",
  },
  {
    id: 4,
    image: image4,
    title: "If you had interest to start Business?",
    description:
      "Get the best business expert suggestions that help you to start and grow your business successfully.",
  },
];

const Guides = () => {
  return (
    <>
      <h1 className="guide-heading">Guides to help you grow</h1>
      <div className="guides">
        {guideData.map((guide) => (
          <div className="guide-card" key={guide.id}>
            <img src={guide.image} alt={guide.title} className="guide-image" />
            <div className="guide-content">
              <h4 className="guide-title">{guide.title}</h4>
              <p className="guide-description">{guide.description}</p>
              <a href="#" className="guide-link">
                Get Suggestion <FaArrowTrendUp />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Guides;
