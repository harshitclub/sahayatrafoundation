import "../style.css";

export default function DonationPolicyPage() {
  return (
    <section className="legal w-full flex items-center justify-center">
      <div className="legalContainer width90 maxWidth">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Donation Policy
        </h1>

        {/* Content */}
        <div className="legalContent text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            Thank you for choosing to support{" "}
            <strong>Saha Yatra Foundation</strong>. We are deeply grateful for
            your generosity and commitment to empowering communities. This
            Donation Policy explains how donations are accepted, processed, and
            used, along with guidelines on refunds, receipts, and donor rights.
          </p>

          <h2>1. Purpose of Donations</h2>
          <p>
            All donations made to Saha Yatra Foundation are used exclusively to
            support our programs in education, women empowerment, legal
            awareness, health, and sustainable livelihoods. We ensure that funds
            are directed towards creating measurable impact in the lives of the
            people we serve.
          </p>

          <h2>2. Methods of Donation</h2>
          <p>Donations can be made through multiple channels, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Online via our secure donation portal.</li>
            <li>Bank transfer or cheque in favor of Saha Yatra Foundation.</li>
            <li>
              Offline contributions through registered events and campaigns.
            </li>
          </ul>

          <h2>3. Donation Receipts</h2>
          <p>
            - A receipt will be issued for every donation received. - Indian
            donors may be eligible for tax exemption benefits (e.g., Section
            80G) as per applicable laws. - Donors are requested to provide
            accurate personal details (name, PAN, email, and address) to ensure
            timely issuance of receipts.
          </p>

          <h2>4. Refund and Cancellation Policy</h2>
          <p>
            Donations, once made, are considered final and cannot generally be
            refunded or cancelled. However, exceptions may be made if:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The donation was made in error (e.g., duplicate transaction).
            </li>
            <li>The donation was processed due to a technical fault.</li>
            <li>
              The donor provides a written request for cancellation within 7
              working days of the transaction.
            </li>
          </ul>
          <p>
            Approved refunds will be processed back to the original payment
            method within 7–14 business days. For assistance, donors must
            contact us directly.
          </p>

          <h2>5. Transparency & Use of Funds</h2>
          <p>
            We are committed to transparency in our operations. Donations are
            allocated responsibly to projects, administrative support, and
            future initiatives in line with our mission. Annual financial
            statements and impact reports may be shared with donors upon request
            or published publicly.
          </p>

          <h2>6. Donor Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to know how donations are being utilized.</li>
            <li>The right to request a copy of our financial statements.</li>
            <li>
              The right to privacy – donor information will never be sold or
              misused.
            </li>
            <li>
              The right to opt out of receiving communications from us at any
              time.
            </li>
          </ul>

          <h2>7. International Donations</h2>
          <p>
            Donations from outside India are accepted only in compliance with
            the Foreign Contribution (Regulation) Act (FCRA) and other
            applicable government regulations. International donors are advised
            to check eligibility before making contributions.
          </p>

          <h2>8. Policy Updates</h2>
          <p>
            This Donation Policy may be updated from time to time to reflect
            legal requirements, operational needs, or donor feedback. Any
            changes will be published on this page with a revised “Last Updated”
            date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For questions, clarifications, or refund requests, please reach out
            to us:
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
