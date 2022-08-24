export  interface cartItem {
    cartList: cartItems[];
}
export type cartItems = {
    productId: number;
    productName: string;
    productQTY: number;
    vendorNo: number;
    salePrice: number;
    discountPrice: number;
    productCat: string;

}