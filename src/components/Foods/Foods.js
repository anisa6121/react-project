import React from 'react';
import SingleFood from '../Single/SingleFood';
import "./Foods.css";
const Foods = ({meals, cart, setCart}) => {
    // console.log(props.meal)
    // const { meal } = props
    // console.log(meals)
    return (
		<div>
			<div className="cart-container">
				{meals.map((meal) => (
                    <SingleFood key={meal.idMeal}
                    
                   mealse={meal} 
                   
                        cart={cart}
                        setCart={setCart}
                    
                    >
                        
                    </SingleFood>
				))}
			</div>
			{/* <h1>Right side</h1> */}
			{/* <SingleFood></SingleFood> */}
		</div>
    );
};

export default Foods;