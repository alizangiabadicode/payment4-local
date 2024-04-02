import React from "react";
import useDarkMode from "use-dark-mode";

const SecuritySection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div>
      <p
        className={`text-base leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        } mt-2`}
      >
        Payment4 prioritizes the security of your transactions and customer
        data. We employ robust security measures to safeguard your business and
        your customers. All communication with Payment4 is encrypted using
        industry-standard protocols to ensure the confidentiality and integrity
        of your data. Authentication is a critical aspect of our system.
        Merchants are required to use an API key when making requests to our
        API. This key serves as a secure identifier to authenticate your
        requests, preventing unauthorized access. For additional security, we
        also offer optional two-factor authentication (2FA) to add an extra
        layer of protection to your account. We strongly encourage merchants to
        enable 2FA for enhanced security.
      </p>
    </div>
  );
};

export default SecuritySection;
