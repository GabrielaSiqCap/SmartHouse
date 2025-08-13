import React, { useState } from "react";
import Caixacomodo from "../components/Caixacomodo.jsx";
import Painel from "../components/Painel.jsx";
import BotaoTroca from "../components/landd/BotaoTroca.jsx";

const PaginaPrincipal = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
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

        <div className="row">
          <div className="col-3">
            <Painel />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-4">
            <Caixacomodo
              comodo="Garagem"
              nome="Porta Social "
              status="Aberta"
              botao1="Abrir"
              botao2="Fechar"
              nome2="Porta Basculante"
              status2="Aberta"
              botao3="Abrir"
              botao4="Fechar"
              nome3="Luz da Garagem"
              status3="AC"
              botao5="Ligar"
              botao6="Desligar"
            />
          </div>
          <div className="col-4">
            <Caixacomodo
              comodo="Sala de Estar"
              nome="Luz da Sala"
              status="Aberta"
              botao1="Ligar"
              botao2="Desligar"
              nome2="Ar-condicionado"
              status2="Aberta "
              botao3="Ligar"
              botao4="Desligar"
              nome3="Umidificador"
              status3="Ligada"
              botao5="Ligar"
              botao6="Desligar"
            />
          </div>
          <div className="col-4">
            <Caixacomodo
              comodo="Quarto"
              nome="Luz do Quarto"
              status="Aberta "
              botao1="Ligar"
              botao2="Desligar"
              nome2="Tomada Inteligente"
              status2="Aberta "
              botao3="Ligar"
              botao4="Desligar"
              nome3="Cortina"
              status3="Ligada"
              botao5="Abrir"
              botao6="Fechar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaPrincipal;