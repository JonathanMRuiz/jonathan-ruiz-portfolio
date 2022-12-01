import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { AiOutlineCheck } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation(["language"]);
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_784xz48",
        "template_rrh2ltl",
        form.current,
        "IafviD74InSwfbc5a"
      )
      .then(
        (result) => {
          setLoading(true);
          console.log(result.text);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
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
          name="to_name"
          required
          autoComplete="off"
        />

        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="from_name"
          value={message}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
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
