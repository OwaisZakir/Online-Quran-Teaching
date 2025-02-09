import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import GoToTopButton from "./GoToTopButton";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="floatingButton">
        <GoToTopButton />
        <WhatsAppFloatingButton />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
