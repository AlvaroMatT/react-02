import { useState } from 'react'
import Search from './components/Search'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search></Search>
    </>
  )
}

export default App
