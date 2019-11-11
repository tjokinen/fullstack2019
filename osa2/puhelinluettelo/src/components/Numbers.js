import React from 'react'
const Numbers = ({ persons, newFilter, deleteName }) => {

    return (
        <>
            {persons
                .filter(function (person) { return person.name.toUpperCase().includes(newFilter.toUpperCase()) })
                .map(person => <p key={person.name}>{person.name} {person.number} <button onClick={() => deleteName(person.id, person.name)}>delete</button></p>)}
        </>
    )
}

export default Numbers