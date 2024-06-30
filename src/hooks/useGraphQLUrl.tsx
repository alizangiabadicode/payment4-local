import { useTranslation } from "react-i18next";

const useGraphQLUrl = (): string => {
  const { i18n } = useTranslation();
  const baseUrl = process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL || "";
  const graphqlUrl =
    i18n.language === "fa"
      ? baseUrl.replace("://", `://${i18n.language}.`)
      : baseUrl;
  // const graphqlUrl = baseUrl;

  return graphqlUrl;
};

export default useGraphQLUrl;
