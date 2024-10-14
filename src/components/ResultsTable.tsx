function ResultsTable(){
    const headers = ['id', 'name', 'category', 'price', 'status']
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {headers.map((element)=>(
                            <th key={element} className="px-4 py-2 text-left border-b">{element}</th>
                        ))}
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default ResultsTable