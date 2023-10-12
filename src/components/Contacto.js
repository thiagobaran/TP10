import React from 'react';

function Contacto() {
  return (
    <div>
      <h2>Contacto</h2>
      <p>¡Estamos disponibles para contactar! Puede encontrarnos en las siguientes redes sociales:</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>

      <h3>Formulario de Contacto</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
