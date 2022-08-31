import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart, productDetails } from '../../interfaces/cartItems';
import { BsMinecartLoaded } from 'react-icons/bs';
const PriceItems = () => {
  const cartArr = useSelector((state: cart) => state.cartListArr.cartArr);
  const [total, setTotal] = useState<number | 0>(0);
  const [tax, setTax] = useState<number | 0>(0);
  const [subTotal, setSubTotal] = useState<number | 0>(0);
  const [discount, setDiscount] = useState<number | 0>(0);
  const [delivery, setDelivery] = useState<number | 0>(0);

  useEffect(() => {
    let price = cartArr.map((total: productDetails) => {
      let subPrice = total.salePrice * total.defaultQty;
      let qty = total.defaultQty;
      const priceData = {
        subPrice,
        qty
      };
      return priceData;
    });
    //delivery
    let delivery = Math.floor(
      cartArr
        .map((del: productDetails) => del.shippingCost)
        .reduce((a: number, b: number) => a + b, 0)
    );
    setDelivery(delivery);

    //tax
    let itemTax = Math.floor(
      price
        .map((val: any) => val.subPrice)
        .reduce((a: number, b: number) => a + b, 0) * 0.12
    );
    setTax(itemTax);
    //subtotal
    let subTotal = Math.floor(
      price
        .map((val: any) => val.subPrice)
        .reduce((a: number, b: number) => a + b, 0)
    );

    //discount
    let discountArr = cartArr.map((total: productDetails) => {
      let newPrice = total.discountPrice <= 0 ? total.salePrice : 0;
      let discountPrice = (newPrice + total.discountPrice)*total.defaultQty;
      const priceData = {
        discountPrice
      };
      return priceData;
    });
   
    let myDiscount = discountArr
      .map((val: any) => val.discountPrice)
      .reduce((a: number, b: number) => a + b, 0);
    let approveDiscount = myDiscount - subTotal;
     console.log(myDiscount)
    setDiscount(approveDiscount);

    //total
    let total = subTotal + itemTax + delivery;
    setSubTotal(subTotal);
    setTotal(total);
  }, [cartArr]);
  return (
    <div className="card p-3">
      {total === 0 ? (
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <BsMinecartLoaded size={50} /> Cart Empty
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="span">Delivery</div>
          <div className="row d-flex align-items-center">
            <span className="ms-2 mt-1 rounded bg-light p-2 w-50 border">
              <span className="span p-1 bg-white border rounded me-1 shadow-sm">
                Free
              </span>
              <span className="bg-white p-1  border rounded me-1 shadow-sm">
                Paid
              </span>
              <span className="span">$ {delivery}</span>
            </span>
            <div className="row">
              <small className="text-secondary mb-3 mt-2">
                Delivery date: September 24, 2022
              </small>
            </div>
            <span className="border-bottom"></span>
            <div className="row">
              <span className="mt-3  d-flex justify-content-between ">
                <input
                  type="email"
                  className="form-control "
                  placeholder="Promocode"
                />
                <span className=" border p-2 rounded ms-1 coupon">Apply</span>
              </span>
            </div>
            <div className="row mt-3 mb-3">
              <span className="">20% off discount</span>
              <span className="discount mt-3"></span>
            </div>
            <div className="d-flex justify-content-between mb-3 ">
              <span>Subtotal</span>
              <span>$ {subTotal}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Discount</span>
              <span>$ {discount===0? 0:- discount}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Delivery</span>
              <span>$ {delivery}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Tax</span>
              <span>$ {tax}</span>
            </div>
            <span className="discount mt-3"></span>
            <div className="d-flex justify-content-between mb-3 mt-2 fw-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className="row">
              <button className="btn btn-danger mb-2">
                Proceed to checkout
              </button>
              <button className="btn btn-outline-danger">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PriceItems;
