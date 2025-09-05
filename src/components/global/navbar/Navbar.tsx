"use client";
import Image from "next/image";
import "./style.css";
import logo from "@/media/logo.png";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import DonateBtn from "@/components/local/buttons/donateBtn/DonateBtn";
import { useState } from "react";
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    if (!navOpen) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };
  return (
    <>
      <header className="w-full flex justify-center">
        <nav className="flex justify-between items-stretch">
          <div className="logo flex items-center justify-center py-3">
            <Image src={logo} alt="Saha Yatra Foundation Logo" />
          </div>
          <div
            className={`menu flex items-center justify-end gap-10 ${
              navOpen ? "navActive" : ""
            }`}
          >
            <ul className="flex gap-7">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li className="desktopHide">
                <Link href="#">What We Do</Link>
              </li>

              <li className="desktopHide">
                <Link href="#">About Us</Link>
              </li>
              <li className="desktopHide">
                <Link href="#">Vision & Mission</Link>
              </li>
              <li className="desktopHide">
                <Link href="#">Our Approach</Link>
              </li>
              <li className="desktopHide">
                <Link href="#">Our Impact</Link>
              </li>
              <li className="desktopHide">
                <Link href="#">Donate</Link>
              </li>
              <li className="desktopHide">
                <Link href="#">Volunteer</Link>
              </li>
              <li className="desktopHide">
                <Link href="#">Partner With Us</Link>
              </li>

              <li className="mobileHide">
                What We Do <ChevronDown className="inline-block" />
                <ul className="mobileHide">
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
              <li className="mobileHide">
                <Link href="#">
                  Who We Are <ChevronDown className="inline-block" />
                </Link>

                <ul className="mobileHide">
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
              <li className="mobileHide">
                <Link href="#">
                  Get Involved <ChevronDown className="inline-block" />
                </Link>
                <ul className="mobileHide">
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
            <button className="navToggleBtn" onClick={toggleNav}>
              {navOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
