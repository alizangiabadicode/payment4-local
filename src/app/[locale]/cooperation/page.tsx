import React from "react";
import Input from "@/components/shared/textField";
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
import MobileStepsCarousel from "./mobile-steps-carousel";
import initTranslations from "../../i18n";

const i18nNamespaces = ["cooperation"];

async function CooperationPage ({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <div className="container lg:px-[100px] p-6 max-w-6xl overflow-x-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />

      <div className="relative">
        {/* show different background in mobile and desktop view */}
        <div className="hidden md:block">
          <HandBackground />
        </div>
        <div className="block md:hidden">
          <HandMobileBackground />
        </div>

        <div className="absolute top-0 text-center text-xl md:text-2xl w-full font-semibold">
          <h1 className="all-unset">
            {t("hero.title")}
          </h1>
          <br className="hidden md:block" />
          <span className="text-xs md:text-2xl block md:inline-block">
            {t("hero.subtitle")}
          </span>

          <div className="text-primary-text font-normal text-xs md:text-base mt-0.5 md:mt-5 dark:text-[#D9D9D9]">
            {t("hero.description")}
          </div>

          <Button variant="contained" size="sm" className="w-auto mt-8 min-w-[208px] md:min-w-[218px]">
            {t("hero.getStarted")}
          </Button>
        </div>
      </div>
      <div className="mt-16 bg-transparent  md:dark:bg-dark-gradient-card md:bg-light-gradient-card md:p-6 rounded-md overflow-x-hidden">
        <div className="text-center mb-3 md:mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4">
            {t("steps.title")}
          </h2>
          <p className="text-xs md:text-base text-[#121212CC] dark:text-[#D9D9D9] max-w-3xl mx-auto">
            {t("steps.description")}
          </p>
        </div>

        {/* Mobile Carousel - Hidden on desktop */}
        <MobileStepsCarousel
          step1Title={t("steps.step1.title")}
          step1Description={t("steps.step1.description")}
          step2Title={t("steps.step2.title")}
          step2Description={t("steps.step2.description")}
          step3Title={t("steps.step3.title")}
          step3Description={t("steps.step3.description")}
        />

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Step 1: Sign Up */}
          <div className="text-center">
            <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
              <SignupIcon />
            </div>
            <h3 className="text-lg font-semibold text-[#121212] dark:text-white mb-4">
              {t("steps.step1.title")}
            </h3>
            <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
              {t("steps.step1.description")}
            </p>
          </div>

          {/* Step 2: Share Your Code */}
          <div className="text-center">
            <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
              <Share />
            </div>
            <h3 className="text-xl font-semibold text-[#121212] dark:text-white mb-4">
              {t("steps.step2.title")}
            </h3>
            <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
              {t("steps.step2.description")}
            </p>
          </div>

          {/* Step 3: Earn Commission */}
          <div className="text-center">
            <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
              <EarnIcon />
            </div>
            <h3 className="text-xl font-semibold text-[#121212] dark:text-white mb-4">
              {t("steps.step3.title")}
            </h3>
            <p className="text-sm lg:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
              {t("steps.step3.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Why Partner With Payment4? Section */}
      <div className="mt-20">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-[22px] font-semibold text-black dark:text-white mb-4">
            {t("whyPartner.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Secure & Transparent Payments */}
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className=" flex-shrink-0 flex items-center justify-center">
              <ProcessIcon />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#121212] dark:text-white mb-1">
                {t("whyPartner.features.securePayments.title")}
              </h3>
              <p className="text-xs md:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("whyPartner.features.securePayments.description")}
              </p>
            </div>
          </div>

          {/* Unlimited Referral Code */}
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className=" flex-shrink-0 flex items-center justify-center">
              <WorldIcon />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#121212] dark:text-white mb-1">
                {t("whyPartner.features.unlimitedCodes.title")}
              </h3>
              <p className="text-xs md:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("whyPartner.features.unlimitedCodes.description")}
              </p>
            </div>
          </div>

          {/* 20% Commission */}
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className=" flex-shrink-0 flex items-center justify-center">
              <BlockchainIcon />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#121212] dark:text-white mb-1">
                {t("whyPartner.features.commission.title")}
              </h3>
              <p className="text-xs md:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("whyPartner.features.commission.description")}
              </p>
            </div>
          </div>

          {/* Real-Time Reporting */}
          <div className="flex items-start space-x-4 rtl:space-x-reverse">
            <div className=" flex-shrink-0 flex items-center justify-center">
              <TransactionIcon />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold text-[#121212] dark:text-white mb-1">
                {t("whyPartner.features.reporting.title")}
              </h3>
              <p className="text-xs md:text-base text-[#121212CC] dark:text-[#FFFFFFDE] leading-relaxed">
                {t("whyPartner.features.reporting.description")}
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
              {t("calculator.title")}
            </h2>
            <p className="text-base text-[#121212CC] dark:text-[#FFFFFFDE] max-w-2xl mx-auto leading-relaxed mb-7 md:mb-unset">
              {t("calculator.description")}
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
                <div>
                  <label className="block text-lg font-medium text-[#121212a6] dark:text-white mb-3">
                    {t("calculator.transactionVolume")}
                  </label>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div
                      className="flex-1"
                    >
                      <Input
                        type="number"
                        placeholder="0"
                      />
                    </div>
                    <span className="text-lg text-[#121212a6] font-medium text-[#121212] dark:text-white">{t("calculator.btc")}</span>
                  </div>
                </div>

                {/* Maximum profit display */}
                <div>
                  <label className="block text-sm font-medium text-[#121212] dark:text-white mb-3 text-[#121212a6]">
                    {t("calculator.maximumProfit")}
                  </label>
                  <div className="text-xl font-semibold text-[#121212a6] dark:text-[#A5A5A6]">
                    0 {t("calculator.btc")}
                  </div>
                </div>

              </div>
              {/* Start earning button */}
              <Button variant="contained" size="xs" className="w-full">
                {t("calculator.startEarning")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment4 Solutions for Different Industries Section */}
      <div className="mt-20">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-2xl  font-semibold text-[#121212] dark:text-white mb-4">
            {t("industries.title")}
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Online Gaming */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleOnlineGame />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("industries.onlineGaming")}
            </h3>
          </div>

          {/* Real Estate & Automotive */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleHouse />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("industries.realEstate")}
            </h3>
          </div>

          {/* E-commerce Stores */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleEcommerce />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("industries.ecommerce")}
            </h3>
          </div>

          {/* IT Service Providers */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleIt />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("industries.itServices")}
            </h3>
          </div>

          {/* Freelancers and Businesses */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleFc />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("industries.freelancers")}
            </h3>
          </div>

          {/* Trading Platforms */}
          <div className="text-center">
            <div className="w-11 h-11 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
              <PurpleBtc />
            </div>
            <h3 className="text-xs md:text-lg font-semibold text-[#121212] dark:text-white">
              {t("industries.trading")}
            </h3>
          </div>
        </div>

        {/* Explore All Solutions Button */}
        <div className="text-center mt-12">
          <Button variant="contained" size="xs" className="w-full md:w-auto">
            {t("industries.exploreAll")}
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
                <h2 className="text-xl md:text-2xl font-semibold text-[#121212] dark:text-white">
                  🚀
                  &nbsp;
                  {t("joinUs.title")}
                </h2>
              </div>
              <p className="text-sm text-[#121212] dark:text-[#FFFFFFDE] mb-2">
                {t("joinUs.subtitle")}
              </p>
              <p className="text-sm md:text-base text-[#121212] dark:text-[#FFFFFFDE]">
                {t("joinUs.description")}
              </p>
            </div>

            <form className="space-y-4">
              <Input
                type="text"
                placeholder={t("joinUs.form.name")}
              />

              <Input
                type="email"
                placeholder={t("joinUs.form.email")}
              />

              <Input
                type="tel"
                placeholder={t("joinUs.form.phone")}
              />

              <div className="flex justify-center">
                <Button variant="contained" size="xs" className="w-full md:w-auto">
                  {t("joinUs.form.submit")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata ({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: `${t("meta.title")} | Payment4`,
    description: t("meta.description"),
  };
}

export default CooperationPage;
