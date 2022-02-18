import React from 'react';
import NuevoContacto from '../contactos/NuevoContacto';
import ListadoContactos from '../contactos/ListadoContactos';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        Libreta de <span>Contactos</span>
      </h1>
      
      <NuevoContacto/>
      <div className="contactos">
        <h2>Tus Contactos</h2>
          <ListadoContactos/>
      </div>
    </aside>
  );
};

export default Sidebar;
