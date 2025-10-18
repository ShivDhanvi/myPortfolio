import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Projects from "@/components/Projects";
import Demo from "@/components/Demo";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <Projects />
      <Testimonials />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
