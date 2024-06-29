import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useQueryParams = (): string => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [queryString, setQueryString] = useState<string>("");

  useEffect(() => {
    const updateQueryString = () => {
      const params: string[] = [];
      searchParams.forEach((value, key) => {
        params.push(`${key}=${value}`);
      });
      setQueryString(params.join("&"));
    };
    updateQueryString();
    const handleRouteChange = () => {
      updateQueryString();
    };
    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname, searchParams]);

  return queryString;
};

export default useQueryParams;
