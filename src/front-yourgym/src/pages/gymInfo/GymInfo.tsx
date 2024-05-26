import React, { useState } from 'react'
import './gymInfo.css'

import data from './chartData';
import userImage from '../../assets/user.png'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Link } from 'react-router-dom';
import InfoHeader from '../../components/infoHeader/infoHeader';


function GymInfo() {

  return (
    <div className="main-content">
        <InfoHeader />
        <div className="chart-container">
            <h2>Média de Público por Horário</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pessoas" fill="rgba(255, 165, 0, 0.7)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default GymInfo;