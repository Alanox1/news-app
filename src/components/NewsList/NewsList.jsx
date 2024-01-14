import React from 'react'
import "./newslist.css"
import NewsItem from '../NewsItem.jsx/NewsItem';

const NewsList = ({news}) => {
 
  return (
    <ul>
     {news.articles.length === 0 
     ? <p className='parrafo_vacio'>No hay noticias, lo siento 😭</p> 
     : news.articles.map((el,index) => (
        <NewsItem el={el} key={index}/>
     ) )
    } 
    </ul>
  )
}

export default NewsList