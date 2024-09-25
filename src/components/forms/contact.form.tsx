"use client";
import React, { useState } from "react";
import Input from "../shared/textField";
import TextArea from "../shared/textArea";
import { Button } from "../shared/button";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface ContactFormProps {
  setOpenSnackBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const ContactForm = ({ setOpenSnackBar }: ContactFormProps) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const validationSchema = Yup.object({
    name: Yup.string().required("nameIsRequired"),
    email: Yup.string()
      .email("invalidEmailAddress")
      .required("emailIsRequired"),
    message: Yup.string().required("messageIsRequired"),
  });
  const sendContactInfo = async (values: FormData) => {
    try {
      const { name, email, message } = values;

      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/contact-support`;

      const data = {
        name,
        email,
        content: message,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      setLoading(true);
      const response = await fetch(url, options);
      setLoading(false);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      await response.json();

      formik.resetForm();
      setOpenSnackBar(true);
    } catch (error) {
      setLoading(false);

      console.log("error:", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values: FormData) => {
      sendContactInfo(values);
    },
  });

  return (
    <div
      className={`dark:bg-dark-gradient-card bg-light-gradient-card
      px-[48px] py-[40px] rounded-[8px] w-full md:w-[497px] md:h-max-[497px]`}
    >
      <form onSubmit={formik.handleSubmit}>
        <p
          className={`dark:text-white text-[18px] md:text-[24px] font-semibold`}
        >
          {t("getInTouch")}
        </p>
        <div className="flex flex-col gap-y-5 mt-[40px]">
          <div className="flex flex-col">
            <Input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className={`bg-transparent focus:border-black focus:dark:border-[#AEAEAF]
               dark:border-[#FFFFFF24] border-[#12121224] py-[15px]`}
              type="text"
              placeholder={t("name")}
            />
            {formik.touched.name && Boolean(formik.errors.name)
              ? t(`${formik.errors.name}`)
              : null}
          </div>
          <div className="flex flex-col">
            <Input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`bg-transparent dark:border-[#FFFFFF24] focus:border-black focus:dark:border-[#AEAEAF]
              border-[#12121224] py-[15px]`}
              type="text"
              placeholder={t("email")}
            />
            {formik.touched.email && Boolean(formik.errors.email)
              ? t(`${formik.errors.email}`)
              : null}
          </div>
          <div className="flex flex-col">
            <TextArea
              name="message"
              placeholder={t("enterYourMessage")}
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              className={`bg-transparent dark:border-[#FFFFFF24] focus:border-black focus:dark:border-[#AEAEAF]
               border-[#12121224]`}
            />
            {formik.touched.message && Boolean(formik.errors.message)
              ? t(`${formik.errors.message}`)
              : null}
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            isLoading={loading}
            type="submit"
            className="px-[24px] py-[5px]"
          >
            {t("send")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
