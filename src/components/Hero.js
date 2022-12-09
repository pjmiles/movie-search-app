import heroPics from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image-container">
        <img alt="hero-image" src={heroPics} className="hero-image" />
        <div className="text-wrapper">
          <p>
            Watch <br /> Something <br /> Incredible.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
