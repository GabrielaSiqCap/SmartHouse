import React, { useState, useEffect } from "react";
import mqtt from "mqtt"; // Importa o cliente MQTT diretamente

const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt"); // Conecta ao broker MQTT

const Caixacomodo = (props) => {
  const [status1, setStatus1] = useState(props.status);
  const [status2, setStatus2] = useState(props.status2);
  const [status3, setStatus3] = useState(props.status3);

  // Inscreve nos tópicos ao montar
  useEffect(() => {
    if (props.topicStatus1) client.subscribe(props.topicStatus1);
    if (props.topicStatus2) client.subscribe(props.topicStatus2);
    if (props.topicStatus3) client.subscribe(props.topicStatus3);

    client.on("message", (topic, message) => {
      if (topic === props.topicStatus1) setStatus1(message.toString());
      if (topic === props.topicStatus2) setStatus2(message.toString());
      if (topic === props.topicStatus3) setStatus3(message.toString());
    });

    return () => {
      client.end(); // Desconecta o cliente MQTT ao desmontar o componente
    };
  }, [props.topicStatus1, props.topicStatus2, props.topicStatus3]);

  // Funções para enviar comandos MQTT
  const handleCommand1 = (command) => {
    if (props.topicCommand1) client.publish(props.topicCommand1, command);
  };

  const handleCommand2 = (command) => {
    if (props.topicCommand2) client.publish(props.topicCommand2, command);
  };

  const handleCommand3 = (command) => {
    if (props.topicCommand3) client.publish(props.topicCommand3, command);
  };

  return (
    <div className="bg-warning rounded-5 p-4 justify-content-center text-center">
      <h4>{props.comodo}</h4>

      {/* Controle do dispositivo 1 */}
      <p>
        {props.nome}: {status1}
      </p>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleCommand1("ligar")}
      >
        {props.botao1}
      </button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => handleCommand1("desligar")}
      >
        {props.botao2}
      </button>

      {/* Controle do dispositivo 2 */}
      <p>
        {props.nome2}: {status2}
      </p>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleCommand2("ligar")}
      >
        {props.botao3}
      </button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => handleCommand2("desligar")}
      >
        {props.botao4}
      </button>

      {/* Controle do dispositivo 3 */}
      <p>
        {props.nome3}: {status3}
      </p>
      <button
        className="btn btn-primary m-2"
        onClick={() => handleCommand3("ligar")}
      >
        {props.botao5}
      </button>
      <button
        className="btn btn-secondary m-2"
        onClick={() => handleCommand3("desligar")}
      >
        {props.botao6}
      </button>
    </div>
  );
};

export default Caixacomodo;
