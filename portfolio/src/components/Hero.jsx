import React from "react";
import swapna from "../assets/images/swapna.png";
const Hero = () => {
  const social_media = [
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/swapnali-sonar-93160b237/" },
    { name: "logo-github", link: "https://github.com/swapnalisonar" },
    { name: "logo-instagram", link: "https://www.instagram.com/swapnali_sonar/" },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={swapna} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            <span>My Name is<br/>
            </span>
             <span>Swapnali Sonar</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
          {social_media?.map((icon) => (
  <a
    key={icon.name}
    href={icon.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      className="text-gray-600 hover:text-white cursor-pointer"
    >
      <ion-icon name={icon.name}></ion-icon>
    </div>
  </a>
))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
