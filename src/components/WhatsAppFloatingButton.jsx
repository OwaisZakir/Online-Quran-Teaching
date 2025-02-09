import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppFloatingButton = () => {
  const phoneNumber = "+923173609002"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in learning more about your academy.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition duration-300 flex items-center justify-center w-14 h-14 z-50"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
    </a>
  );
};

export default WhatsAppFloatingButton;
