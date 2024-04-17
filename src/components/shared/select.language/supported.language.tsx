import React from "react";
import Image from "next/image";

export const supportedLanguages = [
  {
    value: "en",
    label: "En",
    icon: <Image width={30} height={30} src="/images/flag-usa.png" alt="en" />,
  },
  {
    value: "fa",
    label: "Fa",
    icon: <Image width={30} height={30} src="/images/flag-ir.png" alt="fa" />,
  },
  {
    value: "fr",
    label: "Fr",
    icon: <Image width={30} height={30} src="/images/flag-fr.png" alt="fr" />,
  },
  {
    value: "ar",
    label: "Ar",
    icon: <Image width={30} height={30} src="/images/flag-uae.png" alt="ar" />,
  },
  {
    value: "tr",
    label: "Tr",
    icon: <Image width={30} height={30} src="/images/flag-tr.png" alt="tr" />,
  },
  {
    value: "es",
    label: "Es",
    icon: <Image width={30} height={30} src="/images/flag-sp.png" alt="es" />,
  },
];
