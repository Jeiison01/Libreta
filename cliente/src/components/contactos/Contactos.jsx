import { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormDatos from "../datos/FormDatos";
import ListadoDatos from "../datos/ListadoDatos";


const Contactos = () => {

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Barra/>
        <main>
          <FormDatos/>
            <div className="contenedor-datos">
              <ListadoDatos/>
            </div>
        </main>
      </div>
    </div>
  );
};

export default Contactos;
