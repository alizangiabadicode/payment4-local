import initTranslations from "@/app/i18n";

const PrivacyPolicyPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t, i18n } = await initTranslations(locale, ["translation"]);
  return (
    <div
      className="py-24 container px-[10px] md:pr-36 flex flex-col gap-y-[20px]"
      style={{ direction: i18n.dir() }}
    >
      <p className="font-bold text-[18px]">{t("privacyPolicy.introduction")}</p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
        {" "}
        {t("privacyPolicy.welcomeToPayment4Crypto")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px" }}
      >
        {t("privacyPolicy.privacyPolicyDesc")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.informationCollection")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.weCollectVariousTypesOfInformation")}
      </p>
      <ul style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.personalInformation")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.personalInformationDesc")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.paymentDetails")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.paymentDetailsDesc")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.UsageData")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.UsageDataDesc")}
          </p>
        </li>
        {/* <li>
            <p  style={{ fontWeight: 700, fontSize: '14px' }}>
              Cookies and Tracking Technologies:
            </p>{' '}
            Our website uses cookies and similar technologies to enhance your experience and provide personalized content. Cookies are small data files stored on your device that help us understand your
            preferences and improve our services.
          </li> */}
      </ul>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.useOfInformation")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.weUseTheInformation")}
      </p>
      <ul style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.processingCryptocurrencyTransactionsAndPayments")}
          </p>
        </li>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t(
              "privacyPolicy.providingCustomerSupportAndRespondingToInquiries"
            )}
          </p>
        </li>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.sendingImportantNotifications")}
          </p>
        </li>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.improvingOurWebsite")}
          </p>
        </li>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.analyzingUsagePatterns")}
          </p>
        </li>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.complyingWithLegal")}
          </p>
        </li>
      </ul>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.sharingOfInformation")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
        {t("privacyPolicy.weMayShareYourInformation")}
      </p>
      <ul style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.consentLi1")}
          </p>
        </li>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.requiredByLawLi2")}
          </p>
        </li>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.protectRightsLi3")}
          </p>
        </li>
        <li>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.mergerOrAcquisitionLi4")}
          </p>
        </li>
      </ul>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
        {t("privacyPolicy.weDoNotSellOrRent")}
      </p>
      <p className="font-bold text-[18px]">{t("privacyPolicy.dataSecurity")}</p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.securityParagraph")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.legalBasisForProcessing")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
        {t("privacyPolicy.weProcessYourPersonalInformation")}
      </p>
      <ul style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}>
        <li>
          <p className="font-bold">
            {t("privacyPolicy.processingBasis1Title")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.processingBasis1")}
          </p>
        </li>
        <li>
          <p className="font-bold">
            {t("privacyPolicy.processingBasis2Title")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.processingBasis2")}
          </p>
        </li>
        <li>
          <p className="font-bold">
            {t("privacyPolicy.processingBasis3Title")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.processingBasis3")}
          </p>
        </li>
        <li>
          <p className="font-bold">
            {t("privacyPolicy.processingBasis4Title")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.processingBasis4")}
          </p>
        </li>
        <li>
          <p className="font-bold">
            {t("privacyPolicy.processingBasis5Title")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.processingBasis5")}
          </p>
        </li>
      </ul>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.youHaveTheRightToObjectToCertainProcessing")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.yourRightsAsAUser")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.AsAUserOfOur")}
      </p>
      <ul style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.accountInformation")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.dataRetention1")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.transactionData")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.dataRetention2")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.usageData")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.dataRetention3")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.marketingCommunications")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.dataRetention4")}
          </p>
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.legalAndRegulatoryRequirements")}
          </p>
          <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
            {t("privacyPolicy.dataRetention5")}
          </p>
        </li>
      </ul>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.onceTheRetentionPeriodExpires")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.ifYouHaveAnyQuestions")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.updatestoPrivacyPolicy")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.weMayUpdateThisPrivacyPolicy")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.weEncourageYouToReview")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.ifThereAreSignificantChanges")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.contactInformation")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.concernsRelatedToThisPrivacyPolicy")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        support@payment4.com
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ fontSize: "14px" }}
      >
        {t("privacyPolicy.weAreCommittedToAddressingYourInquiries")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.legalCompliance")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px" }}
      >
        {t("privacyPolicy.ourDataProcessingActivities")}
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
