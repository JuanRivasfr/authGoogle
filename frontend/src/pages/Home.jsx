import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #1E1E2F, #252542, #3E3E64)",
  padding: "20px",
};

const cardStyle = {
  width: "400px",
  padding: "30px",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.03)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  color: "white",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "12px 20px",
  backgroundColor: "#4285F4",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s ease, transform 0.2s ease",
};

const iconStyle = {
  marginRight: "10px",
  fontSize: "20px",
};

const Home = () => {

  const handleLogin = () => {
    window.location.href = "https://paranormal-cadaver-5ggjgr9575qvfvw5x-3000.app.github.dev/auth/google";
  };

  return (
    <div style={containerStyle}>
      <div
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h1 style={{ marginBottom: "10px", color: "#fff" }}>Bienvenido 🔥</h1>
        <p style={{ color: "#ddd", marginBottom: "35px" }}>
          Por favor, inicia sesión para acceder a tu panel.
        </p>
        <button
          onClick={handleLogin}
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#357ae8")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4285F4")
          }
        >
          <span style={iconStyle}>🔵</span>
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};

export default Home;
