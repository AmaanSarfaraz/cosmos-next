import React from "react";

type WhyChooseUsItem = {
  id: number;
  icon: string;
  title: string;
  text: string;
  delayAnimation: string;
};

const WhyChooseUs: React.FC = () => {
  const blockContent: WhyChooseUsItem[] = [
    {
      id: 1,
      icon: "/assets/whyChooseUs/1.webp",
      title: "Brands that we deal in",
      text: `Hawkins, Sunflame, Panasonic, Pure It, Milton, FNS, Ocean, Tiger, Glen, Russell Hobbs, Black and Decker, Borosil, Corelle, Clay Craft, Symphony, Paseco and Hettich .`,
      delayAnimation: "200",
    },
    {
      id: 2,
      icon: "/assets/whyChooseUs/2.webp",
      title: "Experienced and Reliable",
      text: `We have all the latest appliances and kitchenware for you. Even if you want a complete kitchen we are there for you.`,
      delayAnimation: "100",
    },
    {
      id: 3,
      icon: "/assets/whyChooseUs/3.webp",
      title: "Customer Satisfaction Guaranteed",
      text: `The modern kitchen is a place where happiness is cooked for the whole family. We enable you to reach that milestone everyday. Be it pure water or a healthy meal for all in the family, we sell all the appliances and utensils for that purpose.`,
      delayAnimation: "300",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
            <div className="d-flex justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="js-lazy"
                style={{ height: "80px" }}
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChooseUs;
