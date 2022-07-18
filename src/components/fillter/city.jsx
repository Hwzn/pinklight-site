import React from 'react'

function City(props) {
  const {city , setCity }=props;
  
  const handleChange =  (e) => {
    const value = e.target.value;
    const citys = [...city, value];
    setCity([...citys]);
    console.log(city);
  };

  return (
    <div className='fillter__city'>
        <h4>المدينه/المنطقه</h4>
        <ul>
          <li>
            <input type="checkbox" value="الرياض" name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id="الرياض"/>
            <label htmlFor="الرياض">
              الرياض
              </label>
          </li>
          <li>
            <input type="checkbox" value="أبها" name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id="ابها"/>
            <label htmlFor="ابها">
            أبها
          </label>
          </li>
          <li>
            <input type="checkbox" value="جيزان" name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id="جيزان"/>
            <label htmlFor="جيزان">
            جيزان
          </label>
          </li>
          <li>
            <input type="checkbox" value="جده" name="city" onChange={handleChange} 
            checked = {city === "" ? false :  null} id="جده"/>
          <label htmlFor="جده">
            جده
          </label>
          </li>
        </ul>
    </div>
  )
}

export default City