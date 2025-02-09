import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$19/month",
    features: [
      "Access to basic courses",
      "Community support",
      "Monthly updates",
    ],
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "$39/month",
    features: ["Access to all courses", "Priority support", "Weekly updates"],
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "$59/month",
    features: ["One-on-one mentoring", "Exclusive content", "Daily updates"],
  },
  {
    id: 4,
    title: "Advanced Plan",
    price: "$79/month",
    features: [
      "Personalized coaching",
      "Live Q&A sessions",
      "Early access to new content",
    ],
  },
  {
    id: 5,
    title: "Elite Plan",
    price: "$99/month",
    features: [
      "24/7 mentorship",
      "VIP community access",
      "Exclusive webinars & events",
    ],
  },
];

const PricingPlans = () => {
  const sectionRef = useRef(null);
  const planRefs = useRef([]);

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
      planRefs.current,
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
          Choose Your Plan
        </h2>
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
          {pricingPlans.map((plan, index) => (
            <SwiperSlide key={plan.id}>
              <div
                ref={(el) => (planRefs.current[index] = el)}
                className="bg-white p-10 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-5">
                  {plan.title}
                </h3>
                <p className="text-xl font-semibold text-yellow-500 mb-4">
                  {plan.price}
                </p>
                <ul className="text-gray-700 mb-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center space-x-2"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-green-500 text-lg"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/pricing/${plan.id}`}
                  className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full hover:bg-yellow-500 transition text-lg font-semibold shadow-md hover:shadow-lg"
                >
                  Choose Plan
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PricingPlans;
