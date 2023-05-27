

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext();

const AppContext = ({children}) => {
    const[data, setData] = useState([]);
   const[query, setQuery] = useState("");
   const[showInfoBanner, setShowInfoBanner] = useState(false);
   

   const fetchDataFromApi = async () => {
    await axios.get("https://coralmango.com/api/react-test").then(
        (res) => {
            setData(res.data);
        }
    ).catch((err) =>{
        console.log(err);
    })
   }

   const sortDataByName = () => {
    const sortedData = [...data].sort((a,b) => {
        return a.name > b.name ? 1 : -1
    })
    setData(sortedData);
   }

   const sortDataByAge = () => {
    const sortedData = [...data].sort((a,b) => {
        return a.age > b.age ? 1 : -1
    })
    setData(sortedData);
   }
  
  

    const searchByName = (e) => {
        console.log(query);
        const filterData = data.filter(value => value.name.toLowerCase().includes(query.toLowerCase()))
        console.log(filterData);
        setData(filterData);
        setQuery("");
        setShowInfoBanner(true);
        
    }


   useEffect(() => {
    fetchDataFromApi();
   },[])

  return (
    <Context.Provider value={{
        data,
        setData,
        sortDataByName,
        sortDataByAge,
        query, 
        setQuery,
        searchByName,
        showInfoBanner
    }}>
        {children}
    </Context.Provider>
  )
}

export default AppContext
