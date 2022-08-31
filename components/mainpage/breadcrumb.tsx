import { BiHomeAlt } from 'react-icons/bi';
import { MdKeyboardArrowRight, MdCompare } from 'react-icons/md';
import { IoHeartCircleOutline } from 'react-icons/io5';
import { BsMinecartLoaded } from 'react-icons/bs';
import { useAuth } from '../../hooks/useContext';
import { useSelector } from 'react-redux';
import { productList, cart, productDetails } from '../../interfaces/cartItems';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const BreadCrumb = () => {
  const [qty, setQty] = useState<number[] | []>([]);
  const [subPrice, setSubPrice] = useState<number[] | []>([])
  const cartArr = useSelector((state: cart) => state.cartListArr.cartArr);
  const { cart } = useAuth();
  const cartPage = '/cart'
  const home= '/'
  useEffect(() => {
    const uniqueId = new Set();
    const unique = cartArr.filter((q: any) => {
      const isDuplicate = uniqueId.has(q.productId);
      uniqueId.add(q.productId);
      
      if (!isDuplicate) {
        return true;
      }
      return false;
    });
    setQty(unique);

    let price = cartArr.map((total: productDetails) => {
      let subPrice = total.salePrice * total.defaultQty;
      let qty = total.defaultQty;
      const priceData = {
        subPrice,
        qty
      }
      return priceData
    } )
    console.log(price)
    setSubPrice(price)
  }, [cartArr, setQty]);
  return (
    <div className="main">
      <div className="row">
        <div className="col-3 border-bottom p-3 border-end">
          <span className="icon ms-5">
           
            <span className="fs-4">
              <Link href={home}>
              <span className='bList'> <BiHomeAlt size={25} style={{ marginTop: -7 }} />{' '} Home</span>
              </Link>
              <MdKeyboardArrowRight />
              <small className="fs-6">Catalog</small>{' '}
            </span>
          </span>
        </div>
        <div className="col-9 border-bottom">
          <div className="row ">
            <div className="col-4 border-end p-4">
              <span className='bList'>
                <MdCompare size={35} style={{ marginRight: 10 }} /> Compare
                Product
              </span>
            </div>
            <div className="col-4 border-end p-4">
              <span className='bList'>
                <IoHeartCircleOutline size={35} style={{ marginRight: 10 }} />
                Wish List - Empty
              </span>
            </div>
            <div className="col-4 border-end p-4 ">
              <Link href={cartPage} >
                 <span className='bList'>
                <BsMinecartLoaded size={35} style={{ marginRight: 10 }} />
                {qty.length} Products - ${' '}
                {cartArr.length > 0
                  ? subPrice.map((price:any)=>price.subPrice).reduce((a,b)=>a+b,0)
                      
                  : 0}
              </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BreadCrumb;
