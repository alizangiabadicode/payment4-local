import React from "react";
import { useTranslation } from "react-i18next";

const BusinessPartner: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-[22px] font-bold mb-6">{t("vendorPage.businessPartner.title")}</h1>
                <p className="text-gray-700 font-normal text-[#121212CC] dark:text-[#ffffffcc] mb-3">
                    {t("vendorPage.businessPartner.intro")}
                </p>
                <div className="mb-8">
                    <h2 className="text-[16px] font-medium text-gray-800 mb-4">
                        {t("vendorPage.businessPartner.accessVendorPanel.title")}
                    </h2>
                    <p className="text-gray-700 font-normal text-[#121212CC] dark:text-[#ffffffcc]">
                        {t("vendorPage.businessPartner.accessVendorPanel.description")}
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-[16px] font-medium text-gray-800 mb-4">
                        {t("vendorPage.businessPartner.creatingPaymentGateway.title")}
                    </h2>
                    <p className="text-gray-700 font-normal text-[#121212CC] dark:text-[#ffffffcc]">
                        {t("vendorPage.businessPartner.creatingPaymentGateway.description")}
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-[16px] font-medium text-gray-800 mb-4">
                        {t("vendorPage.businessPartner.collaboratingOtherBrands.title")}
                    </h2>
                    <p className="text-gray-700 font-normal text-[#121212CC] dark:text-[#ffffffcc]">
                        {t("vendorPage.businessPartner.collaboratingOtherBrands.description")}
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-[16px] font-medium text-gray-800 mb-4">
                        {t("vendorPage.businessPartner.commissionTransactions.title")}
                    </h2>
                    <p className="text-gray-700 font-normal text-[#121212CC] dark:text-[#ffffffcc]">
                        {t("vendorPage.businessPartner.commissionTransactions.description")}
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-[16px] font-medium text-gray-800 mb-4">
                        {t("vendorPage.businessPartner.benefitsCollaboration.title")}
                    </h2>
                    <p className="text-gray-700 font-normal text-[#121212CC] dark:text-[#ffffffcc]">
                        {t("vendorPage.businessPartner.benefitsCollaboration.description")}
                    </p>
                </div>
                {/* <div className="text-red-600 font-medium">
          <p className="text-[#121212CC] dark:text-[#ffffffcc]">
            {t("vendorPage.businessPartner.warning.note")} 
          </p>
        </div> */}
            </div>
        </section>
    );
};

export default BusinessPartner;
