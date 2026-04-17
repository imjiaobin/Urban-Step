import { Outlet } from "react-router-dom";
// import BrandStory from "../pages/BrandStory";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
export default function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
