"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeIcon, LightModeIcon } from "../../../icons/svg";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // if (!mounted)
  //   return (
  //     <Image
  //       src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
  //       width={30}
  //       height={30}
  //       sizes="30x30"
  //       alt="Loading Light/Dark Toggle"
  //       priority={false}
  //       title="Loading Light/Dark Toggle"
  //     />
  //   );

  if (theme === "dark") {
    return (
      <div
        className="bg-[#272727] w-[40px] h-[40px] flex justify-center items-center rounded-[4px]"
        onClick={() => setTheme("light")}
      >
        <LightModeIcon />
      </div>
    );
  }

  if (theme === "light") {
    return (
      <div
        style={{
          boxShadow:
            "0px 4px 4px 0px rgba(199, 211, 214, 0.5), 0px -2px 4px 0px rgba(199, 211, 214, 0.25)",
        }}
        className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-[4px] shadow-[]"
        onClick={() => setTheme("dark")}
      >
        <DarkModeIcon />
      </div>
    );
  }
}
