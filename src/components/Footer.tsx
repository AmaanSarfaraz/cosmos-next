import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer -type-1">
      <div>
        <div className="pt-60 pb-60 px-60">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <div className="mt-30">
                <div className="text-14 mt-30">our contact number</div>
                <a
                  className="text-18 fw-500 text-blue-1 mt-5"
                  href="tel:9999999999"
                >
                  9999999999
                </a>
              </div>
            </div>
            {/* End col */}

            <div className="col-xl-2 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Carriers</h5>
              <div className="d-flex y-gap-10 flex-column">
                <Link href="/">About Us</Link>
              </div>
              <div className="d-flex y-gap-10 flex-column">
                <Link href="/">Suppliers Us</Link>
              </div>
              <div className="d-flex y-gap-10 flex-column">
                <Link href="/">About Us</Link>
              </div>
            </div>
            {/* End footer menu content */}
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light bg-black text-white">
          <div className="row justify-between items-center y-gap-10">
            <div className="col-12">
              <div className="d-flex justify-center items-center w-100 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-10"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                    10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 
                    0-8-3.59-8-8s3.59-8 8-8 8 3.59 
                    8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 
                    8h2v2h-2z"
                  />
                </svg>
                <span>Since 1958.</span>
              </div>
            </div>
          </div>
        </div>
        {/* End footer bottom */}
      </div>
    </footer>
  );
};

export default Footer;
