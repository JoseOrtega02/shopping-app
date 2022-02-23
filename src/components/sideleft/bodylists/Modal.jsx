import {useRef} from 'react'


export function Modal() {
  const listRef = useRef()
    
    const hideModal= ()=>{
      const modal = document.getElementById('modal')
      
        modal.style.display="none"
    }
    const handleAdd = () =>{
      const input = listRef.current.value
      const bodyLists = document.getElementById('body-lists')
bodyLists.innerHTML += `
              <div className="side__list--hide" >
               <div className="side__list-div" onClick={handleLists}>
                <h4>${input}</h4>
                <span className="material-icons-outlined">expand_more</span>
               </div>
                <ul>
                 <ListItem/>
                </ul>
              </div>
              `
    }
  return (
    <div id="modal" className="modal">
        <div className="modal-div">
        <span onClick={hideModal} className="material-icons-outlined">close</span>
        <input type="text" ref={listRef} />
        <button onClick={handleAdd}>Add List <br /><span className="material-icons-outlined">add</span></button>
        </div>
    </div>
  )
}
