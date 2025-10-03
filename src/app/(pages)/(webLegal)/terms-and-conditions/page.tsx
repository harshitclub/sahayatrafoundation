import "../style.css";

export default function TermsConditionsPage() {
  return (
    <section className="legal w-full flex items-center justify-center">
      <div className="legalContainer width90 maxWidth">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Terms & Conditions
        </h1>

        {/* Content */}
        <div className="legalContent text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            Welcome to <strong>Saha Yatra Foundation</strong>. By accessing or
            using our website and services, you agree to comply with and be
            bound by the following Terms & Conditions. Please read them
            carefully. If you do not agree with any part of these terms, we
            request you not to use our website or services.
          </p>

          <h2>1. Use of Website</h2>
          <p>
            The content on this website is provided for general information,
            awareness, and engagement purposes. While we strive to ensure the
            accuracy of information, we do not guarantee that all details are
            complete, reliable, or up-to-date. Use of our website is at your own
            discretion and risk.
          </p>

          <h2>2. Donations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All donations made to Saha Yatra Foundation are voluntary and
              non-refundable, unless specifically stated otherwise.
            </li>
            <li>
              Donations are used for the purposes of supporting our programs in
              education, women empowerment, health, legal awareness, and
              livelihood development.
            </li>
            <li>
              We will issue receipts for all eligible donations. For Indian
              donors, tax exemption benefits (such as 80G) are provided in
              accordance with applicable laws.
            </li>
          </ul>

          <h2>3. Volunteer & Participation</h2>
          <p>
            By registering as a volunteer, you agree to provide accurate
            information and participate responsibly in activities. Saha Yatra
            Foundation reserves the right to deny or discontinue volunteer
            participation if there is a breach of conduct, misuse of resources,
            or behavior inconsistent with our values.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website—including text, images, logos, and
            materials—is the property of Saha Yatra Foundation unless otherwise
            credited. You may not reproduce, distribute, or modify our content
            without prior written consent.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. These links are
            provided for convenience and do not imply endorsement. We are not
            responsible for the content, policies, or practices of third-party
            sites.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Saha Yatra Foundation shall not be liable for any direct, indirect,
            incidental, or consequential damages resulting from the use or
            inability to use our website, services, or programs. This includes
            loss of data, revenue, or goodwill.
          </p>

          <h2>7. Privacy</h2>
          <p>
            Your use of this website is also governed by our{" "}
            <a href="/privacy-policy" className="text-[#7c122e] underline">
              Privacy Policy
            </a>
            , which explains how we collect, use, and safeguard your personal
            information.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by the laws of India. Any
            disputes shall fall under the jurisdiction of the courts in{" "}
            <strong>[Insert City/State]</strong>.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Updates
            will be posted on this page, and continued use of our website after
            changes means you accept the revised terms.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us:
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
