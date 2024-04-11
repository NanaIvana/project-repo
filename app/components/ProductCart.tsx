import React from 'react';
import AddToCart from './AddToCart';
import styles from './ProductCart.module.css';

const ProductCart = () => {
  return (
    <><div className={styles.card}>
          <AddToCart />
      </div>
      <div className='p-5 my-5 bg-gray-400 text-white text-xl hover:bg-slate-200'>
              <AddToCart />
          </div>
    </>
  )
}

export default ProductCart