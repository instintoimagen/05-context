import React from "react";
import { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);

  let { foto, nombre, peliculas, id } = el;
  return (
    <tr>
      <td>{<img src={foto} alt={nombre} style={{ maxHeight: "100px" }} />}</td>
      <td>{nombre}</td>
      <td>{peliculas}</td>

      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
