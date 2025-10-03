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

  const toggleNav = () => setNavOpen((prev) => !prev);

  return (
    <header className="w-full flex justify-center">
      {/* Landmark role is automatic, but adding label helps */}
      <nav
        className="flex justify-between items-stretch"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <div className="logo flex items-center justify-center py-3">
          <Link href="/" aria-label="Saha Yatra Foundation Home">
            <Image src={logo} alt="Saha Yatra Foundation Logo" priority />
          </Link>
        </div>

        {/* Menu */}
        <div
          className={`menu flex items-center justify-end gap-10 ${
            navOpen ? "navActive" : ""
          }`}
        >
          <ul className="flex gap-7" role="menubar">
            <li role="none">
              <Link role="menuitem" href="/">
                Home
              </Link>
            </li>

            {/* Mobile Only Links */}
            <li role="none" className="desktopHide">
              <Link role="menuitem" href="#">
                What We Do
              </Link>
            </li>
            <li role="none" className="desktopHide">
              <Link role="menuitem" href="#">
                About Us
              </Link>
            </li>
            <li role="none" className="desktopHide">
              <Link role="menuitem" href="/about-us">
                Vision & Mission
              </Link>
            </li>
            <li role="none" className="desktopHide">
              <Link role="menuitem" href="/about-us">
                Our Approach
              </Link>
            </li>
            <li role="none" className="desktopHide">
              <Link role="menuitem" href="/about-us">
                Our Impact
              </Link>
            </li>
            <li role="none" className="desktopHide">
              <Link role="menuitem" href="#">
                Donate
              </Link>
            </li>
            <li role="none" className="desktopHide">
              <Link role="menuitem" href="#">
                Volunteer
              </Link>
            </li>
            <li role="none" className="desktopHide">
              <Link role="menuitem" href="#">
                Partner With Us
              </Link>
            </li>

            {/* Dropdown: What We Do */}
            <li role="none" className="mobileHide">
              <button
                className="flex items-center"
                aria-haspopup="true"
                aria-expanded="false"
              >
                What We Do{" "}
                <ChevronDown aria-hidden="true" className="inline-block" />
              </button>
              <ul className="mobileHide" role="menu">
                <li role="none">
                  <Link role="menuitem" href="#">
                    Education &amp; Skill Development
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="#">
                    Women Empowerment
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="#">
                    Legal Awareness &amp; Protection
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="#">
                    Health &amp; Well-Being
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="#">
                    Entrepreneurship &amp; Livelihoods
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown: Who We Are */}
            <li role="none" className="mobileHide">
              <button
                className="flex items-center"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Who We Are{" "}
                <ChevronDown aria-hidden="true" className="inline-block" />
              </button>
              <ul className="mobileHide" role="menu">
                <li role="none">
                  <Link role="menuitem" href="/about-us">
                    About Us
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="/about-us">
                    Vision & Mission
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="/about-us">
                    Our Approach
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="/about-us">
                    Our Impact
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown: Get Involved */}
            <li role="none" className="mobileHide">
              <button
                className="flex items-center"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Get Involved{" "}
                <ChevronDown aria-hidden="true" className="inline-block" />
              </button>
              <ul className="mobileHide" role="menu">
                <li role="none">
                  <Link role="menuitem" href="#">
                    Donate
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="#">
                    Volunteer
                  </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" href="#">
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li role="none">
              <Link role="menuitem" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>

          <DonateBtn />
        </div>

        {/* Mobile donate button */}
        <div className="mobileNavDonate desktopHide">
          <DonateBtn />
        </div>

        {/* Mobile toggle button */}
        <div className="navToggleBtnBox desktopHide">
          <button
            className="navToggleBtn"
            onClick={toggleNav}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-controls="primary-navigation"
            aria-expanded={navOpen}
          >
            {navOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
