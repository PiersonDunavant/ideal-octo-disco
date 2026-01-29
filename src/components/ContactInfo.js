import React from 'react';

function ContactInfo() {
  return (
    <div className="contact-info">
      <p>Email: <a href="mailto:pdunavan@hgtc.edu">you@example.com</a></p>
      <p>Phone: <a href="tel:+5403764166">+1 (234) 567-890</a></p>
      <p>GitHub: <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer">YourUsername</a></p>
    </div>
  );
}

export default ContactInfo;
