import { Outlet } from "react-router-dom";
// import BrandStory from "../pages/BrandStory";
import Footer from "./Footer";
import Header from "./Header";
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
