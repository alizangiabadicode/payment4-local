"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeIcon, LightModeIcon } from "../../../icons/svg";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemPrefersDark) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

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
                    boxShadow: "0px 4px 4px 0px rgba(199, 211, 214, 0.5), 0px -2px 4px 0px rgba(199, 211, 214, 0.25)",
                }}
                className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-[4px] shadow-[]"
                onClick={() => setTheme("dark")}
            >
                <DarkModeIcon />
            </div>
        );
    }
}
