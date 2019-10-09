import React from 'react'

const Numbers = ({ persons, newFilter }) => {

    return (
        <>
            {persons
                .filter(function (person) { return person.name.toUpperCase().includes(newFilter.toUpperCase()) })
                .map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </>
    )
}

export default Numbers