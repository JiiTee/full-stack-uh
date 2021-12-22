import React from 'react'

  const Person = ({person, deleteHandler}) => {
    return (
      <li>
          {person.name} {person.number}
            <button onClick={deleteHandler(person.id)}>delete</button>
      </li>
    )
  }

export default Person
