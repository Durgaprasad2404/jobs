import React, { useState } from "react";
import "./hrdashboard.css";
const users = [
  { name: "Durga Prasad", title: "Senior Hr Executive" },
  { name: "Prasad", title: "Lead Hr Executive" },
  { name: "Durga", title: "Hr Lead" },
  { name: "Pavan", title: "Lead Hr Executive" },
  { name: "Durga Prasad", title: "Senior Hr Executive" },
  { name: "Kalyan", title: "HR Associate" },
  { name: "Jagan", title: "Senior HR Executive" },
  { name: "Nagaraju", title: "Senior HR Associate" },
  { name: "Vamshi Krishna", title: "HR Associate" },
  { name: "Sathya", title: "HR Executive" },
  { name: "Durga Prasad", title: "Senior Hr Executive" },
  { name: "Prasad", title: "Lead Hr Executive" },
  { name: "Durga", title: "Hr Lead" },
  { name: "Pavan", title: "Lead Hr Executive" },
  { name: "Durga Prasad", title: "Senior Hr Executive" },
  { name: "Kalyan", title: "HR Associate" },
  { name: "Jagan", title: "Senior HR Executive" },
  { name: "Nagaraju", title: "Senior HR Associate" },
  { name: "Vamshi Krishna", title: "HR Associate" },
  { name: "Sathya", title: "HR Executive" },
];
function HrDashBoard() {
  const [visibleCount, setVisibleCount] = useState(10);

  const showMoreUsers = () => {
    const remainingUsers = users.length - visibleCount;
    const increment = Math.min(remainingUsers, 10);
    setVisibleCount((prevCount) => prevCount + increment);
  };

  const showLessUsers = () => {
    setVisibleCount(10);
  };
  return (
    <>
      <div className="hr-dashboard-container">
        <h1>Meet Our Expert HR Team</h1>
        <div className="user-list">
          {users.slice(0, visibleCount).map((user, index) => (
            <div key={index} className="user-card">
              <div className="user-avatar"></div>
              <div className="user-details">
                <h3 className="user-name">{user.name}</h3>
                <p className="user-title">{user.title}</p>
              </div>
              <div className="user-actions">
                <button className="message-btn">Message</button>
                <button className="connect-btn">Connect</button>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < users.length ? (
          <button className="more-btn" onClick={showMoreUsers}>
            More <span className="arrow-icon">&#x279C;</span>
          </button>
        ) : (
          <button className="more-btn" onClick={showLessUsers}>
            Less <span className="arrow-icon">&#x279C;</span>
          </button>
        )}
      </div>
    </>
  );
}

export default HrDashBoard;
