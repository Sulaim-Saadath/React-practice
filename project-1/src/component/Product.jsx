import React from 'react'

const Product = ({name, price, color, inStock}) => {
    let inStockCheck;
    if(inStock == true) {
        inStockCheck = "The product is available";
    } else {
        inStockCheck = "The product is not avaialable";
    }
  return (
    <>
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <h3>{color}</h3>
      <h4>{inStockCheck}</h4>
    </div>
    </>
  )
}

export default Product
