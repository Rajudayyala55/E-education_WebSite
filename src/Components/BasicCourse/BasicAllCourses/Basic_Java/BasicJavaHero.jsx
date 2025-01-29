import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../../assetss/Basic_Courses/BasicJava/bgimagejava.jpg";


const BasicJavaHero = () => {
  const [courseName] = useState("Basic Java");
  const [coursePrice] = useState(14999);
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate("/course-details", { state: { courseName, coursePrice } });
  };

  return (
    <>
      <div
        className="relative w-full h-[370px] bg-cover bg-center"
        style={{
          backgroundImage:`url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white max-md:text-[16px] text-[20px] font-medium px-4">
          Empower yourself with advanced Java programming techniques to optimize performance for your projects.
          <br/>  Our comprehensive course will guide you from the basics to advanced concepts,ensuring you're ready to  <br/>
          tackle real-world challenges.
          </p>
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-10">
          <button
            onClick={handleEnroll}
            className="px-6 py-3 text-[20px] font-medium text-white bg-[#0098f1] rounded-xl"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};




export default BasicJavaHero;





