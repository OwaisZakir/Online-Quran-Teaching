import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBookOpen,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Courses",
    path: "/courses",
    subLinks: [
      { name: "Beginner", path: "/courses/beginner" },
      { name: "Advanced", path: "/courses/advanced" },
    ],
  },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-green-800 text-yellow-400 shadow-lg transition-all duration-500 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
          <Link to="/" className="flex items-center space-x-2">
            <FontAwesomeIcon
              icon={faBookOpen}
              size="2x"
              className="text-yellow-400"
            />
            <h1 className="text-3xl font-bold">Quran Academy</h1>
          </Link>
          <nav className="hidden md:flex space-x-8 text-lg font-semibold">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.subLinks ? (
                  <>
                    <button
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center hover:text-yellow-300"
                    >
                      {link.name}{" "}
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 bg-green-700 text-white shadow-lg rounded-md py-2 w-40">
                        {link.subLinks.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            className="block px-4 py-2 hover:bg-green-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link.path} className="hover:text-yellow-300">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <Link
            to="/get-started"
            className="hidden md:inline-block bg-yellow-400 text-green-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all shadow-md"
          >
            Get Started
          </Link>
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </header>
      <div
        ref={sidebarRef}
        className={`fixed inset-0 bg-green-900 text-white flex flex-col items-center justify-center z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-yellow-400"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
        <div className="flex items-center space-x-2 mb-6">
          <FontAwesomeIcon
            icon={faBookOpen}
            size="2x"
            className="text-yellow-400"
          />
          <h1 className="text-3xl font-bold">Quran Academy</h1>
        </div>
        <nav className="flex flex-col space-y-6 text-xl font-semibold">
          {navLinks.map((link, index) => (
            <div key={index} className="text-center">
              {link.subLinks ? (
                <>
                  <button
                    className="hover:text-yellow-300"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                  >
                    {link.name}{" "}
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                  </button>
                  {activeDropdown === index && (
                    <div className="bg-green-800 py-2 rounded-md mt-2 w-full">
                      {link.subLinks.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-green-700"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className="hover:text-yellow-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <Link
          to="/get-started"
          className="mt-6 bg-yellow-400 text-green-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all shadow-md"
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </>
  );
};
export default Header;
