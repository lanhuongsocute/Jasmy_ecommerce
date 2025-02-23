// Trong tệp cartActions.js

// redux/actions.js or wherever your actions are defined
export const removePackageFromCart = (packageId) => ({
  type: 'REMOVE_PACKAGE_FROM_CART',
  payload: { packageId }
});

export const addToCart = (productId) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: productId,
      quantity: 1, // You can adjust quantity as needed
      price: 20000, // You can get price from product data
      image: `../../assets/images/products/product${productId}.jpg`, // Adjust image path dynamically
      name: `Product ${productId}`, // Adjust product name dynamically
    },
  };
};

// export const addToCart = (productId, quantity) => {
//   return {
//     type: 'ADD_TO_CART',
//     payload: {
//       productId,
//       quantity
//     }
//   };
// };

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId
  };
};
