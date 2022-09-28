import React from 'react';

import "./SingleFood.css";

 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const SingleFood = ({ mealse, cart, setCart }) => {
    // console.log(mealse)

    // console.log(cart)
    const { strArea, strCategory, strMealThumb, strInstructions ,idMeal} = mealse;

    const handleAddToCart = () => {
        // console.log(mealse)pura mealse take pathay na die jeta lgbe setake distucture kre nilew hbe
        const mealInfo = 
        {
			strArea,
			strCategory,
			strMealThumb,
            strInstructions,
            idMeal
        };
    //    console.log(mealInfo)
        if (cart) {
            
   const isExist = cart.find((p) => p.idMeal === idMeal);
   //    console.log(isExist)
            
   if (isExist) {
		alert("already exist");
		return;
            }
   else {
       const newCart = [...cart,mealInfo];

  setCart(newCart);
 }

    // const newCart = [...cart, mealInfo]
// console.log(newCart)
            // setCart(newCart)
          
	}	

else {
     setCart([mealInfo])
     }  

   }         
        
       
        
         
  

    const handleAddToLocal = () => {
        const info = mealse;
        console.log(mealse)

        const previousStore = localStorage.getItem('Meals')
        const oldPreviousStore = JSON.parse(previousStore);

        if (oldPreviousStore) {
            
const isExist = oldPreviousStore.find(p => p.idMeal === idMeal)
//  console.log(isExist)

if (isExist) {
 alert('already selected')
    return; 
 }
else {
localStorage.setItem("Meals",JSON.stringify([...oldPreviousStore, info]));
 console.log("aceee");              
}
//             localStorage.setItem("Meals", JSON.stringify([...oldPreviousStore,info]));
// console.log('aceee')
        }

        else {
            console.log('naiii')

            localStorage.setItem('Meals', JSON.stringify([info]))
		}
    }


    return (
		<div className="card">
			<img className="meal-img" src={strMealThumb} alt="" />

			<h3>
				<span>Food Name:</span> {strCategory}
			</h3>
			<p className="description">
				{strInstructions
					? strInstructions?.slice(0, 150) + "..."
					: "no found"}
			</p>

			<button onClick={handleAddToCart}>
				Add To Cart
				<FontAwesomeIcon
					className="icon"
					icon={faShoppingCart}
				></FontAwesomeIcon>
			</button>

			<button onClick={handleAddToLocal}>Add To Local</button>
		</div>
    );
};

export default SingleFood;