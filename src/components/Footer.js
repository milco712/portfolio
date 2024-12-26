import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);
  const myEmail = "helena712@me.com";
  const copyEmail = () => {
    navigator.clipboard
      .writeText(myEmail)
      .then(() => {
        setShowToast(true); // 토스트 메시지 표시
        setTimeout(() => setShowToast(false), 3000); // 3초 후 토스트 메시지 숨기기
      })
      .catch((err) => {
        console.error("복사에 실패했습니다:", err);
      });
  };
  return (
    <div className="bg-gray-600">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold text-slate-400 text-center">
          Contact
        </h2>
        <div className="text-center text-gray-100 text-xl">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <Link to="#" onClick={copyEmail}>
            {myEmail}
          </Link>
        </div>
      </div>
      {/* 토스트 메시지 */}
      {showToast && (
        <div className="fixed bottom-48 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-2 px-4 rounded shadow-lg animate-fade">
          이메일이 복사되었습니다!
        </div>
      )}
    </div>
  );
};

export default Footer;
