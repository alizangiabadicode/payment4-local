import React, { useState } from "react";
import Input from "../shared/textField";
import { Button } from "../shared/button";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}
interface CooperationFormProps {
  setOpenSnackBar: React.Dispatch<React.SetStateAction<boolean>>;
}
const CooperationForm = ({ setOpenSnackBar }: CooperationFormProps) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("nameIsRequired"),
    email: Yup.string()
      .email("invalidEmailAddress")
      .required("emailIsRequired"),
    phoneNumber: Yup.string().required("phoneNumberIsRequired"),
  });
  const sendContactInfo = async (values: FormData) => {
    try {
      const { name, email, phoneNumber } = values;

      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/contact-support`;

      const data = {
        name,
        email,
        content: `vendor phone number: ${phoneNumber}`,
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
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values: FormData) => {
      sendContactInfo(values);
    },
  });

  return (
    <div
      className={`dark:bg-dark-gradient-card bg-light-gradient-card
      px-[23px] lg:px-[48px] py-[40px] rounded-[8px] w-full md:w-[497px] md:h-max-[497px]`}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-y-2">
          <p
            className={`dark:text-white text-center text-[18px] lg:text-[20px] font-semibold`}
          >
            {t("vendorPage.cooperationForm.title")}
          </p>
          <p className="text-center text-[12px] md:text-[14px] dark:text-[#FFFFFFC7] text-[#121212C7]">
            {t("vendorPage.cooperationForm.description")}
          </p>
        </div>
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
            <Input
              name="phoneNumber"
              placeholder={t("vendorPage.cooperationForm.phoneNumber")}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              className={`bg-transparent dark:border-[#FFFFFF24] focus:border-black focus:dark:border-[#AEAEAF]
                border-[#12121224] py-[15px]`}
            />
            {formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              ? t(
                  `vendorPage.cooperationForm.validation.${formik.errors.phoneNumber}`
                )
              : null}
          </div>
        </div>
        <div className="flex justify-end mt-2">
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

export default CooperationForm;
