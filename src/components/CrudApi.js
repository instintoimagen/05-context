import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const { loading, error, db } = useContext(CrudContext);

  return (
    <div className="descripcion">
      <h3>Crud API - 🖥️ - Con Context API </h3>
      <article className="grid-1-2 caja-gris">
        <CrudForm />
        {/* Conditional Render: Si la var loading es true, que cargue el componente Loader */}
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApi;
