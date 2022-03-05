import React, { useEffect, useState, useCallback } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()

  const [loading, setLoading] = useState(false)
  const [drink, setDrink] = useState(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${id}`)
      const data = await response.json()

      if (data) {
        const {
          strDrinkThumb,
          strCategory,
          strDrink,
          strGlass,
          strAlcoholic,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        } = data.drinks[0]

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        ]

        setDrink({
          strDrinkThumb,
          strCategory,
          strDrink,
          strGlass,
          strAlcoholic,
          strInstructions,
          ingredients
        })

      } else {
        setDrink(null)
      }

      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchData()
  }, [id, fetchData])

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!drink) {
    return (
      <h2 className="section-title">no cocktail to display</h2>
    )
  }

  return (
    <section className="section cocktail-section">
      <Link className="btn btn-primary" to="/">back home</Link>
      <h2 className="section-title">{drink.strDrink}</h2>
      <div className="drink">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {drink.strDrink}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {drink.strCategory}
          </p>
          <p>
            <span className="drink-data">info</span>
            {drink.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {drink.strGlass}
          </p>
          <p>
            <span className="drink-data">instructons:</span>
            {drink.strInstructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {drink.ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
