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
    message: "payment not found",
    errorCode: 1006,
    description:
      "This error is raised when the specified payment could not be found in the system. Ensure that you are providing the correct payment information.",
  },
  {
    statusCode: 400,
    status: false,
    message: "invalid amount",
    errorCode: 1010,
    description:
      "This error is raised when the payment amount provided in the request is invalid or not within the accepted range. Ensure that the amount is within the specified limits.",
  },
  {
    statusCode: 400,
    status: false,
    message: "invalid currency",
    errorCode: 1012,
    description:
      "This error indicates that the provided currency is invalid or not supported.",
  },
];
