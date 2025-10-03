import Link from "next/link";
import "./style.css";
import logo from "@/media/logo.png";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-full py-12 md:py-20">
        <div className="footerContainer maxWidth width90 px-6 lg:px-8 flex justify-between items-start gap-10">
          <div className="footerTab">
            <Image src={logo} alt="footer logo" />
          </div>
          <div className="footerTab">
            <h3 className="text-xl font-semibold mb-2">Pages</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About</Link>
              </li>
              <li>
                <Link href="#">What We Do</Link>
              </li>
              <li>
                <Link href="#">Get Involved</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h3 className="text-xl font-semibold mb-2">What We Do</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#">Education & Skill Development</Link>
              </li>
              <li>
                <Link href="#">Women Empowerment</Link>
              </li>
              <li>
                <Link href="#">Legal Awareness & Protection</Link>
              </li>
              <li>
                <Link href="#">Health & Well Being</Link>
              </li>
              <li>
                <Link href="#">Livelihood</Link>
              </li>
            </ul>
          </div>
          <div className="footerTab">
            <h3 className="text-xl font-semibold mb-2">Foundation</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about-us">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/about-us">Our Impact</Link>
              </li>
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
          </div>
          <div className="footerTab">
            <h3 className="text-xl font-semibold mb-2">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/donation-policy">Donation Policy</Link>
              </li>
              <li>
                <Link href="/privacy-and-policy">Privacy & Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <section className="copyright">
        <p>© {currentYear} Sahayatra Foundation. All Rights Reserved.</p>
      </section>
    </>
  );
}
