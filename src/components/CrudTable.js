import React from "react";
import CrudTableRow from "./CrudTableRow";
import Message from "./Message";
import { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTable = () => {
  const { db } = useContext(CrudContext);

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <td></td>
            <th>Nombre</th>
            <th>Películas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el) => <CrudTableRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan="4">
                <Message
                  msg={` Tabla sin Datos.
                   Probable desconexión. 
                   Recargar o intentar más tarde `}
                  bgColor="#888"
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
