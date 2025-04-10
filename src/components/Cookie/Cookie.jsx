import React, { useEffect, useState } from "react";
import "../../styles/fonts/style.css"

// Definir as variáveis de texto para o aviso de cookies
const purecookieTitle = "Cookies.";
const purecookieDesc = "Ao utilizar este site, você aceita automaticamente que utilizemos cookies.";
const purecookieLink = (
  <a href="https://www.cssscript.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
    Politica de Privacidade
  </a>
);
const purecookieButton = "Aceito";

// Função para definir um cookie
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

// Função para obter o valor de um cookie
const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

// Função para apagar um cookie
const eraseCookie = (name) => {
  document.cookie = name + "=; Max-Age=-99999999;";
};

const CookieConsent = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    if (!getCookie("purecookieDismiss")) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("purecookieDismiss", "1", 30); // Define o cookie para expirar em 7 dias
    setShowCookieConsent(false); // Fecha o aviso
  };

  if (!showCookieConsent) return null;

  return (
    <div className="cookieConsentContainer">
      <div className="cookieTitle">{purecookieTitle}</div>
      <div className="cookieDesc">
        <p>
          {purecookieDesc} {purecookieLink}
        </p>
      </div>
      <div className="cookieButton">
        <button onClick={handleAccept}>{purecookieButton}</button>
      </div>
    </div>
  );
};

export default CookieConsent;
