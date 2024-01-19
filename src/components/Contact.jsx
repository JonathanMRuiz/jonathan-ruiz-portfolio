import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["language"]);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validateEmail = async (email) => {
    if (!validator.isEmail(email)) {
      setEmailError("Enter valid Email!");
      return false;
    }

    try {
      const apiKey = "Z2IySjNZxBFeMDtXSxF7wmxZ8jw927mj"; // Reemplaza con tu clave de API
      const url = `https://api.apilayer.com/email_verification/check?email=${email}`;

      const response = await fetch(url, {
        headers: {
          apikey: apiKey,
          "Content-Type": "application/json", // Ajusta según las necesidades de la API
        },
      });

      const data = await response.json();

      console.log(data);

      if (!data.format_valid || !data.mx_found) {
        setEmailError("Enter valid Email!");
        return false;
      } else {
        setEmailError("Valid Email :)");
        return true;
      }
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  const onSubmit = async (data) => {
    const isValidEmail = await validateEmail(data.from_name);

    console.log(isValidEmail);

    if (isValidEmail) {
      setLoading(true);

      emailjs
        .sendForm(
          "service_784xz48",
          "template_rrh2ltl",
          form.current,
          "IafviD74InSwfbc5a"
        )
        .then(
          (result) => {
            console.log(result.text);
            setTimeout(() => {
              setLoading(false);
              reset(); // Reinicia el formulario después del envío exitoso
            }, 2000);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center"
    >
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items center max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            {t("contact_title")}
          </p>
          <p className="text-gray-300 py-4">{t("contact_description")}</p>

          <p className="text-gray-300 py-4">
            {t("contact_email")} jonathanmruiz@yahoo.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          {...register("to_name", { required: "This field is required" })}
          autoComplete="off"
        />

        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          {...register("from_name", {
            required: "This field is required",
          })}
          onChange={(e) => validateEmail(e.target.value)}
          autoComplete="off"
        />
        <span>{errors.from_name && <p>{errors.from_name.message}</p>}</span>

        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          {...register("message", { required: "This field is required" })}
        ></textarea>
        {loading && (
          <div className="flex text-green-500 justify-center items-center">
            <p>Success</p>
            <span>
              <AiOutlineCheck />
            </span>
          </div>
        )}
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Enviar
        </button>

        <div className="flex justify-center"></div>
      </form>
    </div>
  );
};

export default Contact;
