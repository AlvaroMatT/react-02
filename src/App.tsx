import Search from './components/Search'
import './App.css'
import ResultsTable from './components/ResultsTable'
import data from './products.json';
import { useEffect, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  status: boolean;
}
function App() {

  const [filter, setFilter]= useState({})
  useEffect(()=>{
    console.log(filter)
  }, [filter])
  return (
    <div className='flex flex-col gap-10 items-center'>
      <span className='pt-5'> Products Table  App</span>
      <Search></Search>
      <ResultsTable product={data}></ResultsTable>

    </div>
  )
}

export default App
