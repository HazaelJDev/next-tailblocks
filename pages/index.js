import ContactUs from "../components/ContactUs";
import Nav from "../components/Nav";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import Hero from "../components/Hero";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
