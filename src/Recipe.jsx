import React from "react";
import ReactMarkdown from "react-markdown";
export default function Recipe({recipeProcedure,recipeRef}){
    return(
        <section className="suggested-recipe-container" aria-live="polite" ref={recipeRef}>
            <ReactMarkdown>{recipeProcedure}</ReactMarkdown>
        </section>
    )
}