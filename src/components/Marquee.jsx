import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      x: "-100%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-2">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-white text-lg font-semibold"
      >
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
        <span className="mx-6 flex items-center">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-2" />{" "}
          Special Discount on Quran Courses!
        </span>
      </div>
    </div>
  );
};

export default Marquee;
