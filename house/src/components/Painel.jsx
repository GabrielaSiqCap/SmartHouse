import React, { useState, useEffect } from 'react';
import ItensPainel from './ItensPainel.jsx';

const Painel = () => {
  const [temperatura, setTemperatura] = useState('22°C');
  const [umidade, setUmidade] = useState('50%');
  const [movimento, setMovimento] = useState('Ausente');
  const [luzes, setLuzes] = useState('Desligado');

  useEffect(() => {
    // Simula atualização de temperatura e umidade
    const interval = setInterval(() => {
      setTemperatura(`${Math.floor(Math.random() * 10) + 20}°C`);
      setUmidade(`${Math.floor(Math.random() * 50) + 30}%`);
    }, 5000);

    // Simula detecção de movimento
    const movimentoInterval = setInterval(() => {
      setMovimento(Math.random() > 0.5 ? 'Detectado' : 'Ausente');
    }, 3000);

    // Simula estado das luzes
    const luzesInterval = setInterval(() => {
      setLuzes(Math.random() > 0.5 ? 'Ligado' : 'Desligado');
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(movimentoInterval);
      clearInterval(luzesInterval);
    };
  }, []);

  return (
    <div className="bg-pastel-teal-200 rounded-5 p-5 h-100 ">
      <h4>Dados em tempo real:</h4>
      <ItensPainel item="Temperatura" status={temperatura} />
      <ItensPainel item="Umidade" status={umidade} />
      <ItensPainel item="Movimento" status={movimento} />
      <ItensPainel item="Luzes" status={luzes} />
    </div>
  );
};

export default Painel;
