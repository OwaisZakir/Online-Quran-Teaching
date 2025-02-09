import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const floatingRef1 = useRef(null);
  const floatingRef2 = useRef(null);
  const bgRef = useRef(null);
  const bgRef2 = useRef(null);

  useEffect(() => {
    // Fade-in Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.7, ease: "power3.out" }
    );

    // Floating Elements Animation
    gsap.to(floatingRef1.current, {
      y: 25,
      repeat: -1,
      duration: 3,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(floatingRef2.current, {
      y: -25,
      repeat: -1,
      duration: 3.5,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Parallax Effect on Scroll
    gsap.to(bgRef.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(bgRef2.current, {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://alelmulquran.info/wp-content/uploads/2025/01/Banner-1.png')`, // Updated for a better image
        }}
      ></div>

      {/* Overlay for Dark Theme Effect */}
      <div ref={bgRef2} className="absolute inset-0 bg-black/25"></div>

      {/* Floating Decorative Elements */}
      <div
        ref={floatingRef1}
        className="absolute top-16 left-12 w-32 h-32 bg-yellow-500 opacity-40 rounded-full blur-3xl"
      ></div>
      <div
        ref={floatingRef2}
        className="absolute bottom-16 right-12 w-24 h-24 bg-yellow-300 opacity-30 rounded-full blur-3xl"
      ></div>

      {/* Hero Content */}
      <div className="text-center px-6 md:px-12 z-10 ">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-lg"
        >
          Quran Pak For All People Around The World
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-85">
          Join the leading online Quran academy and start your journey towards
          spiritual growth and enlightenment.
        </p>

        {/* Call-to-Action Buttons */}
        <div ref={btnRef} className="mt-8 flex flex-col md:flex-row gap-6">
          <Link
            to="/courses"
            className="px-8 py-3 text-lg font-semibold bg-yellow-400 text-green-900 rounded-full shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-110"
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 text-lg font-semibold border-2 border-yellow-400 text-yellow-400 rounded-full shadow-md hover:bg-yellow-400 hover:text-green-900 transition-all transform hover:scale-110"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
