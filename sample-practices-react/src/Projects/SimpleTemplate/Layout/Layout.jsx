import Footer from "../Components/Footer/Footer";
import Main from "../Components/Main/Main";
import Nav from "../Components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
