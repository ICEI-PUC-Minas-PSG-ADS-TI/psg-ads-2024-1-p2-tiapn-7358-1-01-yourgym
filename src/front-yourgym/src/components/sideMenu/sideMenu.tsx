import React from 'react'

import './sideMenuStyle.css';
import logo from '../../assets/logo.png'

import { Link, useNavigate } from 'react-router-dom';

interface ISideMenu {
  setIsLogged: (prop: boolean) => void
}

function SideMenu({ setIsLogged }: ISideMenu) {
  const navigate = useNavigate();

  const formSubmit = () => {
    setIsLogged(false)
    navigate('/')
}

  return (
    <div className="sidebar">
        <div className="logo">
            <span>YourGym</span>
            <img src={logo}></img>
        </div>
      
        <ul className="menu">
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li><Link to={'/notifications'}>Notificações</Link></li>
        </ul>

        <div className='logOutContainer'>
          <button onClick={formSubmit}>Sair</button>
        </div>
    </div>
  )
}

export default SideMenu;