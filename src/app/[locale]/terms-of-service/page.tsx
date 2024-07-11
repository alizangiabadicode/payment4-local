import initTranslations from "@/app/i18n";
import { utmTrackingServerSide } from "@/utils/server.side.utm.track";

const termsOfService = async ({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { t, i18n } = await initTranslations(locale, ["terms-of-service"]);
  const {
    utm_campaign: utmCampaign,
    utm_medium: utmMedium,
    utm_source: utmSource,
  } = searchParams as {
    [key: string]: string | undefined;
  };
  const trackUser = async () => {
    try {
      await utmTrackingServerSide(utmCampaign, utmMedium, utmSource);
    } catch (error) {
      console.error("Error tracking user:", error);
    }
  };
  trackUser();
  return (
    <div
      className="py-24 container px-[10px] md:pr-36 flex flex-col gap-y-[20px]"
      style={{ direction: i18n.dir() }}
    >
      <p className="font-bold text-[18px]" style={{ marginBottom: "1rem" }}>
        {t("termsOfService.title")}
      </p>
      <p style={{ marginBottom: "1rem", fontSize: "14px", fontWeight: 600 }}>
        {t("termsOfService.welcomeMessage")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ marginBottom: "1rem", lineHeight: 2, fontSize: "14px" }}
      >
        {t("termsOfService.termsContent")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ marginBottom: "1rem", lineHeight: 2, fontSize: "14px" }}
      >
        {t("termsOfService.contactUsText")}
      </p>
      <p className="font-bold text-[18px] mb-[1rem]">
        {t("termsOfService.acceptanceTitle")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px" }}
      >
        {t("termsOfService.accessAndConsentText")}
      </p>
      <p className="font-bold text-[18px] mb-[1rem]">
        {t("termsOfService.userEligibilityTitle")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px" }}
      >
        {t("termsOfService.userEligibilityText")}
      </p>
      <p className="font-bold text-[18px] mb-[1rem]">
        {t("termsOfService.accountCreationTitle")}
      </p>
      <div
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px" }}
      >
        {t("termsOfService.accountCreationAndSecurityText")}
        <p
          className="my-[2rem] dark:text-[#FFFFFFA1] text-[#121212A1]"
          style={{ lineHeight: 2, fontSize: "14px" }}
        >
          {t("termsOfService.accountResponsibilitiesText")}
        </p>
        <p
          className="my-[2rem] dark:text-[#FFFFFFA1] text-[#121212A1]"
          style={{ lineHeight: 2, fontSize: "14px" }}
        >
          {t("termsOfService.multipleAccountsAndSuspensionText")}
        </p>
        <p
          className="my-[2rem] dark:text-[#FFFFFFA1] text-[#121212A1]"
          style={{ lineHeight: 2, fontSize: "14px" }}
        >
          {t("termsOfService.accountSecurityRecommendationText")}
        </p>
        {i18n.language === "en" ? (
          <p className="my-[2rem]" style={{ lineHeight: 2, fontSize: "14px" }}>
            {t("termsOfService.privacyPolicyAcknowledgementText")}
          </p>
        ) : null}
      </div>
      <p className="font-bold text-[18px]" style={{ marginBottom: "1rem" }}>
        {t("termsOfService.userResponsibilitiesTitle")}
      </p>
      <p style={{ lineHeight: 2, marginBottom: "1rem", fontSize: "14px" }}>
        {t("termsOfService.responsibilitiesAndGuidelinesTitleText")}
      </p>
      <ul
        className="my-[2rem]"
        style={{ lineHeight: "2rem", fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.lawfulUse")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.lawfulUseText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.accurateInformation")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.accurateInformationText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.prohibitedActivities")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.prohibitedActivitiesText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.security")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.securityText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.PersonalUse")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.personalUseText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.Transactions")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.transactionsText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.thirdPartyContent")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.thirdPartyContentText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.Compliance")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.complianceText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.Feedback")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.feedbackText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.SuspensionOrTermination")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.suspensionOrTerminationText")}
          </p>
        </li>
      </ul>
      {i18n.language === "en" ? (
        <p style={{ marginBottom: "1rem", fontSize: "14px" }}>
          {t("termsOfService.useOfPlatformText")}
        </p>
      ) : null}
      <p className="font-bold text-[18px]" style={{ marginBottom: "1rem" }}>
        {t("termsOfService.paymentAndTransactionsTitle")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, marginBottom: "1rem", fontSize: "14px" }}
      >
        {t("termsOfService.platformSecurityAndPaymentsText")}
      </p>
      <ul
        style={{ lineHeight: "2rem", fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.TransactionDetails")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.transactionDetailsResponsibilityText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.TransactionConfirmation")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.irreversibleTransactionText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.TransactionFees")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.transactionFeesText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.CryptocurrencyConversion")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.cryptocurrencyConversionsText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.SecurityAndRisks")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.cryptocurrencyRisksText")}
          </p>
        </li>
        {i18n.language === "en" ? (
          <li>
            <p style={{ fontWeight: 700 }}>{t("termsOfService.Compliance")}</p>
            <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
              {t("termsOfService.complianceWithLawsText")}
            </p>
          </li>
        ) : null}
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.TransactionDisputesTitle")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.transactionDisputesResolutionText")}
          </p>
        </li>
      </ul>
      {i18n.language === "en" && (
        <p style={{ fontSize: "14px" }}>
          {t("termsOfService.acknowledgmentOfTermsText")}
        </p>
      )}
      <p className="font-bold text-[18px] mb-[1rem]">
        {t("termsOfService.intellectualPropertyTitle")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, marginBottom: "1rem", fontSize: "14px" }}
      >
        {t("termsOfService.intellectualPropertyProtectionText")}
      </p>
      <ul
        style={{ lineHeight: "2rem", fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.ownership")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.ownershipOfContentText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.limitedLicense")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.limitedLicenseText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.trademarks")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.trademarkProtectionText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.userContent")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.contentLicenseText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.prohibitedUse")}</p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.noExploitationWithoutPermissionText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.copyrightInfringement")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.reportIPInfringementText")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.thirdPartyContent")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("termsOfService.thirdPartyContentDisclaimerText")}
          </p>
        </li>
      </ul>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("termsOfService.UnauthorizedUseWarning")}
      </p>
    </div>
  );
};

export default termsOfService;
