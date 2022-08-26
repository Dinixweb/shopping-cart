import React from "react";


export interface productDetails  {
    productId: number;
    productName: string;
    productQTY: number;
    vendorNo: number;
    salePrice: number;
    discountPrice: number;
    productCat: string;
}

export interface productList{
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
    cart: productDetails[]
    setCart:React.Dispatch<React.SetStateAction<productDetails>>
}
