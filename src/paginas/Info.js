import React from 'react';

function Info() {
  return (
    <div>
      <h2>Información</h2>
      <p>¡Hola! Somos Santino Arana y Thiago Baranczuk. Somos estudiantes de ort y nos especializamos en Informatica.</p>

      <h3>Contacto</h3>
      <p>Estamos disponibles para cualquier consulta. Puedes encontrarnos en las siguientes redes sociales:</p>
      <ul>
        <li>
          <a href="https://ar.linkedin.com/in/thiago-baranczuk-4907a1284" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        {/* Agrega más enlaces a redes sociales si es necesario */}
      </ul>
    </div>
  );
}

export default Info;
