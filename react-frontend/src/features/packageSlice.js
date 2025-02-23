import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu từ localStorage nếu có
const initialState = {
  cartids:  []
};

const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {
    createPackage: (state, action) => {
      const { product_id, quantity, size, color } = action.payload;
      const newIdCart = state.cartids.length > 0 ? Math.max(...state.cartids.map(cart => cart.id)) + 1 : 1;
      state.cartids.push({ 
        id: newIdCart, 
        products: [{ 
          product_id, 
          quantity,
          size,
          color
        }] 
      });
      // Lưu state vào localStorage sau khi thay đổi
      localStorage.setItem('cartids', JSON.stringify(state.cartids));
    },
    addProductToCart: (state, action) => {
      const { cartId, product_id, quantity, size, color } = action.payload;
      const cart = state.cartids.find(cart => cart.id === cartId);
      if (cart) {
        // Check if product with same id, size, and color already exists in cart
        const existingProductIndex = cart.products.findIndex(product => 
          product.product_id === product_id &&
          product.size === size &&
          product.color === color
        );

        if (existingProductIndex !== -1) {
          // Update quantity if product already exists
          cart.products[existingProductIndex].quantity += quantity;
        } else {
          // Add new product to cart
          cart.products.push({ product_id, quantity, size, color });
        }

        // Lưu state vào localStorage sau khi thay đổi
        localStorage.setItem('cartids', JSON.stringify(state.cartids));
      }
    },
    removeCartAfterOrder: (state, action) => {
      const { cartID } = action.payload;
      console.log(state.cartids = state.cartids.filter(cart => cart.id !== cartID));
      // Update localStorage after modifying state
      // localStorage.setItem('cartids', JSON.stringify(state.cartids));
    }
  }
});

export const { createPackage, addProductToCart, removeCartAfterOrder } = packageSlice.actions;

export default packageSlice.reducer;
