import React from "react";
import img1 from "../../../../../../assetss/student/softwareTesting/compatibilityTesting/image1.jpg";
import img2 from "../../../../../../assetss/student/softwareTesting/compatibilityTesting/image2.jpg";
import img3 from "../../../../../../assetss/student/softwareTesting/compatibilityTesting/image3.jpg";
import img4 from "../../../../../../assetss/student/softwareTesting/compatibilityTesting/image4.jpg";
import img5 from "../../../../../../assetss/student/softwareTesting/compatibilityTesting/image5.jpg";
import img6 from "../../../../../../assetss/student/softwareTesting/compatibilityTesting/image6.jpg";

const CompatabilityCard = () => {
  const courseData = [
    {
      imgSrc: img1,
      title: "Explore Testing Techniques",
      description:
        "Browse our extensive catalog of Software Testing courses. Discover various testing techniques from manual to automated testing methodologies suitable for testers at all levels.",
    },
    {
      imgSrc: img2,
      title: "Enroll in Test Automation Courses",
      description:
        "Start with foundational courses covering basic concepts of test automation tools and frameworks essential for accelerating your testing processes.",
    },
    {
      imgSrc: img3,
      title: "Practice with Real-world Projects",
      description:
        "Apply your testing knowledge by working on hands-on projects tailored to real-world scenarios. Gain practical experience in software testing, test case design, and defect management under the guidance of industry experts.",
    },
    {
      imgSrc: img4,
      title: "Track Your Testing Progress",
      description:
        "Monitor your testing progress with intuitive dashboards and tracking tools. Set testing goals, track testing milestones, and measure your proficiency in various testing concepts as you advance through the courses.",
    },
    {
      imgSrc: img5,
      title: "Specialize and Advance",
      description:
        "Choose specialized tracks or advanced courses to delve deeper into specific areas of Software Testing, such as test automation frameworks, performance testing, or agile testing methodologies. Customize your learning path to align with your interests and career goals.",
    },
    {
      imgSrc: img6,
      title: "Earn Recognized Certifications",
      description:
        "Upon successful completion of courses and projects, earn industry-recognized certifications to showcase your expertise to employers and enhance your career prospects.",
    },
  ];
  //
  return (
    <section id="portfolio" className="portfolio-section py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl pb-2 md:text-4xl lg:text-4xl font-medium">
            <span className="text-[#f6ac14]">The</span>
            <span className="bg-gradient-to-r bg-clip-text from-[#f6ac14] to-[#0098f1] text-transparent">
              {" "}
              Future of{" "}
            </span>
            <span className="text-[#0098f1]"> Learning</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="group border-2 hover:border-[#f6ac14] shadow-lg rounded-lg overflow-hidden"
            >
              <a href="#">
                <div className="h-[180px] justify-center items-center flex">
                  <img
                    className="w-[300px] h-[220px] p-2 bg-cover"
                    src={course.imgSrc}
                    alt={`Project ${index + 1}`}
                  />
                </div>
                <div className="p-4 flex flex-col items-center justify-between">
                  <h3 className="text-lg font-medium text-[#FF9B26] group-hover:text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-md text-gray-600 pt-4">
                    {course.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompatabilityCard;
