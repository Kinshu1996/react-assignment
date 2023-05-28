import React, { useContext } from 'react'
import "./card.css";
import { Context } from '../../context/AppContext';
import ava_1 from "../../assests/ava-1.png";
import ava_2 from "../../assests/ava-2.png";
import ava_3 from "../../assests/ava-3.png";

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
                       {index === 0 ? <img src={ava_1} alt='' /> : index === 1 ? <img src={ava_2} alt='' /> : <img src={ava_3} alt='' />}
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
