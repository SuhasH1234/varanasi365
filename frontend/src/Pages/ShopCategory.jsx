import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Item from '../Components/Items/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('default'); // State to manage sorting order

  // Function to handle sorting
  const handleSort = (order) => {
    setSortOrder(order);
  };

  // Sorting logic
  const sortedProducts = [...all_product]
    .filter((item) => item.category === props.category)
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') {
        return a.new_price - b.new_price;
      } else if (sortOrder === 'highToLow') {
        return b.new_price - a.new_price;
      } else {
        return 0; // Default order
      }
    });

  return (
    <div className='shop-category'>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by 
          <div className="dropdown">
            <button className="dropdown-btn">
              Select <ArrowDropDownIcon fontSize='small' />
            </button>
            <div className="dropdown-content">
              <button onClick={() => handleSort('lowToHigh')}>Price: Low to High</button>
              <button onClick={() => handleSort('highToLow')}>Price: High to Low</button>
            </div>
          </div>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <br/>
    </div>
  );
};

export default ShopCategory;
