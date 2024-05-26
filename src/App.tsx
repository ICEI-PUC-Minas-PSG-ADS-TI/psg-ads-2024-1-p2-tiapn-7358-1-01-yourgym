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
  return (
    <>
     {isLogged? 
      <>
      <SideMenu setIsLogged={setIsLogged}/>
      <Routes>
        <Route path='/dashboard' element={<GymInfo/>}/>
        <Route path='/gyminfo' element={<GymInfo/>}/>
        <Route path='/notifications' element={<Notifications />}/>
        <Route path='/traininginfo' element={<TrainingInfo/>}/>
        <Route path='/userinfo' element={<UserInfo/>}/>
        {/* <Route path='/login' element={<Login setIsLogged={setIsLogged}/>}/>
        <Route path='/signup' element={<SignUp setIsLogged={setIsLogged}/>}/> */}
      </Routes>
      </>
      :
      <Routes>
        <Route path='/' element={<Login setIsLogged={setIsLogged}/>}/>
        <Route path='/signup' element={<SignUp setIsLogged={setIsLogged}/>}/>
      </Routes>
      }
    </>
  );
}

export default App;
