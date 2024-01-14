import React, {useState} from 'react'
import "./newsfiltered.css"
import NewsCategory from '../NewsCategory/NewsCategory'

const NewsFiltered = ({setNewNews,newNews,setLoading}) => {
  const [ value, setValue ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setNewNews(value)
    setValue("")
    setLoading(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Messi' />
      <button>Buscar</button>
      <ul className='category-container'>
        <NewsCategory category={"Deportes"} setLoading={setLoading} setNewNews={setNewNews}/>
        <NewsCategory category={"Tecnologia"} setLoading={setLoading} setNewNews={setNewNews}/>
        <NewsCategory category={"Negocios"} setLoading={setLoading} setNewNews={setNewNews}/>
        <NewsCategory category={"Salud"} setLoading={setLoading} setNewNews={setNewNews}/>
        <NewsCategory category={"Entretenimiento"} setLoading={setLoading} setNewNews={setNewNews}/>
      </ul>
    </form>
  )
}

export default NewsFiltered




