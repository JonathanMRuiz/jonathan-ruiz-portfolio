import React from "react";
import { useTranslation } from "react-i18next";
import { MdEmail, MdLocationOn } from "react-icons/md"; // Import icons from React Icons

const Contact = () => {
  const { t } = useTranslation(["language"]);

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="bg-[#112240] p-8 rounded-lg shadow-lg max-w-[600px] w-full text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            {t("contact_title")}
          </p>
          <p className="text-gray-300 py-4">{t("contact_description")}</p>
        </div>

        {/* Email with Icon */}
        <div className="mb-6 flex flex-col items-center justify-center">
          <MdEmail className="text-gray-300 text-2xl mb-2" /> {/* Email Icon */}
          <p className="text-gray-300 text-lg">
            jonathanmruiz@yahoo.com
          </p>
        </div>

        {/* Location with Icon */}
        <div className="mb-6 flex flex-col items-center justify-center">
          <MdLocationOn className="text-gray-300 text-2xl mb-2" /> {/* Location Icon */}
          <p className="text-gray-300 text-lg">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;