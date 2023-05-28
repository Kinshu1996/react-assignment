import React, { useContext } from 'react'
import { motion } from 'framer-motion';

import Table from '../../components/table/Table'
import { Context } from '../../context/AppContext';
import "./main.css"



const Main = () => {
    const {sortDataByName, sortDataByAge, showInfoBanner, backBtn } = useContext(Context);
    
    
  return (
    <>
    <div className='home-page-container'>
        
        <div className='table-data-container'>
            <div className='sort-container'>
                <div className='sort'>Sort By :-</div>
                <div className='sort-content'>
                    <motion.div whileHover={{scale: 1.1}} className='sort-name' onClick={sortDataByName}>
                        Name
                    </motion.div>
                    <motion.div whileHover={{scale: 1.1}} className='sort-age' onClick={sortDataByAge}>
                        Age
                    </motion.div>
                </div>
            </div>
            {/* <div className='search-container'>
                <div className='search-form' >
                    <input type='text' placeholder='search by name' value={query} onChange={(e) => setQuery(e.target.value)} />
                    <div className='search-btn' onClick={searchByName} ><AiOutlineSearch /></div>
                </div>
            </div> */}
            {showInfoBanner && <div className='info-banner'>You are viewing filtered results!</div>}
            <Table />

            <label className='back-btn' onClick={backBtn}>Back</label>
        </div>
        
    </div>
    </>
    
  )
}

export default Main
