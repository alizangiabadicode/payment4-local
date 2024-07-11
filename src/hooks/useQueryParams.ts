import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useQueryParams = (): Record<string, string> => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateQueryParams = () => {
      const params: Record<string, string> = {};
      searchParams.forEach((value, key) => {
        params[key] = value;
      });
      setQueryParams(params);
    };
    updateQueryParams();
    const handleRouteChange = () => {
      updateQueryParams();
    };
    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname, searchParams]);

  return queryParams;
};

export default useQueryParams;
