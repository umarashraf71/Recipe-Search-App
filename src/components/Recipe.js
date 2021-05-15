import React from 'react';
import style from './Recipe.module.css';

const Recipe = (props) => {

    const {title, image, ingredients} = props;

    return(

        <div className={style.recipe} >
            <h1 className={style.title} >{title}</h1>
            <div className={style.image}>
                <img src={image} alt=""/>
            </div>
            {/* <p className={style.calories} >Calories : {calories}</p> */}
            
            <ul className={style.ingredients} >
                <h3>Ingredients</h3>
               
                {
                    ingredients.map((ingredient, index) => (

                        <li key={index} >{ingredient.text}</li>
                    ))
                
                }

            </ul>
        
        </div>

    );

}


export default Recipe;