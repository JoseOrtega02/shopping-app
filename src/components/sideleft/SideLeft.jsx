import {useState} from 'react'
import { HeaderSide } from './HeaderSide'
import { BodyLists } from './bodylists/BodyLists'
import listsContext from "../context/listsContext"

export  function SideLeft() {
  const [list,setList] = useState([])
  const listValue = {list,setList}

  return (
    <listsContext.Provider value={listValue}>
    <div className="side">
      <HeaderSide/>
      <BodyLists/>

    </div>
    </listsContext.Provider>
  )
}
