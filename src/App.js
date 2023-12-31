
import './App.css';
import Main from './Main/Main';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Kitchen from './Kitchen/Kitchen';
import Login from './Login/Login';
import QNA from './QnA/QNA';
import Reservations from './Reservations/Reservations';
import Signup from './Login/Signup';
import ReservationsPage from './Reservations/ReservationsPage';
import ReservationsSuccess from './Reservations/ReservationsSuccess';






function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Menu" element={<Menu/>} />
      <Route path="/Kitchen" element={<Kitchen/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/Q&A" element={<QNA/>} />
      <Route path="/Reservations" element={<Reservations/>} />
      <Route path="/ReservationsPage" element={<ReservationsPage/>} />
      <Route path="/ReservationsSuccess" element={<ReservationsSuccess/>}/>
      

      
    </Routes>
    </BrowserRouter>
    

    
    
  );
}


export default App;
