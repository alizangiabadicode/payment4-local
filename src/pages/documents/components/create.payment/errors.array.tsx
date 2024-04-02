export const errors = [
  {
    statusCode: 400,
    status: false,
    message: "validation error message",
    errorCode: 1001,
    description:
      "This error occurs when there are validation issues with the request.",
  },
  {
    statusCode: 400,
    status: false,
    message: "api key not send",
    errorCode: 1002,
    description:
      "This error indicates that the API key was not included in the request.",
  },
  {
    statusCode: 400,
    status: false,
    message: "api key not found",
    errorCode: 1003,
    description:
      "This error occurs when the provided API key is not found or recognized by the system.",
  },
  {
    statusCode: 400,
    status: false,
    message: "gateway not approved",
    errorCode: 1004,
    description:
      "This error signifies that the selected gateway is not approved or authorized for the transaction.",
  },
  {
    statusCode: 400,
    status: false,
    message: "assets not found",
    errorCode: 1005,
    description:
      "This error is triggered when the requested assets are not found.",
  },
  {
    statusCode: 400,
    status: false,
    message: "payment amount lower than minimum",
    errorCode: 1011,
    description:
      "This error occurs when the payment amount is below the specified minimum limit.",
  },
  {
    statusCode: 400,
    status: false,
    message: "invalid currency",
    errorCode: 1012,
    description:
      "This error indicates that the provided currency is invalid or not supported.",
  },
  {
    statusCode: 400,
    status: false,
    message: "invalid language",
    errorCode: 1013,
    description:
      "This error occurs when the specified language is invalid or not supported.",
  },
];
