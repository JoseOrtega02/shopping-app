import React from 'react'
import {ListItem} from './ListItem'
import useList from '../../../hooks/useList'
import {v4 as uuid} from "uuid"

export  function List() {
  const {list} = useList()
  const handleLists = (event) => {
    
    if ( event.target.tagName === 'H4' || event.target.tagName === "SPAN"){
      let list = event.target
      let div = list.parentNode
      let parent = div.parentNode
      
      if(parent.className === "side__list"){
        parent.classList.remove("side__list")
        parent.classList.add("side__list--hide")
      }else if(parent.className === "side__list--hide"){
        parent.classList.remove("side__list--hide")
        parent.classList.add("side__list")
      }
    }
    
    

    
    
  }
  // const handleOn = (event) => {
  //   let parent = event.target.parentNode
  //   let arr = parent.children
  //   let [...ul] = arr
  //   if(parent.className === "side__list--hide"){
  //     ul.style.display = "none"
  //   }else if(parent.className === "side__list"){
      
  //   }
  // }
  return (
     
    list.map(names =>{
      return (
        <div className="side__list" key={uuid()}>
      <div className="side__list-div" onClick={handleLists}>
        <h4>{names}</h4>
        <span className="material-icons-outlined">expand_more</span>
      </div>
      <ul>
      <ListItem />
      </ul>
      {/* <button onClick={handleOn}>turn on</button> */}
    </div>
      )
    })
  )
}
