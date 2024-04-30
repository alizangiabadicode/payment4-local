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
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.weCollectVariousTypesOfInformation")}
      </p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.personalInformation")}
          </p>
          {t("privacyPolicy.personalInformationDesc")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.paymentDetails")}
          </p>{" "}
          {t("privacyPolicy.paymentDetailsDesc")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.UsageData")}
          </p>{" "}
          {t("privacyPolicy.UsageDataDesc")}
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
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.weUseTheInformation")}
      </p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          {" "}
          {t("privacyPolicy.processingCryptocurrencyTransactionsAndPayments")}
        </li>
        <li>
          {t("privacyPolicy.providingCustomerSupportAndRespondingToInquiries")}
        </li>
        <li>{t("privacyPolicy.sendingImportantNotifications")}</li>
        <li>{t("privacyPolicy.improvingOurWebsite")}</li>
        <li>{t("privacyPolicy.analyzingUsagePatterns")}</li>
        <li>{t("privacyPolicy.complyingWithLegal")}</li>
      </ul>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.sharingOfInformation")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">{t("privacyPolicy.weMayShareYourInformation")}</p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>{t("privacyPolicy.consentLi1")}</li>
        <li>{t("privacyPolicy.requiredByLawLi2")}</li>
        <li>{t("privacyPolicy.protectRightsLi3")}</li>
        <li>{t("privacyPolicy.mergerOrAcquisitionLi4")}</li>
      </ul>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">{t("privacyPolicy.weDoNotSellOrRent")}</p>
      <p className="font-bold text-[18px]">{t("privacyPolicy.dataSecurity")}</p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>{t("privacyPolicy.securityParagraph")}</p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.legalBasisForProcessing")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]">{t("privacyPolicy.weProcessYourPersonalInformation")}</p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>{t("privacyPolicy.processingBasis1")}</li>
        <li>{t("privacyPolicy.processingBasis2")}</li>
        <li>{t("privacyPolicy.processingBasis3")}</li>
        <li>{t("privacyPolicy.processingBasis4")}</li>
        <li>{t("privacyPolicy.processingBasis5")}</li>
      </ul>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.youHaveTheRightToObjectToCertainProcessing")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.yourRightsAsAUser")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>{t("privacyPolicy.AsAUserOfOur")}</p>
      <ul
        className="dark:text-[#FFFFFFA1] text-[#121212A1]"
        style={{ lineHeight: 2, fontSize: "14px", listStyle: "outside" }}
      >
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.accountInformation")}
          </p>{" "}
          {t("privacyPolicy.dataRetention1")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.transactionData")}
          </p>{" "}
          {t("privacyPolicy.dataRetention2")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.usageData")}
          </p>{" "}
          {t("privacyPolicy.dataRetention3")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.marketingCommunications")}
          </p>{" "}
          {t("privacyPolicy.dataRetention4")}
        </li>
        <li>
          <p style={{ fontWeight: 700, fontSize: "14px" }}>
            {t("privacyPolicy.legalAndRegulatoryRequirements")}
          </p>{" "}
          {t("privacyPolicy.dataRetention5")}
        </li>
      </ul>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.onceTheRetentionPeriodExpires")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.ifYouHaveAnyQuestions")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.updatestoPrivacyPolicy")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.weMayUpdateThisPrivacyPolicy")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.weEncourageYouToReview")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.ifThereAreSignificantChanges")}
      </p>
      <p className="font-bold text-[18px]">
        {t("privacyPolicy.contactInformation")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
        {t("privacyPolicy.concernsRelatedToThisPrivacyPolicy")}
      </p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>support@payment4.com</p>
      <p className="dark:text-[#FFFFFFA1] text-[#121212A1]" style={{ fontSize: "14px" }}>
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
