import React, { useState } from 'react'

const Numbers = ({ persons, newFilter }) => {

  return (
    <>
      {persons
        .filter(function (person) { return person.name.toUpperCase().includes(newFilter.toUpperCase()) })
        .map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </>
  )
}

const Form = (props) => {

  return (
    <form onSubmit={props.addName}>
      <div>name: <input value={props.newName} onChange={props.handleNameChange} /></div>
      <div>number: <input value={props.newNumber} onChange={props.handleNumberChange} /></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

const Filter = (props) => {
  return (
    <p>filter shown with <input value={props.newFilter} onChange={props.handleFilterChange}></input></p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (newName === '' || newNumber === '') {
      alert('input name and number')
    } else {

      const nameObject = {
        name: newName,
        number: newNumber
      }

      var found = false;
      for (var i = 0; i < persons.length; i++) {
        if (persons[i].name.toUpperCase() === newName.toUpperCase()) {
          found = true;
          alert(`${newName} is already added to phonebook`)
          break;
        }
      }

      if (found === false) {
        setPersons(persons.concat(nameObject))
      }

      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} newFilter={newFilter} />
    </div>
  )

}

export default App