import React from "react";
import Logo from "../../../images/svg/logo";
import {
  LinkedinIcon,
  TelegramIcon,
  XLogo,
  YoutubeIcon,
} from "../../../images/svg";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer
      style={{ borderTopColor: "#E5E5E5" }}
      className="border-t grid grid-cols-1 sm:grid-cols-2 p-4 sm:py-6 gap-y-8"
    >
      <div className="flex flex-col items-center sm:items-start md:pl-32">
        <div className="flex flex-col gap-y-4 sm:gap-y-4">
          <div>
            <Logo />
          </div>
          <div className="sm:max-w-64 flex">
            <p className="text-sm text-primary-text leading-6">
              With a focus on innovation, security, and user experience, we aim
              to provide you with the best tools for cryptocurrency payments and
              transactions.
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
            <div className="cursor-pointer">
              <XLogo />
            </div>
            <div className="cursor-pointer">
              <TelegramIcon />
            </div>
            <div className="cursor-pointer">
              <YoutubeIcon />
            </div>
            <div className="cursor-pointer">
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-y-7 sm:gap-0">
        <div className="flex flex-col gap-3">
          <p style={{ fontSize: "14px", fontWeight: 700 }}>Menu</p>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              Home
            </Link>
            <Link
              to="/developers"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              Developers
            </Link>
            <Link
              to="/documents"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              Documents
            </Link>
            <Link
              to="/about"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p style={{ fontSize: "14px", fontWeight: 700 }}>Follow us</p>
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: "12px" }} className="text-primary-text">
              Linkedin
            </p>
            <p style={{ fontSize: "12px" }} className="text-primary-text">
              Telegram
            </p>
            <p style={{ fontSize: "12px" }} className="text-primary-text">
              Twitter
            </p>
            <p style={{ fontSize: "12px" }} className="text-primary-text">
              Instagram
            </p>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-4 items-center">
          <div className="cursor-pointer">
            <XLogo />
          </div>
          <div className="cursor-pointer">
            <TelegramIcon />
          </div>
          <div className="cursor-pointer">
            <YoutubeIcon />
          </div>
          <div className="cursor-pointer">
            <LinkedinIcon />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p style={{ fontSize: "14px", fontWeight: 700 }}>Resources</p>
          <div className="flex flex-col gap-2">
            <Link
              to="/terms-of-service"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              Terms of service
            </Link>
            <Link
              to="privacy-policy"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              Privacy Policy
            </Link>
            <Link
              to="faq"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p style={{ fontSize: "14px", fontWeight: 700 }}>Company</p>
          <div className="flex flex-col gap-2">
            <Link
              to="/about"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              About
            </Link>
            <Link
              to="/contact-us"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              style={{ fontSize: "12px" }}
              className="text-primary-text"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center sm:items-start">
          <p style={{ fontSize: "14px", fontWeight: 700 }}>Product</p>
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: "12px" }} className="text-primary-text">
              Log In
            </p>
            <p style={{ fontSize: "12px" }} className="text-primary-text">
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
