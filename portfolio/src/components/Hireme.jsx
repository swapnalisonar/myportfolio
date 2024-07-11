import React from "react";

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-600 relative px-8 rounded-2xl py-4 lg:max-w-2xl mx-auto min-h-[20rem] mt-20 flex gap-8 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-150 leading-6">
          It's a very good opportunity to enhance my skills and helps me to gain practical knowledge and experience. If you give me a chance to work in your company I'll give my best towards the company's growth.
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
       
      </div>
    </section>
  );
};

export default Hireme;
