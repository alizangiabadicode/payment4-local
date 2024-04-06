import React, { useState } from "react";
import Input from "../shared/textField";
import TextArea from "../shared/textArea";
import { Button } from "../shared/button";
import useDarkMode from "use-dark-mode";
import { t } from "i18next";

interface FormData {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const { value: isDark } = useDarkMode();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div
      className={`${
        isDark
          ? "bg-contacts-form-mobile-dark"
          : "bg-contacts-form-mobile-light"
      } ${
        isDark ? "md:bg-contacts-form-dark" : "md:bg-contacts-form-light"
      } bg-no-repeat h-[415px] md:h-[480px] w-[346px] md:w-[497px] px-[30px] ${
        isDark ? "py-[10px]" : "py-[30px] "
      } md:px-[48px] md:py-[40px]`}
    >
      <form onSubmit={handleSubmit}>
        <p
          className={`${
            isDark ? "text-white" : null
          } text-[18px] md:text-[24px] font-semibold`}
        >
          {t("getInTouch")}
        </p>
        <div className="flex flex-col gap-y-5 mt-[40px]">
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`bg-transparent ${
              isDark ? "border-[#FFFFFF24]" : "border-[#12121224]"
            }`}
            type="text"
            placeholder={t("name")}
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`bg-transparent ${
              isDark ? "border-[#FFFFFF24]" : "border-[#12121224]"
            }`}
            type="text"
            placeholder={t("email")}
          />
          <TextArea
            name="message"
            placeholder={t("enterYourMessage")}
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className={`bg-transparent ${
              isDark ? "border-[#FFFFFF24]" : "border-[#12121224]"
            }`}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="px-[24px] py-[5px]">
            {t("send")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
