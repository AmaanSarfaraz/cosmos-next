"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

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

              <div className="header-menu">
                <div className="header-menu__content">
                  <MainMenu style="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                <Link
                  href="/login"
                  className="button px-40 fw-400 text-18 -white bg-white h-50 text-dark-1"
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
