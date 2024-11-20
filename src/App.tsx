import Search from './components/Search'
import './App.css'
import ResultsTable from './components/ResultsTable'
import data from './products.json';
import {  useMemo, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  status: boolean;
}
export type Filters = {
  search: string;
  status: Status;
  orderBy: OrderTypes;
};

type Status = 'All' | 'available' | 'not available';
type OrderTypes = 'Price' | 'Name'
function App() {
  const [products, setProducts] = useState<Product[]>(data);
  const [filters, setFilters]= useState<Filters>({
    search: "",
    status: 'All',
    orderBy: 'Price'
  })
  
  // const filteredProducts = useMemo(()=>{
  //   return products
  //   .filter(product => {
      
  //   })
  // })

  return (
    <div className='flex flex-col gap-10 items-center'>
      <span className='pt-5'> Products Table  App</span>
      <Search 
        filters={filters}
        onFiltersChange={setFilters}
      ></Search>
      <ResultsTable product={data}></ResultsTable>

    </div>
  )
}

export default App
