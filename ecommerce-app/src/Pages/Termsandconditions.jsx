import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Termsandconditions() {

useEffect(()=>{
  document.title="Terms and Condition | Pakistan textile Exchange"
})
  return (
   <>

   <div className="container my-5">
      <h1 className="mb-4">Terms and Conditions</h1>

      <p>
        Welcome to Pakistan Textile Exchange. These terms and conditions outline
        the rules and regulations for the use of our website and services.
      </p>

      <h5>1. Introduction</h5>
      <p>
        By accessing this website, you agree to comply with and be bound by
        these terms and conditions. If you do not agree with any part of these
        terms, you must not use our platform.
      </p>

      <h5>2. Intellectual Property Rights</h5>
      <p>
        All content published on this site, including product designs, images,
        specifications, and company branding, are the intellectual property of
        Pakistan Textile Exchange. Unauthorized reproduction or distribution is
        strictly prohibited.
      </p>

      <h5>3. Product Information</h5>
      <p>
        While we strive to ensure all product details such as fabric type,
        specifications, and colors are accurate, slight variations may occur due
        to screen resolution or production changes.
      </p>

      <h5>4. Pricing and Availability</h5>
      <p>
        All prices are subject to change without prior notice. Availability of
        textiles and garments depends on stock levels and production schedules.
      </p>

      <h5>5. Orders and Payments</h5>
      <p>
        Orders placed through our platform are subject to confirmation. Payment
        must be made through our secure gateway. Any cancellations or refunds
        will be governed by our Refund Policy.
      </p>

      <h5>6. Shipping and Delivery</h5>
      <p>
        Estimated delivery times are provided during checkout. We are not liable
        for delays caused by third-party logistics or customs clearance.
      </p>

      <h5>7. Limitation of Liability</h5>
      <p>
        Pakistan Textile Exchange shall not be held liable for any indirect,
        incidental, or consequential damages arising out of the use or inability
        to use our products or services.
      </p>

      <h5>8. Privacy</h5>
      <p>
        We value your privacy. Please refer to our <Link to="/PrivacyandPolicy">Privacy Policy</Link> for details on how we
        collect and handle your data.
      </p>

      <h5>9. Governing Law</h5>
      <p>
        These terms and conditions shall be governed by and interpreted in
        accordance with the laws of Pakistan.
      </p>

      <h5>10. Changes to Terms</h5>
      <p>
        We reserve the right to update or modify these terms at any time.
        Continued use of the website constitutes your acceptance of such changes.
      </p>

      <p className="mt-4">Last updated: May 29, 2025</p>
    </div>
   </>
  )
}
