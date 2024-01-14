import React from 'react'

const NewsCategory = ({category,setLoading,setNewNews}) => {
    return (
      <li className='li' onClick={() => {
        setNewNews(category)
        setLoading(true)
      }}>{category}</li>
    )
  }
  

export default NewsCategory