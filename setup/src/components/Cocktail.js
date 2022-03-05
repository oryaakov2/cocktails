import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic }) => {
  return (
    <article key={idDrink} className="cocktail">
      <div className="image-container">
        <img src={strDrinkThumb} alt={`${strDrink}`} />
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link className="btn btn-primary btn-details" to={`/cocktail/${idDrink}`}>
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
