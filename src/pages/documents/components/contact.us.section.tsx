import React from "react";
import useDarkMode from "use-dark-mode";

const ContactUsSection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className="space-y-3 px-4 py-5">
      <p
        className={`text-base font-semibold leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        We understand that questions and issues may arise while using our
        service. Our dedicated support team is here to assist you promptly. For
        any inquiries, assistance, or support requests, please contact us:
      </p>
      <p
        className={`text-base font-semibold ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Email: support@payment4.com
      </p>
      <p
        className={`text-base font-semibold leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Our team is committed to providing exceptional support to ensure a
        smooth experience for our merchants.
      </p>
    </div>
  );
};

export default ContactUsSection;
