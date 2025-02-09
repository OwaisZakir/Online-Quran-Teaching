import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const AboutQuranAcademy = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      imageRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power3.out" }
    ).fromTo(
      contentRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      "<"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center p-12 bg-white rounded-xl max-w-7xl mx-auto my-16"
    >
      {/* Left Content */}
      <div ref={contentRef} className="md:w-1/2 space-y-6 text-gray-900">
        <h2 className="text-5xl font-extrabold text-green-800 leading-tight">
          Shaping Future Quran Scholars
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Join our academy to experience interactive, high-quality Quran
          education with expert teachers guiding you every step of the way.
        </p>
        <ul className="space-y-3 text-lg text-gray-700">
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 text-xl mr-3"
            />{" "}
            Certified and Experienced Teachers
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 text-xl mr-3"
            />{" "}
            Personalized Learning Experience
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 text-xl mr-3"
            />{" "}
            Flexible Schedules for All Ages
          </li>
        </ul>
        <div className="flex space-x-6 mt-4">
          <Link
            to="/learn-more"
            className="text-green-500 text-lg font-semibold hover:text-green-800 transition duration-300 border-b-2 border-transparent hover:border-green-500"
          >
            Learn More
          </Link>
          <Link
            to="/teachers"
            className="text-green-500 text-lg font-semibold hover:text-green-800 transition duration-300 border-b-2 border-transparent hover:border-green-500"
          >
            Meet Our Teachers
          </Link>
        </div>
        <Link to="/get-started">
          <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-500 transition text-lg font-semibold">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Images */}
      <div className="md:w-1/2 flex flex-col items-center relative mt-6 md:mt-0 space-y-6">
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src="/public/images/discussion.png"
          alt="Quran Study Session"
          className="w-44 h-44 rounded-lg shadow-lg absolute top-0 left-10 rotate-3"
        />
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src="/public/images/Quran_Study.jpg"
          alt="Classroom Environment"
          className="w-52 h-52 rounded-md shadow-lg absolute top-10 right-10 -rotate-3"
        />
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src="/public/images/teacher.jpg"
          alt="Teaching in Progress"
          className="w-60 h-60 rounded-xl shadow-lg absolute bottom-6 left-16 -rotate-x-12"
        />
        <img
          ref={(el) => (imageRefs.current[3] = el)}
          src="/public/images/Quran.png"
          alt="Discussion and Learning"
          className="w-48 h-48 rounded-lg shadow-lg absolute bottom-14 right-14 rotate-6"
        />
      </div>
    </section>
  );
};

export default AboutQuranAcademy;
