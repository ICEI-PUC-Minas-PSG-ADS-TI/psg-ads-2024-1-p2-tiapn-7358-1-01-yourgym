import React from 'react';
import InfoHeader from '../../components/infoHeader/infoHeader';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function UserInfo({ userData }: any) {
  const userDataWeek = [
    { Dia: '2024-05-01', Horas: 2 },
    { Dia: '2024-05-02', Horas: 0 },
    { Dia: '2024-05-03', Horas: 3 },
    { Dia: '2024-05-04', Horas: 0 },
    { Dia: '2024-05-05', Horas: 1 },
    { Dia: '2024-05-06', Horas: 0 },
    { Dia: '2024-05-07', Horas: 2 },
  ];

  return (
    <div className='main-content'>
      <InfoHeader userData={userData}/>
      <div className="chart-container">
        <h2>Frequencia em horas por dia</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={userDataWeek}>
            <XAxis dataKey="Dia" interval={1}/>
            <YAxis dataKey="Horas"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="Horas" fill="rgba(255, 165, 0, 0.7)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default UserInfo;