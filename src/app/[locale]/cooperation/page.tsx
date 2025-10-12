"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Cards from "./cards";
import BusinessPartner from "./business.partner";
import CooperationForm from "@/components/forms/cooperation.form";
import { Snackbar } from "@/components/shared";
import Input from "@/components/shared/textField";
import { useTranslation } from "react-i18next";
import { SignupIcon } from "@/icons/svg/signup";
import { Share } from "@/icons/svg/share";
import { EarnIcon } from "@/icons/svg/earn";
import { ProcessIcon } from "@/icons/svg/process";
import { WorldIcon } from "@/icons/svg/world";
import { TransactionIcon } from "@/icons/svg/transaction";
import { BlockchainIcon } from "@/icons/svg/blockchain";
import { Btc } from "@/icons/svg/btc";
import { PurpleHouse } from "@/icons/svg/purple _house";
import { PurpleBtc } from "@/icons/svg/purple_btc";
import { PurpleOnlineGame } from "@/icons/svg/purple_online_game";
import { PurpleEcommerce } from "@/icons/svg/purple_ecommerce";
import { PurpleFc } from "@/icons/svg/purple_fc";
import { PurpleIt } from "@/icons/svg/purple_it";
import { HandBackground } from '@/icons/svg/hands'
import { Button } from "@/components/shared/button";
import { HandMobileBackground } from "@/icons/svg/hands_mobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CooperationPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="container lg:px-[100px] p-6 max-w-6xl overflow-x-hidden">
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #8B5CF6 !important;
          width: 8px;
          height: 8px;
        }
      `}</style>
      {/* <Snackbar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message={t("successVendorRequest")}
      />
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div className="md:max-w-[490px] flex flex-col gap-[10px] mb-3">
          <p className="font-semibold text-[16px] lg:text-[24px] mb-[10px] text-center lg:text-start">
            {t("vendorPage.pageTitle")}
          </p>
          <p className="text-[12px] lg:text-[16px] text-center lg:text-start text-[#121212CC] dark:text-[#FFFFFFDE]">
            {t("vendorPage.pageDescription")}
          </p>
        </div>
        <div>
          <Image
            className="hidden dark:block"
            width={319}
            height={274}
            src={"/images/vendor.header.dark.png"}
            alt="vendor image"
          />
          <Image
            className="dark:hidden block"
            width={319}
            height={274}
            src={"/images/vendor.header.light.png"}
            alt="vendor image"
          />
        </div>
      </div>
      <Cards />
      <BusinessPartner />
      <div className="w-full flex justify-center">
        <CooperationForm setOpenSnackBar={setIsOpen} />
      </div> */}
      <div className="relative">
        {/* show different background in mobile and desktop view */}
        {isMobile ? <HandMobileBackground /> : <HandBackground />}

        <div className="absolute top-0 text-center text-xl md:text-2xl w-full font-semibold">

          Partner with Payment4
          <br /> <span className="text-xs md:text-2xl">
            A Simple Way to Earn from Crypto Payment Gateway
          </span>

          <div className="text-primary-text font-normal text-xs md:text-base mt-5 dark:text-[#D9D9D9]">
            The Payment4 affiliate program gives you the opportunity to earn by promoting our services. For every
            successful transaction made through your referral code, you will receive 20% of the transaction fee.
          </div>
        </div>
      </div>
      <div className="mt-16 dark:bg-dark-gradient-card md:bg-light-gradient-card p-6 rounded-md overflow-x-hidden">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4">
            {t("stepsToGetStarted.title")}
          </h2>
          <p className="text-xs md:text-base text-[#121212CC] dark:text-[#D9D9D9] max-w-3xl mx-auto">
            {t("stepsToGetStarted.subtitle")}
          </p>
        </div>

        {/* Conditional rendering: Mobile Carousel or Desktop Grid */}
        {isMobile ? (
          <div className="w-full overflow-hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#8B5CF6]',
              }}
              className="pb-12"
            >
              {/* Step 1: Sign Up */}
              <SwiperSlide>
                <div className="text-center px-4">
                  <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                    <SignupIcon />
                  </div>
                  <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-4">
                    {t("stepsToGetStarted.step1.title")}
                  </h3>
                  <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                    {t("stepsToGetStarted.step1.description")}
                  </p>
                </div>
              </SwiperSlide>

              {/* Step 2: Share Your Code */}
              <SwiperSlide>
                <div className="text-center px-4">
                  <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                    <Share />
                  </div>
                  <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-4">
                    {t("stepsToGetStarted.step2.title")}
                  </h3>
                  <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                    {t("stepsToGetStarted.step2.description")}
                  </p>
                </div>
              </SwiperSlide>

              {/* Step 3: Earn Commission */}
              <SwiperSlide>
                <div className="text-center px-4">
                  <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                    <EarnIcon />
                  </div>
                  <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-4">
                    {t("stepsToGetStarted.step3.title")}
                  </h3>
                  <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                    {t("stepsToGetStarted.step3.description")}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1: Sign Up */}
            <div className="text-center">
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <SignupIcon />
              </div>
              <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-4">
                {t("stepsToGetStarted.step1.title")}
              </h3>
              <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("stepsToGetStarted.step1.description")}
              </p>
            </div>

            {/* Step 2: Share Your Code */}
            <div className="text-center">
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <Share />
              </div>
              <h3 className="text-xl font-semibold text-[#121212] dark:text-white mb-4">
                {t("stepsToGetStarted.step2.title")}
              </h3>
              <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("stepsToGetStarted.step2.description")}
              </p>
            </div>

            {/* Step 3: Earn Commission */}
            <div className="text-center">
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <EarnIcon />
              </div>
              <h3 className="text-xl font-semibold text-[#121212] dark:text-white mb-4">
                {t("stepsToGetStarted.step3.title")}
              </h3>
              <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("stepsToGetStarted.step3.description")}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Why Partner With Payment4? Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-[22px] font-semibold text-black dark:text-white mb-4">
            {t("whyPartnerWithPayment4.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Secure & Transparent Payments */}
          <div className="flex items-start space-x-4">
            <div className=" flex-shrink-0 flex items-center justify-center">
              <ProcessIcon />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#121212] dark:text-white mb-1">
                {t("whyPartnerWithPayment4.securePayments.title")}
              </h3>
              <p className="text-xs md:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("whyPartnerWithPayment4.securePayments.description")}
              </p>
            </div>
          </div>

          {/* Unlimited Referral Code */}
          <div className="flex items-start space-x-4">
            <div className=" flex-shrink-0 flex items-center justify-center">
              <WorldIcon />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#121212] dark:text-white mb-1">
                {t("whyPartnerWithPayment4.unlimitedReferral.title")}
              </h3>
              <p className="text-xs md:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("whyPartnerWithPayment4.unlimitedReferral.description")}
              </p>
            </div>
          </div>

          {/* 20% Commission */}
          <div className="flex items-start space-x-4">
            <div className=" flex-shrink-0 flex items-center justify-center">
              <BlockchainIcon />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#121212] dark:text-white mb-1">
                {t("whyPartnerWithPayment4.commission.title")}
              </h3>
              <p className="text-xs md:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("whyPartnerWithPayment4.commission.description")}
              </p>
            </div>
          </div>

          {/* Real-Time Reporting */}
          <div className="flex items-start space-x-4">
            <div className=" flex-shrink-0 flex items-center justify-center">
              <TransactionIcon />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#121212] dark:text-white mb-1">
                {t("whyPartnerWithPayment4.realTimeReporting.title")}
              </h3>
              <p className="text-xs md:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("whyPartnerWithPayment4.realTimeReporting.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculate your profit Section */}
      <div className="mt-20 relative dark:bg-dark-gradient-card md:bg-light-gradient-card p-6 rounded-md">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-900/10 dark:via-gray-900/5 dark:to-blue-900/10 rounded-3xl"></div>

        <div className="relative z-10">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#121212] dark:text-white mb-6 leading-tight">
              {t("calculateYourProfit.title")}
            </h2>
            <p className="text-base text-[#121212CC] dark:text-[#FFFFFFDE] max-w-2xl mx-auto leading-relaxed">
              {t("calculateYourProfit.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - BTC Icon */}
            <div className=" justify-center hidden md:flex lg:justify-end">
              <div className=" flex items-end justify-center">
                <Btc />
              </div>
            </div>

            {/* Right side - Calculator */}
            <div className="space-y-8">
              {/* Transaction volume input */}
              <div>
                <label className="block text-lg font-medium text-[#121212a6] dark:text-white mb-3">
                  {t("calculateYourProfit.transactionVolume")}
                </label>
                <div className="flex items-center space-x-3">
                  <div
                    className="flex-1"
                  >
                    <Input
                      type="number"
                      placeholder="0"
                    />
                  </div>
                  <span className="text-lg text-[#121212a6] ont-medium text-[#121212] dark:text-white">BTC</span>
                </div>
              </div>

              {/* Maximum profit display */}
              <div>
                <label className="block text-sm font-medium text-[#121212] dark:text-white mb-3 text-[#121212a6]">
                  {t("calculateYourProfit.maximumProfit")}
                </label>
                <div className="text-xl font-semibold text-[#121212a6] dark:text-[#A5A5A6]">
                  0 BTC
                </div>
              </div>

              {/* Start earning button */}
              <Button variant="contained" size="md" className="w-full">
                {t("calculateYourProfit.startEarning")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment4 Solutions for Different Industries Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl  font-semibold text-[#121212] dark:text-white mb-4">
            {t("solutionsForIndustries.title")}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Online Gaming */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleOnlineGame />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("solutionsForIndustries.onlineGaming")}
            </h3>
          </div>

          {/* Real Estate & Automotive */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleHouse />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("solutionsForIndustries.realEstateAutomotive")}
            </h3>
          </div>

          {/* E-commerce Stores */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleEcommerce />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("solutionsForIndustries.ecommerceStores")}
            </h3>
          </div>

          {/* IT Service Providers */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleIt />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("solutionsForIndustries.itServiceProviders")}
            </h3>
          </div>

          {/* Freelancers and Businesses */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleFc />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("solutionsForIndustries.freelancersAndBusinesses")}
            </h3>
          </div>

          {/* Trading Platforms */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleBtc />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("solutionsForIndustries.tradingPlatforms")}
            </h3>
          </div>
        </div>

        {/* Explore All Solutions Button */}
        <div className="text-center mt-12">
          {/* <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            {t("solutionsForIndustries.exploreAllSolutions")}
          </button> */}
          <Button variant="contained" size="md" className="w-full md:w-auto">
            {t("solutionsForIndustries.exploreAllSolutions")}
          </Button>
        </div>
      </div>

      {/* Join Us Today Section */}
      <div className="mt-20 relative dark:bg-dark-gradient-card md:bg-light-gradient-card p-6 rounded-md">
        {/* Background gradient */}
        <div className="relative z-10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 mr-3">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#EF4444" />
                    <path d="M12 6L12.5 8.5L15 9L12.5 9.5L12 12L11.5 9.5L9 9L11.5 8.5L12 6Z" fill="#F97316" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#121212] dark:text-white">
                  {t("joinUsToday.title")}
                </h2>
              </div>
              <p className="text-sm text-[#121212] dark:text-[#FFFFFFDE] mb-2">
                {t("joinUsToday.subtitle1")}
              </p>
              <p className="text-base text-[#121212] dark:text-[#FFFFFFDE]">
                {t("joinUsToday.subtitle2")}
              </p>
            </div>

            <form className="space-y-4">
              <Input
                type="text"
                placeholder={t("joinUsToday.namePlaceholder")}
              />

              <Input
                type="email"
                placeholder={t("joinUsToday.emailPlaceholder")}
              />

              <Input
                type="tel"
                placeholder={t("joinUsToday.phonePlaceholder")}
              />

              <div className="flex justify-center">
                <Button variant="contained" size="md" className="w-full md:w-auto">
                  {t("joinUsToday.joinUsButton")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationPage;
