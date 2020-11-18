import React from 'react'
import Person from './Person'

const Phonebook = ({ peopleToShow, onClick }) =>{
    return(
        <div>
            <ul>
                {peopleToShow.map(person => 
                    <div>
                        <Person key={person.name} name={person.name} number={person.number} id={person.id}/>
                        <button value={person.id} onClick={onClick}>delete</button>
                    </div>
                )}
            </ul>
        </div>
        
    )
}

export default Phonebook