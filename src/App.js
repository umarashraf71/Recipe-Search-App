import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

const App = () => {


  const APP_ID = "eb52d8d9";
  const APP_KEY = "58a6932d96a94035c574105d121c5106	";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');


  //using the react hooks
  // const [counter, setCounter] = useState(0);


  //it will run every time when some page refreshs or some event occurs
  //but id we give an empty array as a second argument to it then it will only run once
  //and if we pass some value or state into the empty array then it will run when ever that value or state is triggered 
  useEffect(() => {

    const getRecipes = async ()=>{

      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
  
      //setting all the recipes from api into the recipe state
      setRecipes(data.hits);
      console.log(data.hits);
    }

    getRecipes();
    
  },[query]);



  const updateSearch = (event) => {

    setSearch(event.target.value);
    //console.log(search);
  }


  const getSearch = e => {

    e.preventDefault();
    setQuery(search);
    setSearch('');

  }


  return (
    <div className="App">

<h1>RECIPE SEARCH APP</h1>

        <form className="search-form" onSubmit={getSearch}>


          <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Search Recipe ..." />
          <button type="submit" className="search-button" >Search</button>

        </form>
        {/* <h1 onClick={()=>setCounter(counter + 1)} >{counter}</h1> */}

    <div className="recipes" >
      {
        recipes.map((recipe, index) => (

          <Recipe key={index}
                  title={recipe.recipe.label} 
                  calories={recipe.recipe.calories} 
                  image={recipe.recipe.image} 
                  ingredients={recipe.recipe.ingredients}  
                  />
        ))
      }
    </div>
    </div>



  );

}

export default App;
