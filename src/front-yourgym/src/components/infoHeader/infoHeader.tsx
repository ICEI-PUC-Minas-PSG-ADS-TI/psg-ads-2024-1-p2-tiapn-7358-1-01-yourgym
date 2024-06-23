import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import userImage from '../../assets/user.png'
import { DashboardActiveTabContext } from '../../hooks/useDashboardActiveTab';

function InfoHeader({userData}: any) {

  const { activeTab, setActiveTab } = useContext(DashboardActiveTabContext)
          
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
};

return (
    <div className="header">
        <div className="user-info">
            <img src={userImage} alt="User" className="user-img"></img>
            <div className="user-details">
                <span className="user-name">{userData.name}</span>
                <span className="user-email">{userData.email}</span>
            </div>
        </div>
        <div className="tabs">
        <Link to={'/userinfo'}>
          <button
            className={`tab-button ${activeTab === 'userinfo' ? 'active' : ''}`}
            onClick={() => handleTabClick('userinfo')}
          >
            Informações do Aluno
          </button>
        </Link>
        <Link to={'/traininginfo'}>
          <button
            className={`tab-button ${activeTab === 'traininginfo' ? 'active' : ''}`}
            onClick={() => handleTabClick('traininginfo')}
          >
            Informações de Treino
          </button>
        </Link>
        <Link to={'/gyminfo'}>
          <button
            className={`tab-button ${activeTab === 'gyminfo' ? 'active' : ''}`}
            onClick={() => handleTabClick('gyminfo')}
          >
            Informações da Academia
          </button>
        </Link>
      </div>
    </div>
)
}

export default InfoHeader;