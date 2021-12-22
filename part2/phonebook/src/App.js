import React, { useState, useEffect} from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const messageDuration = 3000;
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)   
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)   
  }

  const addPerson = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target.value)
    
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        //TODO should refactor to use only one find
        const oldPerson = persons.find(person =>   person.name === newName)
        const changedPerson = { ...oldPerson, number: newNumber }
        personService
        .update(oldPerson.id, changedPerson)
          .then(returnedPerson => {        
          setPersons(persons.map(person => person.id !== oldPerson.id ? person : returnedPerson))
          //TODO should refactor to get rid of double input field cealring
          setNewName('')
          setNewNumber('')
          setNotification(
            { message: `The phone number of '${oldPerson.name}' was changed to '${changedPerson.number}.`,
              style: 'success'
            }
          )
          setTimeout(() => {
            setNotification(null)
          }, messageDuration)
        })
        .catch(error => {
          personService.getAll()
          .then (retunedPersons => {
            setPersons(retunedPersons) 
          })
  
          setNotification(
            { message: `Information of '${oldPerson.name}' was already removed from server`,
              style: 'error'
            }
          )
          setTimeout(() => {
            setNotification(null)
          }, messageDuration)
        })
      }
    } else { //normal add
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
      .create(personObject)
        .then(returnedPerson => {        
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotification(
          { message: `Added '${returnedPerson.name}' with number '${returnedPerson.number}.`,
            style: 'success'
          }
        )
        setTimeout(() => {
          setNotification(null)
        }, messageDuration)
      })  
    }
  }
  
  const deletePersonHandler = id  => (event) => {
    event.preventDefault()
    console.log('delete button clicked', event.target.value, id)
    const person = persons.find(person =>  person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .delete(id).then( () => {
        setPersons(persons.filter(person => person.id !== id))

        setNotification(
          { message: `Deleted ${person.name}'.`,
            style: 'success'
          }
        )
        setTimeout(() => {
          setNotification(null)
        }, messageDuration)
      })
      .catch(error => {
        setNotification(
          { message: `the person with id '${person.name}' was already deleted from server`,
            style: 'error'
          }
        )
        setTimeout(() => {
          setNotification(null)
        }, messageDuration)
      })
    }
    
  }

  const personsToShow = nameFilter === '' ?
    persons
    : persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  useEffect(() => {
    console.log('effect')
    personService.getAll()
    .then (retunedPersons => {
      setPersons(retunedPersons) 
    })
  }, [])
        
  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />

      <Filter filterChangeHandler={handleNameFilterChange} value={nameFilter}/>

      <h3>Add a new</h3>
      <PersonForm 
        handleNameChange={handleNameChange} 
        nameValue={newName}
        handleNumberChange={handleNumberChange}
        numberValue={newNumber}
        submitHandler={addPerson}
      />
      
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deleteHandler={deletePersonHandler}/>
    
  </div>
    
  )

}

export default App
