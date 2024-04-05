import React from "react";

import FaFlag from "../../../images/flag-ir.png";
import EnFlag from "../../../images/flag-usa.png";
import FrFlag from "../../../images/flag-fr.png";
import ArFlag from "../../../images/flag-uae.png";
import TrFlag from "../../../images/flag-tr.png";
import EsFlag from "../../../images/flag-sp.png";

export const supportedLanguages = [
  { value: "en", label: "En", icon: <img src={EnFlag} alt="en" /> },
  { value: "fa", label: "Fa", icon: <img src={FaFlag} alt="fa" /> },
  { value: "fr", label: "Fr", icon: <img src={FrFlag} alt="fr" /> },
  { value: "ar", label: "Ar", icon: <img src={ArFlag} alt="ar" /> },
  { value: "tr", label: "Tr", icon: <img src={TrFlag} alt="tr" /> },
  { value: "es", label: "Es", icon: <img src={EsFlag} alt="es" /> },
];
