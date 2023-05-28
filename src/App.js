import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Card from './pages/card/Card';
import Header from "./components/header/Header"
import ProtectedRoute from './pages/router/ProtectedRoute';
import Footer from "./components/footer/Footer"



function App() {

  return (
    <>
    <Header />
    <Routes>  
        <Route path='/' element={<ProtectedRoute Components={Main} />} />
        <Route path='/card' element={<ProtectedRoute Components={Card} />} />
        <Route path='/login' element={<Login />} />   
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
