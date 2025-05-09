import dynamic from "next/dynamic";
import PhotoGallery from "@/components/PhotoGallery";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonial from "@/components/Testimonial";
import TestimonialLeftCol from "@/components/TestimonialLeftCol";
import Suppliers from "@/components/Suppliers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home-1 || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Page = () => {
  return (
    <>
      {/* End Page Title */}

      <Navbar />
      {/* End Header 1 */}

      <Hero />
      {/* End Hero 1 */}
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <WhyChooseUs />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container ">
          <div className="row y-gap-20 justify-center items-end ">
            <div className="col-auto">
              <div className="sectionTitle -md ">
                <h1 className="sectionTitle__title">Photo Gallery</h1>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div
            className="relative pt-40 sm:pt-20"
            // style={{ width: "100%", height: "20rem" }}
          >
            <PhotoGallery />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Our Suppliers</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <Suppliers />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            {/* End col */}

            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End testimonial Section */}

      <Footer />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
