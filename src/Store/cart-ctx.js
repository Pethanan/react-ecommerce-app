// import React, { useContext, useEffect, useState } from "react";
// import AuthCtx from "./auth-ctx";

// const CartCtx = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addToCart: (item) => {},
//   // removeFromCart: (id) => {},
// });

// export const CartCtxProvider = (props) => {
//   const authCtx = useContext(AuthCtx);
//   const [items, setItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     if (authCtx.isLoggedIn) {
//       const fetchUserCart = async () => {
//         const itemsInBackEnd = await fetch(
//           `https://crudcrud.com/api/728fc4b5bfb0409e84f750b9f6d29a7c/${authCtx.dataEndPoint}`
//         );
//         const fetchedUserCartData = await itemsInBackEnd.json();
//         let totalPrice = 0;
//         for (const item of fetchedUserCartData) {
//           totalPrice =
//             totalPrice + parseInt(item.price) * parseInt(item.amount);
//         }
//         setItems(fetchedUserCartData);
//         setTotalAmount(totalPrice);
//         console.log(totalPrice);
//       };
//       fetchUserCart();
//     } else {
//       setItems([]);
//     }
//   }, [authCtx.isLoggedIn, authCtx.dataEndPoint]);

//   const addToCartHandler = async (item) => {
//     console.log(item);
//     const itemToUpdateIndex = items.findIndex(
//       (cartItem) => item.id === cartItem.id
//     );

//     console.log(itemToUpdateIndex);
//     const itemToUpdate = items[itemToUpdateIndex];
//     console.log(itemToUpdate);
//     let updatedCartItems;

//     if (itemToUpdate) {
//       const itemsInBackEnd = await fetch(
//         `https://crudcrud.com/api/728fc4b5bfb0409e84f750b9f6d29a7c/${authCtx.dataEndPoint}`
//       );
//       const itemsInBackEndData = await itemsInBackEnd.json();
//       const itemInBackEndIndex = itemsInBackEndData.findIndex(
//         (FetechedItem) => item.id === FetechedItem.id
//       );
//       const id = itemsInBackEndData[itemInBackEndIndex]._id;
//       const upatedItem = {
//         ...itemToUpdate,
//         amount: parseInt(itemToUpdate.amount) + 1,
//       };

//       await fetch(
//         `https://crudcrud.com/api/728fc4b5bfb0409e84f750b9f6d29a7c/${authCtx.dataEndPoint}/${id}`,
//         {
//           method: "PATCH",
//           body: JSON.stringify({
//             amount: parseInt(itemToUpdate.amount) + 1,
//           }),
//           headers: {
//             "Content-type": "application/json",
//           },
//         }
//       );
//       // console.log(addedItemResp);
//       // const addedItem = await addedItemResp.json();
//       // console.log(addedItem);
//       updatedCartItems = [...items];
//       updatedCartItems[itemToUpdateIndex] = upatedItem;
//       setItems(updatedCartItems);
//       const updatedTotalAmount = parseInt(totalAmount) + parseInt(item.price);
//       setTotalAmount(updatedTotalAmount);
//       console.log(updatedTotalAmount);
//       console.log(totalAmount);
//     } else {
//       const newItem = {
//         ...item,
//         amount: 1,
//       };
//       await fetch(
//         `https://crudcrud.com/api/728fc4b5bfb0409e84f750b9f6d29a7c/${authCtx.dataEndPoint}`,
//         {
//           method: "POST",
//           body: JSON.stringify(newItem),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       alert(`1 ${newItem.title} added to the cart!`);
//       const updatedItems = [...items, newItem];
//       setItems(updatedItems);
//       console.log(updatedItems);
//       const updatedTotalAmount = parseInt(totalAmount) + parseInt(item.price);
//       setTotalAmount(updatedTotalAmount);
//       console.log(updatedTotalAmount);
//     }
//   };

//   const removeHandler = async (id) => {
//     const itemToUpdateIndex = items.findIndex((cartItem) => id === cartItem.id);

//     const itemToUpdate = items[itemToUpdateIndex];
//     let updatedCartItems;

//     if (itemToUpdate.amount > 1) {
//       const itemsInBackEnd = await fetch(
//         `https://crudcrud.com/api/728fc4b5bfb0409e84f750b9f6d29a7c/${authCtx.dataEndPoint}`
//       );
//       const itemsInBackEndData = await itemsInBackEnd.json();
//       const itemInBackEndIndex = itemsInBackEndData.findIndex(
//         (FetechedItem) => id === FetechedItem.id
//       );
//       const itemId = itemsInBackEndData[itemInBackEndIndex]._id;
//       const upatedItem = {
//         ...itemToUpdate,
//         amount: parseInt(itemToUpdate.amount) - 1,
//       };
//       await fetch(
//         `https://crudcrud.com/api/728fc4b5bfb0409e84f750b9f6d29a7c/${authCtx.dataEndPoint}/${itemId}`,
//         {
//           method: "PATCH",
//           body: JSON.stringify({ amount: parseInt(itemToUpdate.amount) - 1 }),
//           headers: {
//             "Content-type": "application/json",
//           },
//         }
//       );
//       // console.log(addedItemResp);
//       // const addedItem = await addedItemResp.json();
//       // console.log(addedItem);
//       updatedCartItems = [...items];
//       updatedCartItems[itemToUpdateIndex] = upatedItem;
//       setItems(updatedCartItems);
//       const updatedTotalAmount =
//         parseInt(totalAmount) - parseInt(itemToUpdate.price);
//       setTotalAmount(updatedTotalAmount);
//       console.log(updatedTotalAmount);
//       console.log(totalAmount);
//     } else {
//       const itemsInBackEnd = await fetch(
//         `https://crudcrud.com/api/728fc4b5bfb0409e84f750b9f6d29a7c/${authCtx.dataEndPoint}`
//       );
//       const itemsInBackEndData = await itemsInBackEnd.json();
//       const itemInBackEndIndex = itemsInBackEndData.findIndex(
//         (FetechedItem) => id === FetechedItem.id
//       );
//       const itemId = itemsInBackEndData[itemInBackEndIndex]._id;
//       await fetch(
//         `https://crudcrud.com/api/728fc4b5bfb0409e84f750b9f6d29a7c/${authCtx.dataEndPoint}/${itemId}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const updatedItems = items.filter((item) => item.id !== id);
//       setItems(updatedItems);
//       console.log(updatedItems);
//       const updatedTotalAmount =
//         parseInt(totalAmount) - parseInt(itemToUpdate.price);
//       setTotalAmount(updatedTotalAmount);
//       console.log(updatedTotalAmount);
//     }
//   };

//   const contextValue = {
//     items: items,
//     totalAmount: totalAmount,
//     addToCart: addToCartHandler,
//     removeFromCart: removeHandler,
//   };

//   return (
//     <CartCtx.Provider value={contextValue}>{props.children}</CartCtx.Provider>
//   );
// };

// export default CartCtx;
