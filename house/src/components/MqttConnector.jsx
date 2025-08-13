import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { Button, Alert, Spinner } from 'react-bootstrap';

const MqttConnector = ({ brokerUrl, options }) => {
  const [client, setClient] = useState(null);
  const [status, setStatus] = useState('desconectado');


  const mqttConnect = () => {
    setStatus('conectando');
    const newClient = mqtt.connect(brokerUrl, options);
    setClient(newClient);

    newClient.on('connect', () => setStatus('conectado'));
    newClient.on('reconnect', () => setStatus('reconectando'));
    newClient.on('error', (err) => {
      console.error('Erro MQTT:', err);
      newClient.end();
      setStatus('erro');
    });
    newClient.on('close', () => setStatus('desconectado'));
  };

  const mqttDisconnect = () => {
    if (client) {
      client.end();
      setClient(null);
      setStatus('desconectado');
    }
  };

  useEffect(() => {
    return () => {
      if (client) {
        client.end();
      }
    };
  }, [client]);

  return (
    <div>
      <h4>Conexão e Status do broker MQTT.{status}</h4>
      {status === 'conectando' && <Spinner animation="border" />}
      {status === 'erro' && <Alert variant="danger">Erro ao conectar ao broker MQTT</Alert>}
      <Button onClick={mqttConnect} disabled={status === 'conectado'}>
        Conectar
      </Button>
      <Button onClick={mqttDisconnect} disabled={status !== 'conectado'}>
        Desconectar
      </Button>
    </div>
  );
};

export default MqttConnector;
