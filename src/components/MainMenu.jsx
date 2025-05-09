import Link from "next/link";

import { usePathname } from "next/navigation";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={""}>
          <Link href="#">
            <span className="mr-10">Home</span>
          </Link>
        </li>
        {/* End home page menu */}

        <li className={""}>
          <Link href="#">
            <span className="mr-10">About US</span>
          </Link>
        </li>
        {/* End categories menu items */}

        <li className={""}>
          <Link href="/destinations">
            <span className="mr-10">Our Suppliers</span>
          </Link>
        </li>
        {/* End Destinatinos single menu */}

        <li className={""}>
          <Link href="#">
            <span className="mr-10">Hawkins</span>
          </Link>
        </li>
        {/* End blogIems */}

        <li className={""}>
          <Link href="#">
            <span className="mr-10">Sunflame</span>
          </Link>
        </li>
        {/* End pages items */}

        <li>
          <Link href="#">
            <span className="mr-10">Hattich</span>
          </Link>
        </li>

        <li className={""}>
          <Link href="/contact">
            <span className="mr-10">Panasonic</span>
          </Link>
        </li>

        <li className={""}>
          <Link href="/contact">
            <span className="mr-10">Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
