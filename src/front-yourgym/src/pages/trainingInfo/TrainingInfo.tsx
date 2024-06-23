import React, { useState } from 'react';
import InfoHeader from '../../components/infoHeader/infoHeader';
import '../trainingInfo/training.css';

function TrainingInfo({userData} : any) {
  const [activeTraining, setActiveTraining] = useState<string | null>(null);

  const trainings = [
    { id: 'A', title: 'TREINO A', description: 'Conteúdo detalhado do treino A' },
    { id: 'B', title: 'TREINO B', description: 'Conteúdo detalhado do treino B' },
    { id: 'C', title: 'TREINO C', description: 'Conteúdo detalhado do treino C' },
  ];

  const toggleTraining = (id: string) => {
    setActiveTraining(activeTraining === id ? null : id);
  };

  return (
    <div className="main-content">
      <InfoHeader userData={userData}/>
      <div id="training-info">
        <h2>Informações de Treino</h2>
        <div className="training-container">
          {trainings.map(training => (
            <div
              key={training.id}
              className={`training ${activeTraining === training.id ? 'selected' : ''}`}
              onClick={() => toggleTraining(training.id)}
            >
              <div className="training-title">{training.title}</div>
              <div className="training-controls">
                <button className="edit-button">✏️</button>
                <button className="expand-button">
                  {activeTraining === training.id ? '⬆️' : '⬇️'}
                </button>
              </div>
              {activeTraining === training.id && (
                <div className="training-description">{training.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainingInfo;
