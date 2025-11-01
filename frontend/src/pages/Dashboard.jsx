import React, { useEffect, useState } from "react";
import api from "../services/api";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  overflow: "hidden",
  background: "linear-gradient(135deg, #1E1E2F, #252542, #3E3E64)",
  fontFamily: "Arial, sans-serif",
};

const profileCardStyle = {
  width: "400px",
  padding: "30px",
  borderRadius: "15px",
  background: "rgba(255, 255, 255, 0.05)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  color: "white",
  backdropFilter: "blur(10px)",
};

const imageStyle = {
  borderRadius: "50%",
  width: "110px",
  height: "110px",
  marginBottom: "20px",
  border: "3px solid #4285F4",
};

const textStyle = {
  color: "#ccc",
  fontSize: "16px",
  marginBottom: "20px",
};

// Componente principal
const Dashboard = () => {
  const [user, setUser] = useState(null); // Estado: datos del usuario.

  useEffect(() => {
    // Montaje: Obtiene datos del usuario desde el backend.
    api.get("/auth")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []); // [] → Solo se ejecuta al montar el componente.

  // Si el usuario no está autenticado o aún carga
  if (!user) {
    return (
      <div style={containerStyle}>
        <div style={profileCardStyle}>
          <h2 style={{ color: "#ddd" }}>Cargando datos de sesión...</h2>
        </div>
      </div>
    );
  }

  // Si hay sesión activa, renderiza la tarjeta del usuario
  return (
    <div style={containerStyle}>
      <div style={profileCardStyle}>
        <h1 style={{ marginBottom: "8px" }}>Hola, {user.displayName} 👋</h1>
        <p style={infoTextStyle}>Autenticación exitosa con Google!</p>
        <img
          src={user.photos[0]?.value}
          alt="Foto de perfil"
          style={imageStyle}
        />
        <h3 style={{ margin: "10px 5px", color: "#fff" }}>
          {user.emails[0].value}
        </h3>
        <p style={{ color: "#bbb", fontSize: "13px" }}>
          ID de sesión: {user.id}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
