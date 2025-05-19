import React from "react";
import "../css/Footer.css";
import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaXTwitter },
    { label: "Dribbble", icon: FaDribbble },
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Blog", key: "item-1-2" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Pricing", key: "item-1-4" },
      { label: "Testimonials", key: "item-1-5" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  ];

  return (
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-left">
          <div className="footer-brand">
            <img src="/logo.png" alt="logo" className="footer-logo" />
            <span className="footer-company">Nimory</span>
          </div>
          <div className="footer-info">
            <span>Copyright © 2020 Nexcent ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-socials">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return <Icon key={i} className="social-icon" />;
            })}
          </div>
        </div>

        <div className="footer-links">
          {links.map((column, i) => (
            <ul key={i}>
              {column.map((item, j) => (
                <li
                  key={j}
                  className={
                    item.key.includes("header")
                      ? "footer-heading"
                      : "footer-link"
                  }
                >
                  {item.label}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="footer-subscribe">
          <label className="subscribe-label">Stay up to date</label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="subscribe-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
