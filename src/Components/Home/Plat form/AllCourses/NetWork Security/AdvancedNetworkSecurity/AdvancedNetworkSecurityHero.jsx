// import React from "react";

import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import student from "../../../../../../assetss/Home/intro_DataScience/student.jpg";
import hero from "../../../../../../assetss/professional/networkSecurity/advanced/hero.png";
const AdvancedNetworkSecurityHero = () => {
  const [courseName] = useState("Advanced Network Security"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div className="relative">
        <div
          className=" w-full h-[370px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero})`,
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center px-[40px] md:px-[120px] lg:px-[200px]">
          <div className="text-white text-lg md:text-xl lg:text-2xl font-medium  text-center">
            {" "}
            Network security serves as the backbone of protection against a wide
            range of cyber threats. As network breaches become more robust
            security measures are essential to safeguard critical data and
            infrastructure
          </div>

          <button
            onClick={handleEnroll}
            className="absolute bottom-5 lg:bottom-12 px-3 py-2 md:px-5 md:py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl  transition duration-200"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default AdvancedNetworkSecurityHero;
