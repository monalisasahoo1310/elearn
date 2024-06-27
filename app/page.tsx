"use client";
import Banner from "./components/Banner/index";
import Companies from "./components/Companies/Companies";
import Tabs from "./components/Courses/index";
import Mentor from "./components/Mentor/index";
import Newsletter from "./components/Newsletter/Newsletter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/index";
function page() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Banner />
        <Companies />
        <Tabs />
        <Mentor />
        <Testimonials />
        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default page;
