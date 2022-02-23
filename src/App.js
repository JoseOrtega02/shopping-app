import './App.css';
import {ShopContainer} from './components/shopcontainer/ShopContainer'
import {SideLeft} from './components/sideleft/SideLeft'
import itemContext from './components/context/itemContext';
import {useState} from "react"

function App() {
 const [name, setName] = useState([])
  const value = {name,setName}
  
 
  
    return (
      <itemContext.Provider value={value}>
      <div className="App">
        <SideLeft/>
        <ShopContainer/>
        
      </div>
      </itemContext.Provider>
    );
  
  
}

export default App;
