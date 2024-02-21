import Footer from "../../footer";
import MainBanner from "../mainBanner/mainBanner";

const Layout = ({ children }) => {
  return (
    <>
      <MainBanner />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
