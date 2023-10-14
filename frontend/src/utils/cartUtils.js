export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    if (!state.cartItems || !Array.isArray(state.cartItems)) {
        throw new Error("Invalid cart items provided");
    }

    // Calculate items price
    const itemsPrice = Number(addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)));

    // Calculate shipping price (If order is over $100 then free, else $10 shipping)
    const shippingPrice = itemsPrice > 100 ? 0 : 10;

    // Calculate tax price (15% tax)
    const taxPrice = Number(addDecimals(0.15 * itemsPrice));

    // Calculate total price
    const totalPrice = Number(addDecimals(itemsPrice + shippingPrice + taxPrice));

    // Update the state object
    state.itemsPrice = itemsPrice;
    state.shippingPrice = shippingPrice;
    state.taxPrice = taxPrice;
    state.totalPrice = totalPrice;

    localStorage.setItem('cart', JSON.stringify(state));
    return state;
};















// export const addDecimals = (num) => {
//     return Math.round((num *100)/100).toFixed(2);
// };

// export const updateCart = (state) => {
// //Calculate items price
// state.itemPrice = addDecimals(state.cartItems.reduce((acc,item)=> acc + item.price * item.qty, 0 ));

// //Calculate shipping price (If order os over $100 then free, else $10 shipping)
// state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

// //Calculate tax price (15% tax)
// state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

// //Calculate total price
// state.totalPrice =(
//     Number(state.itemsPrice)+
//     Number(state.shippingPrice)+
//     Number(state.taxPrice)
// ).toFixed(2);

// localStorage.setItem('cart', JSON.stringify(state));
// return state;
// }