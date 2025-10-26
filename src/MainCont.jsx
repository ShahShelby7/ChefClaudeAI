import { useEffect, useRef, useState } from "react"
import DisplayList from "./displayList";
import Recipe from "./recipe";
import {getRecipeFromMistral}  from "../ai.js";

export default function MainCont(){
    let [ingredient,setIngredient]=useState("");
    let [list,setList]=useState(["oregano","chicken","all spices","cheese"]);
    let [recipeProcedure,setRecipeProcedure]=useState("");
    function handleChange(event){
        setIngredient(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        if (ingredient.trim() !== "") { 
            setList([...list, ingredient]);
        }
        setIngredient("");
    }
    async function GetRecipe(){
        const recipeMarkdown=await getRecipeFromMistral(list);
        console.log(recipeMarkdown);//this is in string format
        setRecipeProcedure(recipeMarkdown);
    }
    
    //lets use REFS in react to access the DOM elements(react or html) 
    let recipeRef=useRef(null);
    //here Dom access is also a side effect so useEffect(we dont need to access & scrolldown for every re-render)
    useEffect(()=>{
        if(recipeProcedure!== null && recipeRef.current!== null){
            recipeRef.current.scrollIntoView({behavior:"smooth"});
        }
    },[recipeProcedure]);
    return(
        <main className="maincont">
            <form className="add-form">
                <input type="text" placeholder="eg. Avocado" aria-label="add ingredient" onChange={handleChange} value={ingredient}/>
                <button onClick={handleSubmit}>+Add ingredient</button>
            </form>


            <DisplayList items={list}/>

            {list.length>3 && <section className="footer">
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={GetRecipe}>Get a recipe</button>
                </div>
            </section>}

            {recipeProcedure? <Recipe recipeProcedure={recipeProcedure} recipeRef={recipeRef}/>   :null}
        </main>
    )
}