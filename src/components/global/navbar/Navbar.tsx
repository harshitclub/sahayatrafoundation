import Image from "next/image";
import "./style.css";
import logo from "@/media/logo.png";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import DonateBtn from "@/components/local/buttons/donateBtn/DonateBtn";
export default function Navbar() {
  return (
    <>
      <header className="w-full flex justify-center">
        <nav className="flex justify-between items-stretch">
          <div className="logo flex items-center justify-center py-3">
            <Image src={logo} alt="Saha Yatra Foundation Logo" />
          </div>
          <div className="menu flex items-center justify-end gap-10">
            <ul className="flex gap-7">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                What We Do <ChevronDown className="inline-block" />
                <ul>
                  <li>
                    <Link href="#">Education &amp; Skill Development</Link>
                  </li>
                  <li>
                    <Link href="#">Women Empowerment</Link>
                  </li>
                  <li>
                    <Link href="#">Legal Awareness &amp; Protection</Link>
                  </li>
                  <li>
                    <Link href="#">Health &amp; Well-Being</Link>
                  </li>
                  <li>
                    <Link href="#">Entrepreneurship &amp; Livelihoods</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">
                  Who We Are <ChevronDown className="inline-block" />
                </Link>

                <ul>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Vision & Mission</Link>
                  </li>
                  <li>
                    <Link href="#">Our Approach</Link>
                  </li>
                  <li>
                    <Link href="#">Our Impact</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">
                  Get Involved <ChevronDown className="inline-block" />
                </Link>
                <ul>
                  <li>
                    <Link href="#">Donate</Link>
                  </li>
                  <li>
                    <Link href="#">Volunteer</Link>
                  </li>
                  <li>
                    <Link href="#">Partner With Us</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
            <DonateBtn />
          </div>
          <div className="mobileNavDonate desktopHide">
            <DonateBtn />
          </div>
          <div className="navToggleBtnBox desktopHide">
            <button className="navToggleBtn">
              <Menu size={40} />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
