
import Hero from "./components/Hero";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import { Article } from "./components/Article/Article";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Product />
      <Article />
      <Contact />
      <Footer/>
    </div>
  );
}
