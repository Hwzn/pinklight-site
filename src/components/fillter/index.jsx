import React, { useState } from 'react';
import Brands from './brands';
import Categories from './categories';
import City from './city';
import Price from './price';
import Status from './status';

function Fillter() {
  const [city,setCity]=useState([]);
  const [status , setStatus]=useState([]);
  const [brands , setBrands]=useState([]);
  const [categories , setCategories]=useState([]);
  

  
  const handleSubmit =  (e) => {
    e.preventDefault();
    setCity("")
    setStatus("")
    setBrands("")
  };

  return (
    <section className='fillter'>
      <form onSubmit={handleSubmit}>
        <Categories categories={categories} setCategories={setCategories}/>
        <Brands brands={brands} setBrands={setBrands}/>
        <Price/>
        <Status status={status} setStatus={setStatus}/>
        <City city={city} setCity={setCity} />

        <button className="btn btn_removeall" type="submit">
        مسح الكل
        </button>
      </form>

    </section>
  )
}

export default Fillter;