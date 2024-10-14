import Search from './components/Search'
import './App.css'
import ResultsTable from './components/ResultsTable'

function App() {


  return (
    <div className='flex flex-col gap-10 items-center'>
      <span className='pt-5'> Products Table  App</span>
      <Search></Search>
      <ResultsTable></ResultsTable>

    </div>
  )
}

export default App
