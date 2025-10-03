import "../style.css";

export default function CookiePolicyPage() {
  return (
    <section className="legal w-full flex items-center justify-center">
      <div className="legalContainer width90 maxWidth">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Cookie Policy
        </h1>

        {/* Content */}
        <div className="legalContent text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            This Cookie Policy explains how{" "}
            <strong>Saha Yatra Foundation</strong>
            (“we,” “our,” or “us”) uses cookies and similar technologies on our
            website. By continuing to browse or use our site, you agree to the
            use of cookies as described in this Policy.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you
            visit a website. They help websites function properly, improve user
            experience, and provide insights into how the site is being used.
          </p>

          <h2>2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function, such as navigation, donations, and secure access.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Collect information about
              how visitors use our site (e.g., page visits, load times) to help
              us improve functionality.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember preferences (such as
              language or region) to provide a more personalized experience.
            </li>
            <li>
              <strong>Analytics & Third-Party Cookies:</strong> Used to analyze
              trends, track user behavior, and may include cookies from trusted
              third parties like Google Analytics.
            </li>
          </ul>

          <h2>3. How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure the website works smoothly and securely.</li>
            <li>Understand how visitors engage with our content.</li>
            <li>Improve user experience by remembering preferences.</li>
            <li>Support our donation and volunteer registration systems.</li>
          </ul>

          <h2>4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through settings. You
            can choose to block or delete cookies, but please note that some
            parts of our website may not function properly if cookies are
            disabled.
          </p>

          <h2>5. Third-Party Cookies</h2>
          <p>
            Our website may use services such as Google Analytics or social
            media integrations, which place cookies on your device. These third
            parties have their own privacy and cookie policies, which we
            recommend you review.
          </p>

          <h2>6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, law, or our practices. Updates will be posted
            on this page with a revised “Last Updated” date.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact
            us:
          </p>
          <p>
            <strong>info@sahayatrafoundation.com</strong> <br />
            <strong>+91 9876543210</strong> <br />
            <strong>Noida, Electronic City, Uttar Pradesh, India</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
