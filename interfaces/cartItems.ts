export  interface cartItem {
    cartList: cart[];
}
export type cart = {
    productId: number;
    productName: string;
    productQTY: number;
    vendorNo: number;
    salePrice: number;
    discountPrice: number;
    productCat: string;
}