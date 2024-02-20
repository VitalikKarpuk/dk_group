import MainBanner from "../mainBanner/mainBanner";

const Layout = ({ children }) => {
  return (
    <>
      <MainBanner />
      {children}
    </>
  );
};

export default Layout;
