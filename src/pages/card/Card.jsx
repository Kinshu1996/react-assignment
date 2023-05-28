import React, { useContext } from 'react'
import "./card.css";
import { Context } from '../../context/AppContext';

const Card = () => {
    const {data} = useContext(Context);
  return (
    <>
    
    <div className="card-section">
        <div className="card-content">
            <div className="card-items">
            {
                data?.map((item,index) => (
                    <div key={index} className='card-item'>
                       
                       <div className="card-img">
                       <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt='' />
                       </div>
                        <div className='item-name'>{item.name}</div>
                        <div className='item-occupation'>{item.occupation}</div>
                        <div className='item-age'>{item.age} years</div>
                       
                    </div>
                ))
            }
            </div>
        </div>
    </div>
    </>
  )
}

export default Card
