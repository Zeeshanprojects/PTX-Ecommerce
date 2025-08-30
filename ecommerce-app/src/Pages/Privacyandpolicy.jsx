import React, { useEffect } from "react";

export default function Privacyandpolicy() {
  useEffect(() => {
    document.title = "Privacy and Policy |Pakistan Textile Exchange";
  });
  return (
    <>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5">
            <h1 className="mb-4 text-center fw-bold">Privacy Policy</h1>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 col-xl-7">
            <p>
              At Pakistan Textile Exchange, we are committed to protecting the
              privacy of our users, clients, and visitors. This Privacy Policy
              outlines how we collect, use, and protect your information when
              you interact with our textile platform.
            </p>

            <h5>1. Information We Collect</h5>
            <p>
              We may collect the following types of personal and
              business-related information:
            </p>
            <ul>
              <li>
                Name, company name, and contact details (email, phone, address)
              </li>
              <li>Textile orders, sample requests, and inquiry records</li>
              <li>Billing and payment information</li>
              <li>Website usage data through cookies and analytics tools</li>
            </ul>

            <h5>2. How We Use Your Information</h5>
            <p>Your information may be used for the following purposes:</p>
            <ul>
              <li>To process orders and deliver requested textile products</li>
              <li>To respond to your queries or sample requests</li>
              <li>
                To send transactional or promotional emails related to our
                textile offerings
              </li>
              <li>
                To improve our platform, services, and customer experience
              </li>
            </ul>

            <h5>3. Data Sharing and Disclosure</h5>
            <p>
              We do not sell, trade, or rent your personal information. However,
              we may share it with trusted third parties for:
            </p>
            <ul>
              <li>Order processing and logistics (e.g., shipping companies)</li>
              <li>Payment gateway providers</li>
              <li>Legal requirements, if mandated by law</li>
            </ul>

            <h5>4. Cookies and Tracking</h5>
            <p>
              Our website uses cookies to enhance user experience, analyze
              traffic, and personalize content. You can modify your browser
              settings to decline cookies.
            </p>

            <h5>5. Data Security</h5>
            <p>
              We implement reasonable security measures (SSL, firewalls, access
              control) to protect your data from unauthorized access,
              alteration, or disclosure.
            </p>

            <h5>6. Your Rights</h5>
            <p>You have the right to:</p>
            <ul>
              <li>Access the information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>

            <h5>7. Third-Party Links</h5>
            <p>
              Our website may contain links to third-party textile directories
              or partner sites. We are not responsible for their privacy
              practices.
            </p>

            <h5>8. Policy Updates</h5>
            <p>
              This Privacy Policy may be updated occasionally to reflect changes
              in legal or business practices. We encourage users to review it
              regularly.
            </p>

            <p className="mt-4">Last updated: May 29, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}
