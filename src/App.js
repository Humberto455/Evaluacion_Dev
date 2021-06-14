import React, { useState } from "react";
import "./App.css";

function App() {
  const [reportes, setReportes] = useState([]);

  const agregarReporte = (values) => {
    setReportes([...reportes, values]);
  };

  return (
    <div className="App">
      <div className="Fondo">
        <h1>Reporte de Reportes</h1>
        <Formulario onSubmit={agregarReporte} />
      </div>
      <h2 id="subtitulo">Reportes Recientes {reportes.length}</h2>
      {reportes.map((item) => {
        return (
          <Card
            key={item.nombre}
            nombre={item.nombre}
            fecha={item.fecha}
            descripcion={item.descripcion}
            acciones={item.acciones}
          />
        );
      })}
    </div>
  );
}

function Formulario({ onSubmit }) {
  // este es mi state de componentes
  const [datos, setDatos] = useState({
    nombre: "",
    fecha: "",
    descripcion: "",
    acciones: "",
  });

  console.log(datos);
  // con handlechange hago que se copie los datos y se asignen
  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    onSubmit(datos);
  };

  return (
    <div>
      <form onSubmit={enviarDatos}>
        <label>Nombre:</label>
        <br />
        <input
          type="text"
          name="nombre"
          id="nombre"
          className="input"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Fecha:</label>
        <br />
        <input
          type="date"
          name="fecha"
          id="fecha"
          className="input"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Descripcion:</label>
        <br />
        <textarea
          type="text"
          name="descripcion"
          id="descripcion"
          className="input"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Acciones Tomadas:</label>
        <br />
        <textarea
          type="text"
          name="acciones"
          id="acciones"
          className="input"
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
}

function Card(props) {
  return (
    <div class="card" id="carta">
      <div class="card-header">
        {props.nombre} - {props.fecha}{" "}
      </div>
      <div class="card-body">
        <h3 className="titulo">Descripcion</h3>
        <h5 class="card-title" className="texto12">
          {props.descripcion}
        </h5>
        <h3 className="titulo">Acciones Tomadas</h3>
        <p class="card-text" className="texto12">
          {props.acciones}
        </p>
      </div>
    </div>
  );
}

export default App;
