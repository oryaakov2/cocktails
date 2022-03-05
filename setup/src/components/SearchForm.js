import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" ref={searchRef} id="name" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
