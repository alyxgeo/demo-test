import { useState } from "react"
import Form from "./Form"
import Table from "./Table"

const App = () => {

  const [rows, setRows] = useState(
    [
      { name: "leo", director: 'vijay' },
      { name: "kaithi", director: 'vikram' },
    ]
  )

  const handleDelete = (targetIdx) => {
    setRows(rows.filter((_, idx) => (idx !== targetIdx)))
  }


  const handleSubmit = (newRow) => {
    setRows([...rows, newRow])
  }

  return (
    <div className="px-7 py-6">
      <Form onSubmit={handleSubmit} />
      <Table rows={rows} deleteRow={handleDelete} />
    </div>
  )
}

export default App