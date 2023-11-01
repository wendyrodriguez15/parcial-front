import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  
  const [usuario, setUsuario] = useState({
    nombre: '',
    animal: ''
  })
  const [mostar, setMostar] = useState(false)
  const [error, setError] = useState(false)

  const handlerSumbit = (event) => {
    event.preventDefault()
    if (usuario.nombre.length >= 3 && usuario.animal.length > 6 )
     {
      setMostar(true)
      setError(false)
      
    } else {
      setError(true)
      setMostar(false)
    }
  }

  const styles = { 
    background: 'white', 
    padding: '10px', 
    textAlign: 'left', 
    border: 'solid 1px gray', 
    borderRadius: '10px',
    width: '50%',
    color: 'black'
  }

  return (
    <div className="App">
      <h1>Cual es tu animal preferido:</h1>
      {!mostar &&
      <form onSubmit={handlerSumbit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#E8E6E8', gap: '5px', padding: '20px', color: 'black' }}>
        <label>Como te llamas?</label>
        <input type="text" value={usuario.nombre} onChange={(event) => setUsuario({ ...usuario, nombre: event.target.value.trim() })} style={styles}/>
        <label>Cual es tu animal favorito?</label>
        <input type="text" value={usuario.animal} onChange={(event) => setUsuario({ ...usuario, animal: event.target.value })} style={styles} />
        <button>enviar</button>
      </form>}
      {mostar && <Card nombre={usuario.nombre} animal={usuario.animal} />}
      {error && <h5 style={{ color: '#FF5611' }}>"Por favor chequea que la información sea correcta".</h5>}
    </div>
  )
}
export default App
