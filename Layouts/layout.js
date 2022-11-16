import Navbar from "../components/Navbar/NavbarHeader";
import Footer from "../components/Footer/index";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
