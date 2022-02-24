import React from 'react'
import useItem from "../../../hooks/useItem"
import {v4 as uuid} from "uuid"

export  function ListItem() {
  const {name} = useItem()
  
    return(
      name.map(names=>{
        
         return(
           <li key={uuid()}>{names}</li>
         )
        
       
     }))
  

}
