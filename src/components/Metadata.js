import React from "react";
import { Helmet } from "react-helmet";

const Metadata = () => {
  return (
    <Helmet>
      <title>Desarrollador Web - Jonathan Ruiz</title>
      <meta name="title" content="Desarrollador Web - Jonathan Ruiz" />
      <meta
        name="description"
        content="Todo lo que necesitas para el desarrollo de tu aplicación web.  
Desarrollador Web listo para ayudar a crear aplicaciones funcionales, componentes reutilizables. 
"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jonathan-ruiz.vercel.app/" />
      <meta property="og:title" content="Desarrollador Web - Jonathan Ruiz" />
      <meta
        property="og:description"
        content="Todo lo que necesitas para el desarrollo de tu aplicación web.  
        Desarrollador web listo para ayudar a crear aplicaciones funcionales, componentes reutilizables.
"
      />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://jonathan-ruiz.vercel.app/"
      />
      <meta
        property="twitter:title"
        content="Desarrollador Web - Jonathan Ruiz"
      />
      <meta
        property="twitter:description"
        content="Todo lo que necesitas para el desarrollo de tu aplicación web.  
Desarrollador web listo para ayudar a crear aplicaciones funcionales, componentes reutilizables. 
"
      />
      <meta property="twitter:image" content="" />
    </Helmet>
  );
};

export default Metadata;
