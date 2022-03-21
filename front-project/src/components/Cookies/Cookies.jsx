import React, { useState } from "react";
import './Cookies.scss'
import Configuration from "./Configuration";
const Cookies = () => {

const [message,setMessage]=useState(true)
const [configuration,setConfiguration]=useState(false)

const quitMessage=()=>{
setMessage(false)
}
const handleConfiguration =()=>{
    setMessage(false)
    setConfiguration(true)

}

  return (
      <>
     <div className="message">

  { message &&
    <div className="contenedor__cookies" >
      <div className="texto">
          <h1>Politica de cookies</h1>
        <p>
          Con su acuerdo, nosotros y nuestros socios usamos cookies o
          tecnologías similares para almacenar, acceder y procesar datos
          personales como su visita en este sitio web. Puede retirar su
          consentimiento u oponerse al procesamiento de datos basado en
          intereses legítimos en cualquier momento haciendo clic en
          "Configuración" o en nuestra Política de Cookies en este sitio web.
        </p>
        <p>
          <strong>
            Nosotros y nuestros socios hacemos el siguiente tratamiento de
            datos:
          </strong>
        </p>
        <p>
          Almacenar o acceder a información en un dispositivo, Anuncios y
          contenido personalizados, medición de anuncios y del contenido,
          información sobre el público y desarrollo de productos, Compartir
          datos y perfiles no vinculados a su identidad, Datos de localización
          geográfica precisa e identificación mediante las características de
          dispositivos
        </p>
      </div>
      <div className="botones">
          <button onClick={handleConfiguration}>Configuracion</button>
          <button onClick={quitMessage}>Aceptar</button>
      </div>
    </div>
      }
      </div>
      <div >
{configuration && (
 <Configuration/>
) 

}
      </div>
      </>

  
  );
};

export default Cookies;
