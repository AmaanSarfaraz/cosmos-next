import React from "react";

type Supplier = {
  id: number;
  icon: string;
  title: string;
  delayAnimation: string;
};

const Suppliers: React.FC = () => {
  const supplierList: Supplier[] = [
    {
      id: 1,
      icon: "/assets/supplier/1.webp",
      title: "Hawkins",
      delayAnimation: "200",
    },
    {
      id: 2,
      icon: "/assets/supplier/2.webp",
      title: "Futura",
      delayAnimation: "200",
    },
    {
      id: 3,
      icon: "/assets/supplier/3.webp",
      title: "Hettich",
      delayAnimation: "200",
    },
    {
      id: 4,
      icon: "/assets/supplier/4.webp",
      title: "sunflame",
      delayAnimation: "200",
    },
    {
      id: 5,
      icon: "/assets/supplier/5.webp",
      title: "panasonic",
      delayAnimation: "200",
    },
    {
      id: 6,
      icon: "/assets/supplier/6.webp",
      title: "tiger",
      delayAnimation: "200",
    },
    {
      id: 7,
      icon: "/assets/supplier/7.webp",
      title: "milton",
      delayAnimation: "200",
    },
    {
      id: 8,
      icon: "/assets/supplier/8.webp",
      title: "borosil",
      delayAnimation: "200",
    },
    {
      id: 9,
      icon: "/assets/supplier/9.webp",
      title: "glen",
      delayAnimation: "200",
    },
    {
      id: 10,
      icon: "/assets/supplier/10.webp",
      title: "ocean",
      delayAnimation: "200",
    },
    {
      id: 11,
      icon: "/assets/supplier/1.webp",
      title: "Hawkins",
      delayAnimation: "200",
    },
    {
      id: 12,
      icon: "/assets/supplier/2.webp",
      title: "Futura",
      delayAnimation: "200",
    },
  ];

  return (
    <>
      {supplierList.map((item) => (
        <div
          className="col-lg-2 col-sm-6"
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
                style={{ height: "60px" }}
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Suppliers;
