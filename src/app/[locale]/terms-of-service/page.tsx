import initTranslations from "@/app/i18n";

const termsOfService = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t, i18n } = await initTranslations(locale, ["terms-of-service"]);
  return (
    <div
      className="py-24 container px-[10px] md:pr-36 flex flex-col gap-y-[20px]"
      style={{ direction: i18n.dir() }}
    >
      <p className="font-bold text-[18px]" style={{ marginBottom: "1rem" }}>
        {t("termsOfService.title")}
      </p>
      <p style={{ marginBottom: "1rem", fontSize: "14px" }}>
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
        className="my-[2rem] dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: "2rem", fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.lawfulUse")}</p>{" "}
          {t("termsOfService.lawfulUseText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.accurateInformation")}
          </p>{" "}
          {t("termsOfService.accurateInformationText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.prohibitedActivities")}
          </p>{" "}
          {t("termsOfService.prohibitedActivitiesText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.security")}</p>{" "}
          {t("termsOfService.securityText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.PersonalUse")}</p>{" "}
          {t("termsOfService.personalUseText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.Transactions")}</p>{" "}
          {t("termsOfService.transactionsText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.thirdPartyContent")}
          </p>{" "}
          {t("termsOfService.thirdPartyContentText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.Compliance")}</p>{" "}
          {t("termsOfService.complianceText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.Feedback")}</p>{" "}
          {t("termsOfService.feedbackText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.SuspensionOrTermination")}
          </p>{" "}
          {t("termsOfService.suspensionOrTerminationText")}
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
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: "2rem", fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.TransactionDetails")}
          </p>
          {t("termsOfService.transactionDetailsResponsibilityText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.TransactionConfirmation")}
          </p>
          {t("termsOfService.irreversibleTransactionText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.TransactionFees")}
          </p>
          {t("termsOfService.transactionFeesText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.CryptocurrencyConversion")}
          </p>
          {t("termsOfService.cryptocurrencyConversionsText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.SecurityAndRisks")}
          </p>
          {t("termsOfService.cryptocurrencyRisksText")}
        </li>
        {i18n.language === "en" ? (
          <li>
            <p style={{ fontWeight: 700 }}>{t("termsOfService.Compliance")}</p>{" "}
            {t("termsOfService.complianceWithLawsText")}
          </li>
        ) : null}
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.TransactionDisputesTitle")}
          </p>{" "}
          {t("termsOfService.transactionDisputesResolutionText")}
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
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: "2rem", fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.ownership")}</p>{" "}
          {t("termsOfService.ownershipOfContentText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.limitedLicense")}
          </p>{" "}
          {t("termsOfService.limitedLicenseText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.trademarks")}</p>{" "}
          {t("termsOfService.trademarkProtectionText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.userContent")}</p>{" "}
          {t("termsOfService.contentLicenseText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>{t("termsOfService.prohibitedUse")}</p>{" "}
          {t("termsOfService.noExploitationWithoutPermissionText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.copyrightInfringement")}
          </p>{" "}
          {t("termsOfService.reportIPInfringementText")}
        </li>
        <li>
          <p style={{ fontWeight: 700 }}>
            {t("termsOfService.thirdPartyContent")}
          </p>{" "}
          {t("termsOfService.thirdPartyContentDisclaimerText")}
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
