import React from 'react'
import { Link } from 'react-router-dom'

const HomePageTwoHolder = ({ icon, title, description }) => {
  return (
    <div>
      <Link to='/products'>
        <article className='pageTwo-cart'>
          <button className='pageTwo-icon'>{icon}</button>
          <h3 className='title'>{title}</h3>
          <p className='paragraph'>{description}</p>
        </article>
      </Link>
    </div>
  )
}

export default HomePageTwoHolder
