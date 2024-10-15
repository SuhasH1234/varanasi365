import React from 'react'
import './RelatedProducts.css'
import all_product from '../Assets/all_product'
import Item from '../Items/Item'

const RelatedProducts = () => {

    // Limit the displayed products to the first 4
  const displayedProducts = all_product.slice(0, 4);


  return (
    <div className='relatedproducts'>
        <h1>Related Products <hr /></h1>
        
        <div className="relatedproducts-item">
            {displayedProducts.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts