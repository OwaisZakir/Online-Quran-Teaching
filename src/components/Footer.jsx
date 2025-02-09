import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBookOpen,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-yellow-400 py-12 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-6">
        {/* Logo & About */}
        <div>
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start space-x-2"
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              size="2x"
              className="text-yellow-400"
            />
            <h2 className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition-all">
              Quran Academy
            </h2>
          </Link>
          <p className="mt-4 text-yellow-300 text-sm leading-relaxed">
            Learn the Quran from expert tutors with structured online courses
            and personalized lessons.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Courses", "About", "Contact", "Blogs"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    to={`/${
                      item.toLowerCase() !== "home" ? item.toLowerCase() : ""
                    }`}
                    className="hover:text-yellow-300 transition-all"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start space-x-2">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>support@quranacademy.com</span>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <FontAwesomeIcon icon={faPhone} /> <span>+123 456 7890</span>
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-yellow-300 text-sm mb-4">
            Get the latest updates on courses and events.
          </p>
          <div className="flex items-center bg-yellow-400 rounded-lg overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-green-900 outline-none"
            />
            <button className="bg-green-800 text-yellow-400 px-4 py-2 hover:bg-green-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-8">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          {[
            { icon: faFacebook, link: "#" },
            { icon: faTwitter, link: "#" },
            { icon: faInstagram, link: "#" },
            { icon: faYoutube, link: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-2xl hover:text-yellow-300 transition-all"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-yellow-400 pt-4">
        <p className="text-yellow-300 text-sm">
          &copy; {new Date().getFullYear()} Quran Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
