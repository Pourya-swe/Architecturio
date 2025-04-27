import About from "../../components/Home/About";
import FeaturedProjects from "../../components/Home/FeaturedProjects";
import Hero from "../../components/Home/Hero";
import Services from "../../components/Home/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
    </div>
  );
};

export default Home;
