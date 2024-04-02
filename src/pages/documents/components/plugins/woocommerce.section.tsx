import React from "react";
import useDarkMode from "use-dark-mode";

export const WoocommerceSection = () => {
  const { value: isDark } = useDarkMode();

  return (
    <div className="px-4 py-5">
      <p
        className={`text-base font-semibold  ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Installation
      </p>
      <p
        className={`text-base font-semibold mt-3 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        step 1
      </p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Download and Install Payment4 Plugin. Begin by downloading the Payment4
        plugin from
        <a href={process.env.REACT_APP_WOOCOMMERCE_PLUGIN_URL}>Download Link</a>
        . Head to your WordPress admin dashboard. Navigate to "Plugins" and
        click on "Add New." Activate the plugin.
      </p>
      <p className="text-base font-semibold mt-5">step 2</p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Configure Plugin Settings. In the WordPress dashboard, go to
        "WooCommerce" and select "Settings." Click on the "Payments" tab and
        locate "Payment4" among the available payment options and click on it.
      </p>
      <p
        className={`text-base font-semibold mt-3 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        step 3
      </p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Fill in Plugin Settings. Locate the plugin setting form containing the
        following fields. Complete the required details as outlined below:
      </p>
      <ul
        className="text-base font-normal leading-8 ml-6 my-5"
        style={{ listStyle: "outside" }}
      >
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          Enable/Disable: Toggle to enable or disable the plugin.
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          Sandbox: When enabled, the payment process will generate developer
          mode links. Recommend this only for testing purposes and not in a
          production environment.
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          API Key: Enter the API key received from the merchant panel of
          Payment4. To obtain an API key, you must first sign up.
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          Success Payment Message: Define the success payment message that will
          be displayed on your website.
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          Failed Payment Message: Specify the message displayed on your website
          in case of a failed payment.
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          Acceptable Payment Message: Set the message displayed for successful
          payments on your website.
        </li>
        <li className={`${isDark ? "text-white" : "text-black"}`}>
          Mismatch Payment Message: Determine the message displayed in case of a
          mismatched payment on your website.
        </li>
      </ul>
      <p
        className={`text-base font-semibold mt-3 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        step 4
      </p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Optimize WooCommerce Checkout Page. To ensure compatibility, go to the
        WooCommerce settings. Under the "Checkout" tab, find the option to
        switch the checkout page style to classic.
      </p>
      <p
        className={`text-base font-semibold mt-3 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        step 5
      </p>
      <p
        className={`text-base font-normal leading-8 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Seamlessly Use Payment4. With the plugin configured and settings saved,
        Payment4 becomes an available payment gateway during the checkout
        process. Customers can now enjoy a smooth and secure payment experience
        on your WooCommerce store.
      </p>
      <p
        className={`text-base mt-5 ${
          isDark
            ? "text-[#FFFFFFC7] opacity-[78%]"
            : "text-[#121212C7] opacity-[78%]"
        }`}
      >
        Download, install, and enhance your WooCommerce store with Payment4.
        Need the plugin?{" "}
        <a href={process.env.REACT_APP_WOOCOMMERCE_PLUGIN_URL}>Download Link</a>
        . Fill in the simple form, optimize your checkout page, and offer a
        streamlined payment experience to your customers!
      </p>
    </div>
  );
};
