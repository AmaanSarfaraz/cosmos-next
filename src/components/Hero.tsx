import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/assets/bg.png" className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="display-1 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                Cosmos House
              </h1>
              <p
                className="text-white mt-6 md:mt-10 text-20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Home Appliances, Kitchenware, Crockery & Modular Kitchens
                <br />
                Customer Care: 0091 - (0)194 - 2478919; 0091 - 94190 09163
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
