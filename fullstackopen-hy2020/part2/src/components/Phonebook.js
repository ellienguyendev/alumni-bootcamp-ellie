import React from 'react'
import Person from './Person'

const Phonebook = ({ peopleToShow }) =>{
    return(
        <div>
            <ul>
                {peopleToShow.map(person => 
                    <Person key={person.name} name={person.name} number={person.number}/>
                )}
            </ul>
        </div>
        
    )
}

export default Phonebook