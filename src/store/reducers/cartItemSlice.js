import { createSlice } from "@reduxjs/toolkit";

let cartInitialState = { getCartData: [], totalAmount: 0, grandTotal: 0 };

const cartItemSlices = createSlice({
  name: "cartItem",
  initialState: cartInitialState,
  reducers: {
    setCartData(state, action) {
      console.log("action payload-----------", action.payload);
      let alreadyExist = state.getCartData.findIndex(
        (data) => data.id === action.payload.id
      );

      if (alreadyExist >= 0) {
        state.getCartData[alreadyExist] = action.payload;
        let updatedTotal = action.payload.price * action.payload.price;
        state.totalAmount += updatedTotal;
      } else {
        state.getCartData.push(action.payload);
        let updatedTotal = action.payload.price * action.payload.price;
        state.totalAmount += updatedTotal;
      }
    },
    removeCartItem(state, action) {
      state.getCartData = state.getCartData.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const cartItemAction = cartItemSlices.actions;
export default cartItemSlices.reducer;
