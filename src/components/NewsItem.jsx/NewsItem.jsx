import React from 'react'
import "./newsitem.css"
const NewsItem = ({el}) => {
  return (
    <li className='li-item'>
        <h2>{el.title}</h2>
        <img src={el.urlToImage} alt={`Imagen de la noticia :${el.title}`} />
        <p>{el.description}</p>
        <a className='boton-ver-mas' target='_blank' href={el.url} rel="noopener noreferrer">Ver más...</a>
    </li>
  )
}

export default NewsItem