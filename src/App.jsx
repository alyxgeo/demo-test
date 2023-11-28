import React from 'react'

const App = () => {


  const family = [
    {
      id: 1,
      name: 'peter',
      spouce: 'mary',
      children: "john",
    },
    {
      id: 2,
      name: 'mary',
      spouce: 1,
      children: "john",
    },
    {
      id: 3,
      name: 'john',
      spouce: [4, 2],
      children: 'jeena',
    },
    {
      id: 4,
      name: 'rose',
      spouce: [3],
      children: "jeena",
    }
  ]

  family[2]?.spouce.map((id) => (
    //console.log(id)
    console.log(
      family.find((fam) => fam.id === id)
    )
  ))






  
  return (
    <div className='bg-red-200'>
      hello master
    </div>
  )
}

export default App
