import { Outlet } from "react-router-dom";
// import BrandStory from "../pages/BrandStory";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
