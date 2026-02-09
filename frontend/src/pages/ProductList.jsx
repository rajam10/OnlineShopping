import {  } from "react";

// const productsData = Array.from({ length: 50 }, (_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
//   category: i % 2 === 0 ? "fruit" : "vegetable",
// }));

export default function ProductList({addCount}) {


  return(
    <>
    <h>Counter App</h>
    <p id='txt'>{counter}</p>
    <button id='add_btn' onClick={addCount}>Increment</button>
    </>
  )
}
