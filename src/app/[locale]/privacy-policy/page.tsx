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
      <p className="font-bold text-[18px]">{t("PrivacyPolicy.introduction")}</p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">
        {" "}
        {t("PrivacyPolicy.welcomeToPayment4Crypto")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px" }}
      >
        {t("PrivacyPolicy.privacyPolicyDesc")}
      </p>
      <p className="font-bold text-[18px]">
        {t("PrivacyPolicy.informationCollection")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.weCollectVariousTypesOfInformation")}
      </p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("PrivacyPolicy.personalInformation")}
          </p>
          {t("PrivacyPolicy.personalInformationDesc")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("PrivacyPolicy.paymentDetails")}
          </p>{" "}
          {t("PrivacyPolicy.paymentDetailsDesc")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("PrivacyPolicy.UsageData")}
          </p>{" "}
          {t("PrivacyPolicy.UsageDataDesc")}
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
        {t("PrivacyPolicy.useOfInformation")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.weUseTheInformation")}
      </p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          {" "}
          {t("PrivacyPolicy.processingCryptocurrencyTransactionsAndPayments")}
        </li>
        <li>
          {t("PrivacyPolicy.providingCustomerSupportAndRespondingToInquiries")}
        </li>
        <li>{t("PrivacyPolicy.sendingImportantNotifications")}</li>
        <li>{t("PrivacyPolicy.improvingOurWebsite")}</li>
        <li>{t("PrivacyPolicy.analyzingUsagePatterns")}</li>
        <li>{t("PrivacyPolicy.complyingWithLegal")}</li>
      </ul>
      <p className="font-bold text-[18px]">
        {t("PrivacyPolicy.sharingOfInformation")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">{t("PrivacyPolicy.weMayShareYourInformation")}</p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>{t("PrivacyPolicy.consentLi1")}</li>
        <li>{t("PrivacyPolicy.requiredByLawLi2")}</li>
        <li>{t("PrivacyPolicy.protectRightsLi3")}</li>
        <li>{t("PrivacyPolicy.mergerOrAcquisitionLi4")}</li>
      </ul>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">{t("PrivacyPolicy.weDoNotSellOrRent")}</p>
      <p className="font-bold text-[18px]">{t("PrivacyPolicy.dataSecurity")}</p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>{t("PrivacyPolicy.securityParagraph")}</p>
      <p className="font-bold text-[18px]">
        {t("PrivacyPolicy.legalBasisForProcessing")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">{t("PrivacyPolicy.weProcessYourPersonalInformation")}</p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>{t("PrivacyPolicy.processingBasis1")}</li>
        <li>{t("PrivacyPolicy.processingBasis2")}</li>
        <li>{t("PrivacyPolicy.processingBasis3")}</li>
        <li>{t("PrivacyPolicy.processingBasis4")}</li>
        <li>{t("PrivacyPolicy.processingBasis5")}</li>
      </ul>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.youHaveTheRightToObjectToCertainProcessing")}
      </p>
      <p className="font-bold text-[18px]">
        {t("PrivacyPolicy.yourRightsAsAUser")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>{t("PrivacyPolicy.AsAUserOfOur")}</p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("PrivacyPolicy.accountInformation")}
          </p>{" "}
          {t("PrivacyPolicy.dataRetention1")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("PrivacyPolicy.transactionData")}
          </p>{" "}
          {t("PrivacyPolicy.dataRetention2")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("PrivacyPolicy.usageData")}
          </p>{" "}
          {t("PrivacyPolicy.dataRetention3")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("PrivacyPolicy.marketingCommunications")}
          </p>{" "}
          {t("PrivacyPolicy.dataRetention4")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("PrivacyPolicy.legalAndRegulatoryRequirements")}
          </p>{" "}
          {t("PrivacyPolicy.dataRetention5")}
        </li>
      </ul>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.onceTheRetentionPeriodExpires")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.ifYouHaveAnyQuestions")}
      </p>
      <p className="font-bold text-[18px]">
        {t("PrivacyPolicy.updatestoPrivacyPolicy")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.weMayUpdateThisPrivacyPolicy")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.weEncourageYouToReview")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.ifThereAreSignificantChanges")}
      </p>
      <p className="font-bold text-[18px]">
        {t("PrivacyPolicy.contactInformation")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.concernsRelatedToThisPrivacyPolicy")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>support@payment4.com</p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("PrivacyPolicy.weAreCommittedToAddressingYourInquiries")}
      </p>
      <p className="font-bold text-[18px]">
        {t("PrivacyPolicy.legalCompliance")}
      </p>
      <p
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px" }}
      >
        {t("PrivacyPolicy.ourDataProcessingActivities")}
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
