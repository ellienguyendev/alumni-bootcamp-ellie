import React, { useState, useEffect } from 'react'
import FilterName from './components/FilterName'
import Phonebook from './components/Phonebook'
import axios from 'axios'


const AppPhonebook = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ newSearch, setNewSearch] = useState('')
    const [showAll, setShowAll] = useState(true)

    const hook = () => {
        axios
          .get('http://localhost:3001/persons')
          .then(response => {
            setPersons(response.data)
          })
      }
      
      useEffect(hook, [])

    const peopleToShow = showAll
    ? persons
    : persons.filter(person => {
        var fullName = person.name.toLowerCase().split(' ').join('')
        return fullName.includes(newSearch)
    })

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
        if(event.target.value){
            setShowAll(!setShowAll)
        } else {
            setShowAll(setShowAll)
        }
    }

    const addPerson = (event) => {
        event.preventDefault()  
        var duplicate = persons.find(person => person.name === newName)
        
        if(duplicate){
            alert(`${newName} is already in your phonebook`)
        } else {
            const nameObject= {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(nameObject))
        }
        
        setNewName('')
        setNewNumber('')
    }

    return(
        <div>
            <h2>Phonebook</h2>
            <FilterName value={newSearch} onChange={handleSearchChange}/>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                    <br />
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Phonebook peopleToShow={peopleToShow} />
            
        </div>
    )
}

export default AppPhonebook