import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      telefono: "",
    });
  };

  const handleDelete = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            pattern="[A-Za-z]+"
            required
          />
        </div>
        <div>
          <label>Apellido Paterno:</label>
          <input
            type="text"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleChange}
            pattern="[A-Za-z]+"
            required
          />
        </div>
        <div>
          <label>Apellido Materno:</label>
          <input
            type="text"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleChange}
            pattern="[A-Za-z]+"
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            pattern="[0-9]+"
            required
          />
        </div>
        <button type="submit">Guardar</button>
        <button type="button" onClick={() => setFormData({
          nombre: "",
          apellidoPaterno: "",
          apellidoMaterno: "",
          telefono: "",
        })}>
          Cancelar
        </button>
      </form>
      <Table users={users} onDelete={handleDelete} />
    </div>
  );
}

function Table({ users, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Teléfono</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.nombre}</td>
            <td>{user.apellidoPaterno}</td>
            <td>{user.apellidoMaterno}</td>
            <td>{user.telefono}</td>
            <td>
              <button onClick={() => onDelete(index)}>Borrar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
