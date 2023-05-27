import React, { useContext } from 'react'
import { Context } from '../../context/AppContext'
import "./table.css";


const Table = () => {
    const {data} = useContext(Context);
  return (
    <div className='table-container'>
      <table >
        <thead>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>occupation</th>
            </tr> 
        </thead>
        <tbody>
            {
                data?.map((item,index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.occupation}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      {/* <div className='table-heading'>
        <div>Name</div>
        <div>Age</div>
        <div>Occupation</div>
      </div>
      <div className='table-data'>
        {
            data?.map((item,index) => (
                <div className='data' key={index}>
                    <div>{item.name}</div>
                    <div>{item.age}</div>
                    <div>{item.occupation}</div>
                </div>
            ))
        }
      </div> */}
    </div>
  )
}

export default Table
