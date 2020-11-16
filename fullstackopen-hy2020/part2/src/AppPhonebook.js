import React, { useState} from 'react'
import FilterName from './components/FilterName'
import Phonebook from './components/Phonebook'


const AppPhonebook = () => {
    const [ persons, setPersons ] = useState([
        { 
            name: 'Ellie Moon',
            number: '222-222-2222'
        },
        {
            name:'Erica Star',
            number: '444-444-4444'
        },
        {
            name:'Luna Lovegood',
            number: '333-333-3333'
        },
        {
            name:'Leon Nova',
            number: '111-111-1111'
        }
    ])
    const [ newName, setNewName] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ newSearch, setNewSearch] = useState('')
    const [showAll, setShowAll] = useState(true)

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