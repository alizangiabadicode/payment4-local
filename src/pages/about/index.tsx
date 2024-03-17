import React, { ReactNode } from "react";
import aboutMissionImg from "../../images/about-mission.png";
import {
  AttachIcon,
  BackSlashIcon,
  CheckCartIcon,
  CheckIcon,
} from "../../images/svg";
import useDarkMode from "use-dark-mode";
import { Button } from "../../components/shared/button";

interface reasonsToChoosePayment4 {
  title: string;
  logo: ReactNode;
  desc: string;
}

const reasonsToChoosePayment4: reasonsToChoosePayment4[] = [
  {
    title: "Secure and Reliable Transactions",
    logo: <CheckIcon />,
    desc: "Payment4 ensures secure transactions and protects user funds with robust encryption and reliable storage of private keys.",
  },
  {
    title: "Seamless Integration for Merchants",
    logo: <BackSlashIcon />,
    desc: "Payment4's user friendly APIs and customizable solutions expand payment options seamlessly for merchants.",
  },
  {
    title: "Fast and Cost-Effective Settlements",
    logo: <CheckCartIcon />,
    desc: "Payment4 optimizes gas fees, ensuring fast settlements for merchants with minimal fees access.",
  },
  {
    title: "Innovative Features and Flexibility",
    logo: <AttachIcon />,
    desc: "Payment4 enhances crypto payments with custom paylinks, a referral program, and innovative tools.",
  },
];

const AboutUs = () => {
  const { value: isDark } = useDarkMode();
  return (
    <div className="flex flex-col items-center lg:px-[300px] mt-[20px]">
      <div className="flex flex-col gap-y-[8px] px-5 md:px-0">
        <p className={`text-[18px] font-bold text-center`}>
          Payment4 Innovating Secure Crypto Payments
        </p>
        <p className={` text-center text-[13px] `}>
          At Payment4, we're redefining the way the world pays. As a leading
          cryptocurrency payment gateway service, we empower businesses and
          individuals to seamlessly integrate cryptocurrency payments into their
          transactions, providing a secure, efficient, and borderless payment
          solution.
        </p>
      </div>
      <div className="px-5 md:px-0 grid grid-rows-2 grid-cols-3 md:grid-rows-1 md:grid-cols-4  justify-items-center gap-10 mt-[40px] mb-[90px]">
        <div className="flex flex-col items-center">
          <p className={`text-[28px] text-[#9E6DFF] font-bold`}>+100</p>
          <p>Registered</p>
        </div>
        <div className="flex flex-col items-center">
          <p className={`text-[28px] text-[#9E6DFF] font-bold`}>+20000</p>
          <p>Payment daily</p>
        </div>
        <div className="flex flex-col items-center">
          <p className={`text-[28px] text-[#9E6DFF] font-bold`}>+1000</p>
          <p>Merchant</p>
        </div>
        <div className="flex flex-col col-span-3 md:col-span-1 justify-center items-center">
          <p className={`text-[28px] text-[#9E6DFF] font-bold`}>+200</p>
          <p>Team Members</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-5">
        <div className="flex flex-col md:w-1/2 px-5 md:px-0">
          <p className={`text-[18px] md:text-[24px] font-bold`}>Our Mission</p>
          <p className={`text-[16px]`}>
            Our mission is clear: to make cryptocurrency payments accessible and
            straightforward for everyone. We believe in the potential of
            blockchain technology to revolutionize the financial landscape, and
            we're on a mission to ensure that no one is left behind.
          </p>
        </div>
        <div className="px-5">
          <img src={aboutMissionImg} alt="" />
        </div>
      </div>
      <div className="px-5 md:px-0 flex flex-col gap-y-5">
        <div>
          <p className={`text-[18px] md:text-[24px] font-bold`}>
            Why Choose Payment4?
          </p>
        </div>
        <div className="flex flex-col gap-y-5 md:grid grid-cols-2 md:gap-x-[195px] md:gap-y-[67px]">
          {reasonsToChoosePayment4.map((item) => (
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                {item.logo}
                <p className={`text-[14px] md:text-[16px] font-semibold`}>
                  {item.title}
                </p>
              </div>
              <div>
                <p className={`text-[12px] md:text-[14px]`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[10px] my-[100px]">
        <div
          className={`rounded-[8px] bg-light-gradient pt-[40px] px-[70px] pb-[50px] flex flex-col items-center gap-y-[20px]`}
        >
          <p className={`text-[18px] md:text-[20px] font-semibold`}>
            Ready to get started?
          </p>
          <p
            className={`text-[12px] md:text-[14px] ${
              isDark
                ? "text-[#FFFFFFC7] opacity-[78%]"
                : "text-[#121212C7] opacity-[78%]"
            }`}
          >
            Join the hundreds of businesses already using Payment4. It's free to
            sign up
          </p>
          <div>
            <Button className="px-[64px] py-[5px] rounded-[8px]">
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
