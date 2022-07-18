import React from 'react'

function Categories(props) {
  const {categories , setCategories}=props;
  return (
    <div className='fillter__categories'>
        <h4>الفئات</h4>

        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" 
      data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        
        <input type="checkbox" value="فساتين" name="categories" 
            checked = {categories === "" ? false :  null} id="فساتين"/>
            <label htmlFor="فساتين">فساتين</label> 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" 
    data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        Placeholder content for this accordion, which is intended to demonstrate the 
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Categories;