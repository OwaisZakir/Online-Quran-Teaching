import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const errorTextRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP Animation for 404 Text and Button
  useEffect(() => {
    gsap.fromTo(
      errorTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-900 to-green-700 text-white text-center px-6">
      {/* 404 Text */}
      <h1
        ref={errorTextRef}
        className="text-9xl md:text-[12rem] font-extrabold mb-4"
      >
        404
      </h1>

      {/* Error Message */}
      <p className="text-2xl md:text-3xl font-semibold mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Back to Home Button */}
      <Link
        ref={buttonRef}
        to="/"
        className="inline-block bg-yellow-400 text-green-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
