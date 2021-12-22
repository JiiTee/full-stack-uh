import React from 'react'
import Person from './Person'

  const Persons = ({persons, deleteHandler}) => {
    if (persons.length === 0)  {
      return (
        <div></div>
     )
    }
      return (
        <div>
          <ul>
            {persons.map(person =>
              <Person key={person.id} person = {person} deleteHandler={deleteHandler}/>
            )}
          </ul>
        </div>
      )
    }


export default Persons
