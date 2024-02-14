import HeroSection from "../components/HeroSection";

const About = () => {

  const data = {
    name: "Pooja Ecommerce",
    img:"images/about1.jpg"
  };

  return (
    <>
      <HeroSection myData={data}  />
    </>
  );
};

export default About;
