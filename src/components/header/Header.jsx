import React, { useContext } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import "./header.css";
import { Context } from '../../context/AppContext';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const {query, setQuery,searchByName, handleLogout} = useContext(Context);
    

    const login = localStorage.getItem('login');

    
    

  return (
    <div className='header-section'>
     <div className='header-content'>
        <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/card'>
            <li>Card</li>
            </Link>
            
        </ul>
        {login ? <div className='search-bar'>
            <input type='text' placeholder='search by name' value={query} onChange={(e) => setQuery(e.target.value)} />
           <div className='search-btn' onClick={searchByName} ><AiOutlineSearch /></div>
        </div> : ""}
        {login && <div className='logout-btn' onClick={handleLogout}>
            Logout
        </div> }
        {!login && <NavLink to='/login' className='logout-btn'>login</NavLink>}
     </div>
    </div>
  )
}

export default Header
