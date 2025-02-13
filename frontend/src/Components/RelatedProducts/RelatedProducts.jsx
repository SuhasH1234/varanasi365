import React, { useState, useEffect} from 'react'
import './RelatedProducts.css'
import Item from '../Items/Item'

const RelatedProducts = () => {

  const [relatedproducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch('https://varanasi365.onrender.com/newcollections')
        .then((response) => response.json())
        .then((data) => {
          setRelatedProducts(data.slice(0, 4));
        });
}, []);


  return (
    <div className='relatedproducts'>
        <h1>Related Products <hr /></h1>
        
        <div className="relatedproducts-item">
            {relatedproducts.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts
