import { useTranslation } from "react-i18next";

export type errorDetail = {
  statusCode: number;
  status: boolean;
  message: string;
  errorCode: number;
  description: string;
};

export const VerifyPaymentErrors = (): errorDetail[] => {
  const { t } = useTranslation();
  return [
    {
      statusCode: 400,
      status: false,
      message: "validation error message",
      errorCode: 1001,
      description: t("table.descriptionColumn.1001"),
    },
    {
      statusCode: 400,
      status: false,
      message: "api key not send",
      errorCode: 1002,
      description: t("table.descriptionColumn.1002"),
    },
    {
      statusCode: 400,
      status: false,
      message: "api key not found",
      errorCode: 1003,
      description: t("table.descriptionColumn.1003"),
    },
    {
      statusCode: 400,
      status: false,
      message: "gateway not approved",
      errorCode: 1004,
      description: t("table.descriptionColumn.1004"),
    },
    {
      statusCode: 400,
      status: false,
      message: "payment not found",
      errorCode: 1006,
      description:
      t("table.verifyPayment.descriptionColumn.1006")
    },
    {
      statusCode: 400,
      status: false,
      message: "invalid amount",
      errorCode: 1010,
      description: t("table.verifyPayment.descriptionColumn.1010"),
    },
    {
      statusCode: 400,
      status: false,
      message: "invalid currency",
      errorCode: 1012,
      description: t("table.descriptionColumn.1012"),
    },
  ];
};
