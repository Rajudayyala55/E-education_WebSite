import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../../../../assetss/student/softwareTesting/compatibilityTesting/hero.png";

const CompatabilityHero = () => {
  const [courseName] = useState("Compatability Testing"); // Placeholder for course name
  const [coursePrice] = useState(14999);

  const navigate = useNavigate();
  const handleEnroll = () => {
    // Navigate to the card details page with course details as parameters
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <div className="relative">
      <div
        className=" w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center px-[40px] md:px-[120px] lg:px-[200px]">
        <div className="text-white text-lg md:text-xl lg:text-2xl font-medium  text-center">
          Compatibility testing ensures that software works seamlessly across
          different devices, browsers, and operating systems. It helps identify
          issues early, improving user experience .
        </div>

        <button
          onClick={handleEnroll}
          className="absolute bottom-5 lg:bottom-12 px-3 py-2 md:px-5 md:py-3 text-lg md:text-xl font-medium text-white bg-[#0098f1] rounded-xl  transition duration-200"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CompatabilityHero;
