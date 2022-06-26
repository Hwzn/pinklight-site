import React from "react";
import Confirmform from "../../components/checkout/Confirmform";
import Demand from "../../components/checkout/Demand";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";
function Confirm() {
  const Price = 76,
    Shipping = 10;

  return (
    <section className="checkoutpage">
      <div className="container">
        <section className="checkoutpage__links">
          <NavLink to={`/cart`} className="active">
            حقيبة التسوق
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/confirm`} className="active">
            تأكيد الطلب
          </NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/payment`}>دفع</NavLink>

          <img src={Iconleft} alt="" />

          <NavLink to={`/`}>تم الطلب</NavLink>
        </section>

        <section className="checkoutpage__content">
          <Confirmform />
          <Demand Price={Price} Shipping={Shipping} classbutton={"hide"}/>
        </section>
      </div>
    </section>
  );
}

export default Confirm;
