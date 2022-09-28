import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';

import "./Main.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {

    const [meals, setMeal] = useState([]);

    const [cart, setCart] = useState([]);
    if (cart.length >= 5) {
      alert('ar neya jbe na')
    }

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=f")
			.then((res) => res.json())
			// .then((data) => console.log(data.meals))
			.then((data) => setMeal(data.meals));
    },[])



      const handleDelete = (id) => {
          console.log(id)
          
          const deleteId = cart.filter(ct => ct.idMeal !== id)
          setCart(deleteId);
           toast("Wow deleted from cart!");
      };
    return (
		<div className="all-meal">
			<div className="meal-container">
				{/* {
                    meals.map(meal => (<Foods meal={meal}
                    
                        key={meal.idMeal}
                    
                    ></Foods>))
                } */}
				{/* <h1>Right side</h1> */}
				<Foods
					meals={meals}
					cart={cart}
					setCart={setCart}
				></Foods>
			</div>

	<div className="meal-cart">
	<h1>Left side</h1>
	<h3>
     Selected items: {cart.length}
                    
	{cart.map((cartadd) => (
	<div className="add">
	<li>{cartadd.strArea}</li>
	<button onClick={() =>handleDelete(cartadd.idMeal)}
								className="delete-btn "
							>
								X
							</button>
						</div>
					))}
				</h3>
			</div>
		</div>
    );
};

export default Main;