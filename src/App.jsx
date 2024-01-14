import React, { useState, useEffect } from 'react'
import './App.css'
import NewsFiltered from './components/NewsFiltered/NewsFiltered'
import NewsList from './components/NewsList/NewsList'

function App() {
  const [ news,setNews ] = useState("")
  const [ newNews,setNewNews ] = useState("space x")
  const [ loading,setLoading ] = useState(true)

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${newNews}&apiKey=${import.meta.env.VITE_API_KEY}`)
    .then(data => data.json())
    .then(newsApi => {
      setNews(newsApi)
      setLoading(false)
    })

    return
},[newNews])
 
  return (
     <div className='container'>
      <h1>Busca la noticia que quieras!</h1>
        <NewsFiltered setNewNews={setNewNews} newNews={newNews} setLoading={setLoading}/>
        {loading 
         ? <p className='cargando'>Cargando...</p>
         : <NewsList news={news}  />
        }
     </div>
  )
}

export default App
