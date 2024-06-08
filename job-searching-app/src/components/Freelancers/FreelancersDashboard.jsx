import React, { useState } from "react";
import "./freelancersdashboard.css";

const freelancers = [
  {
    name: "Durga Prasad Nathi",
    title: "Frontend-developer",
    location: "Telangana, India",
    description:
      "Freelance front-end developer specializing in HTML, CSS, and JavaScript, with proficiency in popular frameworks like React, Angular, and Vue.js. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    isPro: true,
  },
  {
    name: "Vamshi Krishna",
    title: "UIPath-developer",
    location: "Telangana, India",
    description:
      "Experienced UIPath developer proficient in automation solutions, with expertise in workflow design and implementation. Skilled in creating efficient robotic processes that streamline operations and boost productivity. Committed to delivering tailored automation solutions that meet the unique needs of each client.",
    country: "India",
    skills: ["UIPath", "Automation"],
    isPro: true,
  },
  {
    name: "naveen reddy venna",
    title: "Backend-developer",
    location: "Telangana, India",
    description:
      "Freelance back-end developer specializing in Java, Python, and JavaScript, with proficiency in popular frameworks like Express.js and Spring Boot. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["Java", "Python", "JavaScript", "Express.js", "Spring Boot"],
    isPro: true,
  },
  {
    name: "Durga Prasad Nathi",
    title: "Frontend-developer",
    location: "Telangana, India",
    description:
      "Freelance front-end developer specializing in HTML, CSS, and JavaScript, with proficiency in popular frameworks like React, Angular, and Vue.js. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    isPro: true,
  },
  {
    name: "Vamshi Krishna",
    title: "UIPath-developer",
    location: "Telangana, India",
    description:
      "Experienced UIPath developer proficient in automation solutions, with expertise in workflow design and implementation. Skilled in creating efficient robotic processes that streamline operations and boost productivity. Committed to delivering tailored automation solutions that meet the unique needs of each client.",
    country: "India",
    skills: ["UIPath", "Automation"],
    isPro: true,
  },
  {
    name: "naveen reddy venna",
    title: "Backend-developer",
    location: "Telangana, India",
    description:
      "Freelance back-end developer specializing in Java, Python, and JavaScript, with proficiency in popular frameworks like Express.js and Spring Boot. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["Java", "Python", "JavaScript", "Express.js", "Spring Boot"],
    isPro: true,
  },
  {
    name: "Durga Prasad Nathi",
    title: "Frontend-developer",
    location: "Telangana, India",
    description:
      "Freelance front-end developer specializing in HTML, CSS, and JavaScript, with proficiency in popular frameworks like React, Angular, and Vue.js. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    isPro: true,
  },
  {
    name: "Vamshi Krishna",
    title: "UIPath-developer",
    location: "Telangana, India",
    description:
      "Experienced UIPath developer proficient in automation solutions, with expertise in workflow design and implementation. Skilled in creating efficient robotic processes that streamline operations and boost productivity. Committed to delivering tailored automation solutions that meet the unique needs of each client.",
    country: "India",
    skills: ["UIPath", "Automation"],
    isPro: true,
  },
  {
    name: "naveen reddy venna",
    title: "Backend-developer",
    location: "Telangana, India",
    description:
      "Freelance back-end developer specializing in Java, Python, and JavaScript, with proficiency in popular frameworks like Express.js and Spring Boot. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["Java", "Python", "JavaScript", "Express.js", "Spring Boot"],
    isPro: true,
  },
  {
    name: "Durga Prasad Nathi",
    title: "Frontend-developer",
    location: "Telangana, India",
    description:
      "Freelance front-end developer specializing in HTML, CSS, and JavaScript, with proficiency in popular frameworks like React, Angular, and Vue.js. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    isPro: true,
  },
  {
    name: "Vamshi Krishna",
    title: "UIPath-developer",
    location: "Telangana, India",
    description:
      "Experienced UIPath developer proficient in automation solutions, with expertise in workflow design and implementation. Skilled in creating efficient robotic processes that streamline operations and boost productivity. Committed to delivering tailored automation solutions that meet the unique needs of each client.",
    country: "India",
    skills: ["UIPath", "Automation"],
    isPro: true,
  },
  {
    name: "naveen reddy venna",
    title: "Backend-developer",
    location: "Telangana, India",
    description:
      "Freelance back-end developer specializing in Java, Python, and JavaScript, with proficiency in popular frameworks like Express.js and Spring Boot. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["Java", "Python", "JavaScript", "Express.js", "Spring Boot"],
    isPro: true,
  },
  {
    name: "Durga Prasad Nathi",
    title: "Frontend-developer",
    location: "Telangana, India",
    description:
      "Freelance front-end developer specializing in HTML, CSS, and JavaScript, with proficiency in popular frameworks like React, Angular, and Vue.js. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    isPro: true,
  },
  {
    name: "Vamshi Krishna",
    title: "UIPath-developer",
    location: "Telangana, India",
    description:
      "Experienced UIPath developer proficient in automation solutions, with expertise in workflow design and implementation. Skilled in creating efficient robotic processes that streamline operations and boost productivity. Committed to delivering tailored automation solutions that meet the unique needs of each client.",
    country: "India",
    skills: ["UIPath", "Automation"],
    isPro: true,
  },
  {
    name: "naveen reddy venna",
    title: "Backend-developer",
    location: "Telangana, India",
    description:
      "Freelance back-end developer specializing in Java, Python, and JavaScript, with proficiency in popular frameworks like Express.js and Spring Boot. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["Java", "Python", "JavaScript", "Express.js", "Spring Boot"],
    isPro: true,
  },
  {
    name: "Durga Prasad Nathi",
    title: "Frontend-developer",
    location: "Telangana, India",
    description:
      "Freelance front-end developer specializing in HTML, CSS, and JavaScript, with proficiency in popular frameworks like React, Angular, and Vue.js. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    isPro: true,
  },
  {
    name: "Vamshi Krishna",
    title: "UIPath-developer",
    location: "Telangana, India",
    description:
      "Experienced UIPath developer proficient in automation solutions, with expertise in workflow design and implementation. Skilled in creating efficient robotic processes that streamline operations and boost productivity. Committed to delivering tailored automation solutions that meet the unique needs of each client.",
    country: "India",
    skills: ["UIPath", "Automation"],
    isPro: true,
  },
  {
    name: "naveen reddy venna",
    title: "Backend-developer",
    location: "Telangana, India",
    description:
      "Freelance back-end developer specializing in Java, Python, and JavaScript, with proficiency in popular frameworks like Express.js and Spring Boot. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["Java", "Python", "JavaScript", "Express.js", "Spring Boot"],
    isPro: true,
  },
  {
    name: "Durga Prasad Nathi",
    title: "Frontend-developer",
    location: "Telangana, India",
    description:
      "Freelance front-end developer specializing in HTML, CSS, and JavaScript, with proficiency in popular frameworks like React, Angular, and Vue.js. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
    isPro: true,
  },
  {
    name: "Vamshi Krishna",
    title: "UIPath-developer",
    location: "Telangana, India",
    description:
      "Experienced UIPath developer proficient in automation solutions, with expertise in workflow design and implementation. Skilled in creating efficient robotic processes that streamline operations and boost productivity. Committed to delivering tailored automation solutions that meet the unique needs of each client.",
    country: "India",
    skills: ["UIPath", "Automation"],
    isPro: true,
  },
  {
    name: "naveen reddy venna",
    title: "Backend-developer",
    location: "Telangana, India",
    description:
      "Freelance back-end developer specializing in Java, Python, and JavaScript, with proficiency in popular frameworks like Express.js and Spring Boot. Crafting captivating user interfaces is my passion, and I'm here to bring your digital vision to life.",
    country: "India",
    skills: ["Java", "Python", "JavaScript", "Express.js", "Spring Boot"],
    isPro: true,
  },
];
function FreelancersDashboard() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
  };

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const matchesCountry = selectedCountry
      ? freelancer.country === selectedCountry
      : true;
    const matchesSkill = selectedSkill
      ? freelancer.skills.includes(selectedSkill)
      : true;
    return matchesCountry && matchesSkill;
  });

  return (
    <>
      <div className="freelancers-dashboard-container">
        <div className="freelancers-dashboard-sidebar">
          <h2>Find Talented Freelancers</h2>
          <button className="filters-btn">
            FILTERS <span className="filter-icon">&#x2630;</span>
          </button>
          <div className="filter-dropdown">
            <label>COUNTRIES</label>
            <select onChange={handleCountryChange}>
              <option value="">All Countries</option>
              <option value="India">India</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="filter-dropdown">
            <label>SKILLS</label>
            <select onChange={handleSkillChange}>
              <option value="">All Skills</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue.js">Vue.js</option>
              <option value="UIPath">UIPath</option>
              <option value="Automation">Automation</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="Express.js">Express.js</option>
              <option value="Spring Boot">Spring Boot</option>
            </select>
          </div>
          <div className="freelancing">
            <p>
              would you like to do <span>Freelancing</span>?
            </p>
            <button className="freelancing-btn">
              Click Here <span className="arrow-icon">&#x279C;</span>
            </button>
          </div>
        </div>
        <div className="freelancer-list">
          {filteredFreelancers.map((freelancer, index) => (
            <div key={index} className="freelancer-card">
              <div className="freelancer-avatar"></div>
              <div className="freelancer-details">
                <h3 className="freelancer-name">
                  {freelancer.name}{" "}
                  {freelancer.isPro && <span className="pro-badge">Pro</span>}
                </h3>
                <p className="freelancer-title">{freelancer.title}</p>
                <p className="freelancer-location">
                  <span className="location-icon">&#x1F4CD;</span>{" "}
                  {freelancer.location}
                </p>
                <p className="freelancer-description">
                  {freelancer.description}
                </p>
              </div>
              <button className="hire-btn">
                Hire Me <span className="hire-icon">&#x279C;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FreelancersDashboard;
