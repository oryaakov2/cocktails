import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>404 Page Not Found</h1>
        <Link className="btn btn-primary" to="/">Back To Home Page</Link>
      </div>
    </section>
  )
}

export default Error
