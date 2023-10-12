import React from 'react';
import CreationsDetail from '../components/Creaciones';
import axios from 'axios';

function Creaciones() {
  const [creations, setCreations] = React.useState([]);

  React.useEffect(() => {
    axios.get('/data/creaciones.json').then((response) => {
      setCreations(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Mis Creaciones</h2>
      {creations.map((creation) => (
        <CreationsDetail key={creation.id} creation={creation} />
      ))}
    </div>
  );
}

export default Creaciones;
