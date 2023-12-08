
const Table = ({ rows, deleteRow }) => {


    return (
        <div>
            <div className="flex gap-5">
                <p>Director</p>
                <p>Movie</p>
                <p></p>
            </div>

            <div>

                {rows.map((row, idx) => (
                    <div key={idx} className="flex gap-5">
                        <p>{row.name}</p>
                        <p>{row.director}</p>
                        <button
                            onClick={() => deleteRow(idx)}
                        >remove</button>
                    </div>
                ))}



            </div>
        </div>
    )
}

export default Table