import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import { Button, Alert, Spinner } from 'react-bootstrap';

const MqttConnector = () => {
  const [client, setClient] = useState(null);
  const [status, setStatus] = useState('desconectado');

  const brokerUrl = "ws://broker.hivemq.com:8000/mqtt";
  const options = {
    keepalive: 30,
    reconnectPeriod: 1000,
    clientId: "react-client-" + Math.floor(Math.random() * 1000),
  };

  const mqttConnect = () => {
    setStatus('conectando');
    const newClient = mqtt.connect(brokerUrl, options);
    setClient(newClient);

    newClient.on('connect', () => {
      setStatus('conectado');
      console.log("Conectado ao Wokwi!");
      // Aqui você pode assinar tópicos ou enviar mensagens
      // ex: newClient.subscribe("wokwi/sala/luz");
    });

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
      console.log("Desconectado do Wokwi");
    }
  };

  useEffect(() => {
    return () => {
      if (client) client.end();
    };
  }, [client]);

  return (
    <div className='bg-warning rounded-5 p-5 h-100'>
      <h4>Conexão e Status do broker MQTT: {status}</h4>
      {status === 'conectando' && <Spinner animation="border" />}
      {status === 'erro' && <Alert variant="danger">Erro ao conectar ao broker MQTT</Alert>}

      <div className='d-flex justify-content-between gap-5 p-5'>
        <Button onClick={mqttConnect} disabled={status === 'conectado'}>
          Conectar
        </Button>
        <Button onClick={mqttDisconnect} disabled={status !== 'conectado'}>
          Desconectar
        </Button>
      </div>
    </div>
  );
};

export default MqttConnector;
