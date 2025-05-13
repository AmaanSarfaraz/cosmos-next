"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);
  const pathname = usePathname();

  const changeBackground = () => {
    if (typeof window !== "undefined" && window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header className={`header ${navbar ? "bg-dark-1 is-sticky" : ""}`}>
      <div className="header__container px-30 sm:px-20">
        <div className="row justify-between items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
              <Link href="/" className="header-logo mr-30 text-white text-30">
                CosmosHouse
              </Link>

              {/* Inlined MainMenu */}
              <div className="header-menu">
                <div className="header-menu__content">
                  <nav className="menu js-navList">
                    <ul className="menu__nav text-white -is-active">
                      <li>
                        <Link href="/" className="text-white">
                          <span className="mr-10">Home</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="about-us" className="text-white">
                          <span className="mr-10">About US</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact-us" className="text-white">
                          <span className="mr-10">Contact Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/suppliers" className="text-white">
                          <span className="mr-10">Our Suppliers</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-white">
                          <span className="mr-10">Hawkins</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-white">
                          <span className="mr-10">Sunflame</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-white">
                          <span className="mr-10">Hattich</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-white ">
                          <span className="mr-10">Panasonic</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* End inlined MainMenu */}
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                <Link
                  href="/admin/sign-in"
                  className="button px-40 py-10 fw-400 text-18 -white bg-white h-50 text-dark-1"
                >
                  Sign In
                </Link>
              </div>

              <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white">
                <div>
                  <Link
                    href="/login"
                    className="d-flex items-center icon-user text-inherit text-22"
                  />
                </div>
                <div>
                  <button
                    className="d-flex items-center icon-menu text-inherit text-20"
                    data-bs-toggle="offcanvas"
                    aria-controls="mobile-sidebar_menu"
                    data-bs-target="#mobile-sidebar_menu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
