import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    id: 1,
    title: "Basic Quran Reading",
    description:
      "Learn the fundamentals of Quranic Arabic with proper pronunciation.",
    duration: "3 Months",
    students: "500+ Students",
  },
  {
    id: 2,
    title: "Tajweed Course",
    description: "Improve your Quran recitation with advanced Tajweed rules.",
    duration: "4 Months",
    students: "700+ Students",
  },
  {
    id: 3,
    title: "Quran Memorization",
    description:
      "Memorize the Holy Quran with expert guidance and structured lessons.",
    duration: "6 Months",
    students: "300+ Students",
  },
  {
    id: 4,
    title: "Islamic Studies",
    description: "Gain deep knowledge of Islamic history, fiqh, and hadith.",
    duration: "5 Months",
    students: "400+ Students",
  },
];

const CoursesSection = () => {
  const sectionRef = useRef(null);
  const courseRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );

    gsap.fromTo(
      courseRefs.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-extrabold text-green-800 mb-14">
          Explore Our Courses
        </h2>
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={course.id}>
                <div
                  ref={(el) => (courseRefs.current[index] = el)}
                  className="bg-white p-10 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-5">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{course.description}</p>
                  <div className="flex items-center justify-center space-x-6 mb-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-green-500 text-lg"
                      />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FontAwesomeIcon
                        icon={faUserGraduate}
                        className="text-yellow-400 text-lg"
                      />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full hover:bg-yellow-500 transition text-lg font-semibold shadow-md hover:shadow-lg"
                  >
                    View Course
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
