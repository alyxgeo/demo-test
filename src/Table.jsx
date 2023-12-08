
const Table = ({ rows, deleteRow }) => {


    return (

        <div className="mt-7" >

            <div className="grid grid-cols-12 " >
                <p className="col-span-6 border-2 p-3">Director</p>
                <p className=" col-span-6 border-2 p-3">Movie</p>
            </div>


            <div className="" >
                {rows.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-12">

                        <p className="col-span-6 border-2 p-3">{row.name}</p>

                        <div className="border-2 col-span-6 flex gap-7 p-3 ">
                            <p>{row.director}</p>
                            <button className="bg-red-200 rounded p-1"
                                onClick={() => deleteRow(idx)}
                            >remove</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Table