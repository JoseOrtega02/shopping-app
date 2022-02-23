import React from 'react'
import {ListItem} from './ListItem'

export  function List() {
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
  return (
    <div className="side__list" >
      <div className="side__list-div" onClick={handleLists}>
        <h4>list</h4>
        <span className="material-icons-outlined">expand_more</span>
      </div>
      <ul>
      <ListItem/>
      </ul>
    </div>
  )
}
