import { useTranslation } from "react-i18next";
export type errorDetail = {
  statusCode: number;
  status: boolean;
  message: string;
  errorCode: number;
  description: string;
};

export const CreatePaymentErrors = (): errorDetail[] => {
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
      message: "assets not found",
      errorCode: 1005,
      description: t("table.createPayment.descriptionColumn.1005"),
    },
    {
      statusCode: 400,
      status: false,
      message: "payment amount lower than minimum",
      errorCode: 1011,
      description: t("table.createPayment.descriptionColumn.1011"),
    },
    {
      statusCode: 400,
      status: false,
      message: "invalid currency",
      errorCode: 1012,
      description: t("table.descriptionColumn.1012"),
    },
    {
      statusCode: 400,
      status: false,
      message: "invalid language",
      errorCode: 1013,
      description: t("table.createPayment.descriptionColumn.1013"),
    },
  ];
};
