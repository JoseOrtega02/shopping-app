import {useContext} from 'react'
import {Rakuten} from '../../../services/rakuten'
import { useEffect,useState } from 'react'
import {v4 as uuid} from "uuid"
import {useItem} from '../../hooks/useItem'
import itemContext from '../../context/itemContext'



export  function ShopItem() {
  let [listProducts,setList] = useState() 

  const {name,setName} = useContext(itemContext)
  

  useEffect(function() {
    Rakuten().then(listProducts => {
      setList(listProducts)
      
    })
    
  },[])

if(listProducts !== undefined){
  
  return(
    <div className="shop-container--box" >
      {
        listProducts.map(product =>{
          return (
            <div className="shop-item" key={uuid()}>
              <img src={product.imageUrl} alt="" />
              <h3>{product.shopName}</h3>
              <h4>{product.itemPrice}¥</h4>
              <button onClick={()=>{setName(name => [...name, product.shopName])}}>Add to your list</button>
            </div>
          )
        })
      }
    </div>
   
  )}

return(
  <div >
    <h1>Loading...</h1>
  </div>
)
  
}
