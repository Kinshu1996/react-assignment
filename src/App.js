import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import Login from './pages/login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  );
}

export default App;
