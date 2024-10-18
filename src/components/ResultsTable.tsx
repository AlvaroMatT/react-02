import React from "react";
import { Product } from "../App";
interface ResultsTableProps {
    product:Product[]
}
type ProductKey = keyof Product; // Es un tipo
const ResultsTable:React.FC<ResultsTableProps> = ({product})=>{
    const headers:ProductKey[] = ['id', 'name', 'category', 'price', 'status']
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {headers.map((element, index)=>(
                            <th key={element} className="px-4 py-2 text-left border-b">{element}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>    
                    {product.map((element)=>(
                        <tr className='border-b' key={element.id}>
                            {headers.map((header, index)=>(
                                <td className='py-2 px-4' key={index}>{element[header].toString()}</td>
                            ))}
                        </tr>
                    ))}                    
                </tbody>
            </table>
        </div>
    )
}
export default ResultsTable