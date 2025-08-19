import React, { useState } from "react";
import Caixacomodo from "../components/Caixacomodo.jsx";
import Painel from "../components/Painel.jsx";
import BotaoTroca from "../components/landd/BotaoTroca.jsx";
import MqttConnector from "../components/MqttConnector.jsx";

const PaginaPrincipal = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  const brokerUrl = "ws://broker.hivemq.com:8000/mqtt"; // URL do broker MQTT
  const options = {
    clientId: `mqtt_${Math.random().toString(16).slice(2)}`,
    keepalive: 60,
    clean: true,
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <div className="p-5 mt-5">
        <div className="text-center">
          <h1>
            <i className="bi bi-house-heart"></i> Smart House
          </h1>
          <h5 className="py-2">
            "Eu e minha casa serviremos ao Senhor" <br /> Josué 24:15
          </h5>
          <BotaoTroca troca={troca} isLight={isLight} />
        </div>

        <div className="row justify-content-center">
          <div className="col-4 p-5">
            <MqttConnector brokerUrl={brokerUrl} options={options} />
          </div>
          <div className="col-4 p-5">
            <Painel />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-4">
            <Caixacomodo
              comodo="Garagem"

              nome="Porta Social"
              status="Fechada"
              botao1="Abrir"
              botao2="Fechar"
              topicCommand1="casa/garagem/portao_social"
              topicStatus1="casa/garagem/portao_social"

              nome2="Porta Basculante"
              status2="Fechada"
              botao3="Abrir"
              botao4="Fechar"
              topicCommand2="casa/garagem/portao_basculante"
              topicStatus2="casa/garagem/portao_basculante"

              nome3="Luz da Garagem"
              status3="Desligada"
              botao5="Ligar"
              botao6="Desligar"
              topicCommand3="casa/garagem/luz"
              topicStatus3="casa/garagem/luz"
            />
          </div>
          <div className="col-4">
            <Caixacomodo
              comodo="Sala de Estar"

              nome="Luz da Sala"
              status="Acesa"
              botao1="Ligar"
              botao2="Desligar"
              topicCommand1="casa/sala/luz"
              topicStatus1="casa/sala/luz"

              nome2="Ar-condicionado"
              status2="Desligado"
              botao3="Ligar"
              botao4="Desligar"
              topicCommand2="casa/sala/ar_condicionado"
              topicStatus2="casa/sala/ar_condicionado"

              nome3="Umidificador"
              status3="Desligado"
              botao5="Ligar"
              botao6="Desligar"
              topicCommand3="casa/sala/umidificador"
              topicStatus3="casa/sala/umidificador"
            />
          </div>
          <div className="col-4">
            <Caixacomodo
              comodo="Quarto"

              nome="Luz do Quarto"
              status="Desligada"
              botao1="Ligar"
              botao2="Desligar"
              topicCommand1="casa/quarto/luz"
              topicStatus1="casa/quarto/luz"

              nome2="Tomada Inteligente"
              status2="Desligada"
              botao3="Ligar"
              botao4="Desligar"
              topicCommand2="casa/quarto/tomada"
              topicStatus2="casa/quarto/tomada"

              nome3="Cortina"
              status3="Fechada"
              botao5="Abrir"
              botao6="Fechar"
              topicCommand3="casa/quarto/cortina"
              topicStatus3="casa/quarto/cortina"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaPrincipal;