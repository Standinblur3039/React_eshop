import React from 'react'
import "./Product.css"

function Product({id,title,price,rating,image}) {
  return (
    
        <div className='product'>
            <div className='product__info'>
                <p>{title} </p>
                <p className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
                  </p>
                <div className="product__rating">
                {/* // using curly brackets to use js obect in html , Array( rating ) = creats a array , .fill() method fills the array , .map(_,i) means (_) means each and every item of array and (i) means integer of the array these two have to be filled with paragram <p>star ⭐</p>  */}
                  {Array(rating) 
                  .fill()
                  .map((i)=>(                      //can also be written without the (_,i)
                    <p key={i}>⭐</p> // win + ; to use emojis 
                  ))} 
                  
                
                </div>

            </div>
            <img src={image} alt='random' />
            <button>Add to Basket</button>



        </div>


    
  )
}

export default Product