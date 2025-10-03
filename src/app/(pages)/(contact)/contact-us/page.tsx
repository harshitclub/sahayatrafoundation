import Link from "next/link";
import "./style.css";
import WantToHelp from "@/components/local/wantToHelp/WantToHelp";
export default function ContactUs() {
  return (
    <>
      <section className="contactUs w-full flex items-center justify-center flex-col">
        <div className="contactUsHeader width90 maxWidth text-center py-15">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="fontCaveat text-3xl font-semibold text-gray-700">
            You have not lived until you have done something for someone
            <br />
            who can never repay you.
          </p>
        </div>
        <div className="contactUsContainer w-7xl maxWidth flex gap-10 py-15">
          <div className="contactUsLeft">
            <h2 className="text-3xl font-semibold mb-3">Get In Touch</h2>
            <p className="mb-3 contactDesc">
              Have questions or wish to explore the wisdom of Soham Veda Trust
              further? We’re eager to connect with you.
            </p>
            <p className="mb-3 contactDesc">
              Please feel free to reach out through the convenient form to the
              right, or connect with us directly via the contact details below.
              We look forward to hearing from you.
            </p>
            <h3 className="text-xl font-bold text-gray-700">Our Location</h3>
            <p className="text-gray-700 mb-3">
              The Ithum, Noida Electronic City, <br />
              Noida, India
            </p>
            <h3 className="text-xl font-bold text-gray-700">Phone Number</h3>
            <p className="text-gray-700 mb-3">
              <Link href="#">+91 9876543210</Link>
            </p>
            <h3 className="text-xl font-bold text-gray-700">WhatsApp</h3>
            <p className="text-gray-700 mb-3">
              <Link href="#">+91 9876543210</Link>
            </p>
            <h3 className="text-xl font-bold text-gray-700">Email Us</h3>
            <p className="text-gray-700 mb-3">
              <Link href="">example@example.com</Link>
            </p>
          </div>
          <div className="contactUsRight p-7 bg-gray-300 rounded-sm">
            <form>
              <div className="mb-7">
                <input type="text" placeholder="Name" />
              </div>
              <div className="mb-7">
                <input type="email" placeholder="Email" />
              </div>
              <div className="mb-7">
                <input type="tel" placeholder="Phone" />
              </div>
              <div className="mb-7">
                <textarea placeholder="Message"></textarea>
              </div>
              <button type="submit" className="submitBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="contactMap w-7xl mb-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.106411590637!2d77.36980057601632!3d28.626572684350343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550adec536d%3A0xfc9a748d99d8bd07!2sITHUM%20TOWER%2C%20GALAXY%20BUSINESS%20PARK%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1759227168357!5m2!1sen!2sin"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <WantToHelp />
    </>
  );
}
