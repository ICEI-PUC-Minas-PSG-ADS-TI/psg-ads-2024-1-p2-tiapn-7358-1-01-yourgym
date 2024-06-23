import { Route, Routes } from 'react-router-dom';
import SideMenu from './components/sideMenu/sideMenu';
import GymInfo from './pages/gymInfo/GymInfo';
import Notifications from './pages/notifications/Notifications';
import { useState } from 'react';
import SignUp from './pages/signup/signup';
import Login from './pages/login/login';
import TrainingInfo from './pages/trainingInfo/TrainingInfo';
import UserInfo from './pages/userInfo/UserInfo';



function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState({});

  return (
    <>
     {isLogged? 
      <>
      <SideMenu setIsLogged={setIsLogged}/>
      <Routes>
        <Route path='/dashboard' element={<GymInfo userData={userData}/>}/>
        <Route path='/gyminfo' element={<GymInfo userData={userData}/>}/>
        <Route path='/notifications' element={<Notifications />}/>
        <Route path='/traininginfo' element={<TrainingInfo userData={userData}/>}/>
        <Route path='/userinfo' element={<UserInfo userData={userData}/>}/>
        {/* <Route path='/login' element={<Login setIsLogged={setIsLogged}/>}/>
        <Route path='/signup' element={<SignUp setIsLogged={setIsLogged}/>}/> */}
      </Routes>
      </>

      :
      
      <Routes>
        <Route path='/' element={<Login setIsLogged={setIsLogged} setUserData={setUserData}/>}/>
        <Route path='/signup' element={<SignUp setIsLogged={setIsLogged} setUserData={setUserData}/>}/>
      </Routes>
      }
    </>
  );
}

export default App;
