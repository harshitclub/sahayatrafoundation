import "../style.css";

export default function PrivacyPolicyPage() {
  return (
    <section className="legal w-full flex items-center justify-center">
      <div className="legalContainer width90 maxWidth">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="legalContent text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            At <strong>Saha Yatra Foundation</strong>, we respect your trust and
            are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your personal
            information when you interact with us through our website, programs,
            and services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              address, and other details you provide when you donate, volunteer,
              or contact us.
            </li>
            <li>
              <strong>Payment Information:</strong> Processed securely via
              trusted third-party gateways. We do not store card or banking
              details.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Device type, IP
              address, and cookies to improve site performance and user
              experience.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            2. How We Use Your Information
          </h2>
          <p>We use the information collected to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process donations and issue receipts (including 80G).</li>
            <li>Send program updates, newsletters, and impact reports.</li>
            <li>
              Respond to your queries and support volunteer participation.
            </li>
            <li>Improve our website, outreach, and services.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell or rent your information. We may share it only with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> Payment gateways, email
              platforms, or hosting providers.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law or
              government requests.
            </li>
            <li>
              <strong>Partners:</strong> In joint programs, but only with your
              consent.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            4. Data Security
          </h2>
          <p>
            We use SSL encryption and other technical measures to protect your
            data. Only authorized staff have access to your information. While
            we strive for the highest security, no system is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            5. Data Retention
          </h2>
          <p>
            We retain your information only as long as necessary for legal and
            operational purposes, such as issuing tax receipts and complying
            with government regulations.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            6. Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections or updates to your data.</li>
            <li>
              Request deletion of your data (except where legally required).
            </li>
            <li>Opt-out of receiving our communications at any time.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            7. Cookies
          </h2>
          <p>
            We use cookies to enhance browsing, analyze traffic, and personalize
            content. You may disable cookies in your browser, but some features
            may not function properly.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            8. Third-Party Links
          </h2>
          <p>
            Our website may contain links to external sites. We are not
            responsible for their privacy practices. We encourage you to review
            their policies before sharing personal information.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            9. Children’s Privacy
          </h2>
          <p>
            We do not knowingly collect personal information from children under
            13 without parental consent. If such data is found, we will delete
            it promptly.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            10. Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy to reflect changes in our
            practices. Updates will be posted here with the “Last Updated” date
            at the top of this page.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">
            11. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us:
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
