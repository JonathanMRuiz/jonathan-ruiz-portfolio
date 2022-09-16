import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import Logo from "../assets/logo.png";

const WhatsappComponent = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+5491166409685"
        accountName="Jonathan Ruiz"
        avatar={Logo}
        chatMessage="If you find it more comfortable to contact by whatsapp you can do it."
        darkMode={true}
        allowClickAway={true}
        allowEsc={true}
        height={300}
      />
    </div>
  );
};

export default WhatsappComponent;
