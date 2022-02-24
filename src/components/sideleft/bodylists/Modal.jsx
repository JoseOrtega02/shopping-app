import {useRef,useState,useEffect,useContext} from 'react'
import useList from '../../hooks/useList'
import listContext from '../../context/listsContext'

export function Modal() {
  const listRef = useRef()
  
  let [lists,setLists] = useState([])
  let {list,setList} = useContext(listContext)
  
  useEffect(function(){
    
  },[list])

    const hideModal= ()=>{
      const modal = document.getElementById('modal')
      
        modal.style.display="none"
    }
    const handleAdd = () =>{
      const input = listRef.current.value
      
      setList(list => [...list,input])
      
    }
  return (
    <div id="modal" className="modal">
        <div className="modal-div">
        <span onClick={hideModal} className="material-icons-outlined">close</span>
        <input type="text" ref={listRef} />
        <button onClick={
          handleAdd
        }>Add List <br /><span className="material-icons-outlined">add</span></button>
        </div>
    </div>
  )
}
