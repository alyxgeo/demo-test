import { useRef, useState } from "react"


const Form = ({ onSubmit }) => {

    const refname = useRef('')
    const refDirector = useRef('')


    const [data, setData] = useState({
        name: "",
        director: "",
    })



    const valide = () => {
        if (data.name && data.director) {
            return true;
        } else {
            return false;
        }
    }


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: [e.target.value]
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        refDirector.current.value = '';
        refname.current.value = '';


        if (!valide()) return

        onSubmit(data)

    }



    return (
        <>
            <form >

                <div className="flex  gap-5">
                    <div className="flex flex-col">
                        <label>director</label>
                        <input ref={refDirector} name="director" value={data.director} className="border-2 " type="text"
                            onChange={handleChange} />
                    </div>

                    <div className="flex flex-col">
                        <label>movie name</label>
                        <input ref={refname} name="name" value={data.name} className="border-2 " type="text"
                            onChange={handleChange}
                        />
                    </div>

                    <button className="border-2 bg-blue-200 p-1 mt-4"
                        onClick={handleSubmit}>
                        add
                    </button>

                </div>


            </form>


        </>




    )
}

export default Form