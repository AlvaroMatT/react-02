import React from "react";
import { Filters } from "../App"

interface SearchProp {
    filters: Filters;
    onFiltersChange : (filter: Filters)=>void
}
const Search = ({filters, onFiltersChange}: SearchProp)=>{

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
        onFiltersChange({
            ...filters,
            search:e.target.value
        })
    }
    return(
            <div className="flex flex-row justify-around w-4/5 ">
                <input className="basis-1/3 border-solid border border-white-200 bg-custom-gray rounded-lg p-[5px]" placeholder="Search by name..."
                    onChange={handleNameChange}
                ></input>

                <select className="basis-1/4 p-[5px] bg-custom-gray border border-white-200 rounded-lg">
                    <option value="">All</option>
                    <option value="pc">PC</option>
                </select>
                <select className="basis-1/4 p-[5px] bg-custom-gray border border-white-200 rounded-lg">
                    <option value="">Price</option>
                    <option value="pc">Name</option>
                </select>
            </div>
    )
}
export default Search