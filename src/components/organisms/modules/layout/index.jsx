import Footer from "../../footer";
import Header from "../../header";
import MainBanner from "../mainBanner/mainBanner";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainBanner />
      <main id="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
