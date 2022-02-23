

export  function Rakuten() {
  return fetch("https://rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com/services/api/IchibaItem/Ranking/20170628", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "rakuten_webservice-rakuten-marketplace-item-ranking-v1.p.rapidapi.com",
        "x-rapidapi-key": "691955a0a0mshe4aece9c1ae0fd4p1e254ejsn3bd6e8c06e9c"
      }
    })
.then(res => res.json())
.then(response => {
  const {Items = []} = response
  if (Array.isArray(Items)) {
    const products = Items.map(product =>{ 
      const {imageUrl}= product.Item.mediumImageUrls[0]
      const {shopName }=  product.Item
      const {itemPrice} = product.Item
      
      return {imageUrl,shopName ,itemPrice}
    })
   
    
    return products
    
  }
	return []
})
.catch(err => {
	console.error(err);
});
  
}
