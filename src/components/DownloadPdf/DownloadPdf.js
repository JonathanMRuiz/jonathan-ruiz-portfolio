import axios from "axios";
import fileDownload from "js-file-download";
import cv from "./FrontendJonathanRuiz.pdf";

const BtnDownload = ({ text }) => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleDownload(cv, "FrontendJonathanRuiz.pdf");
        }}
        className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
      >
        {text}
      </button>
    </div>
  );
};

export default BtnDownload;
