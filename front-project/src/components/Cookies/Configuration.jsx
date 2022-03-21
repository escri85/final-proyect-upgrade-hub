import React, { useState } from "react";
import "./Configuration.scss";
const Configuration = () => {
const [Save, setSave] = useState(true)
const handlesave=()=>{
setSave(false)
}

  return (
      Save &&
    <div className="configuration">
      <h2>
        ¿Para qué finalidades se utiliza mi información y quiénes la utilizan?
      </h2>
      <p>
        Este Sitio Web utiliza cookies propias y de otras entidades, para poder
        acceder y usar su información para las finalidades que se indican a
        continuación. Si no está de acuerdo con alguna de estas finalidades,
        podrá personalizar sus opciones a través de esta pantalla.
      </p>
      <p>
        Nosotros y las empresas que colaboran con nosotros, tales como
        anunciantes, operadores publicitarios e intermediarios, usaremos su
        información obtenida a través de las cookies. Para conocer las empresas
        colaboradoras que incorporan sus cookies en nuestro sitio web puede
        acceder a través del botón Ver nuestros socios. Puede configurar sus
        preferencias de consentimiento por separado para cada uno de los socios
        mencionados.
      </p>
      <p>
        Usted permite el uso de las cookies para las siguientes finalidades:
      </p>
      <div className="opciones">
        <div className="opcion">
          <p>+Compartir datos y perfiles no vinculados a su identidad</p>
          <div className="botones">
            <button>Rechazar</button>
            <button>Aceptar</button>
          </div>
        </div>
        <div className="opcion">
          <p>+Compartir datos y perfiles no vinculados a su identidad</p>
          <div className="botones">
            <button>Rechazar</button>
            <button>Aceptar</button>
          </div>
        </div>
        <div className="opcion">
          <p>+Compartir datos y perfiles no vinculados a su identidad</p>
          <div className="botones">
            <button>Rechazar</button>
            <button>Aceptar</button>
          </div>
        </div>
        <div className="opcion">
          <p>+Compartir datos y perfiles no vinculados a su identidad</p>
          <div className="botones">
            <button>Rechazar</button>
            <button>Aceptar</button>
          </div>
        </div>
        <div className="opcion">
          <p>+Compartir datos y perfiles no vinculados a su identidad</p>
          <div className="botones">
            <button>Rechazar</button>
            <button>Aceptar</button>
          </div>
        </div>
        
      </div>
      <button onClick={handlesave}>Guardar</button>
    </div>
  );
};

export default Configuration;
