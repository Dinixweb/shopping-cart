import React from "react";


export interface productDetails  {
    defaultQty: number;
    productId: number;
    productName: string;
    productQTY: number;
    vendorNo: number;
    salePrice: number;
    discountPrice: number;
    productCat: string;
    orderTime: any;
}

export interface productList{
    cartListArr: productDetails[];
    product: productDetails[];
    setProduct:React.Dispatch<React.SetStateAction<productDetails[]>>
}

export type singleProduct = {
    product: productDetails;
    productList?: productDetails[];
    key: number;
    setProduct?: React.Dispatch<React.SetStateAction<productDetails[]>>
    addToCart:(product:productDetails)=>void
}

export interface cart{
    cartListArr: any;
    cartList: productDetails;
    cart: productDetails[]
    setCart:React.Dispatch<React.SetStateAction<productDetails>>
}

export type singleCart = {
    cart: productDetails;
  
    
}
