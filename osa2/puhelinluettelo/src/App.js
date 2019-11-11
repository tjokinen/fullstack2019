import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Form from './components/Form'
import Filter from './components/Filter'
import Error from './components/Error'
import Notification from './components/Notification'
import pbService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    pbService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null)
      setNotification(null)
    }, 5000)
  }, [errorMessage, notification])

  const addName = (event) => {
    event.preventDefault()

    if (newName === '' || newNumber === '') {
      alert('input name and number')
    } else {

      const nameObject = {
        name: newName,
        number: newNumber
      }
      let id
      let found = false
      for (let i = 0; i < persons.length; i++) {
        if (persons[i].name.toUpperCase() === newName.toUpperCase()) {
          found = true
          id = persons[i].id
          break;
        }
      }
      if (found === true) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          pbService
            .modifyPerson(id, nameObject)
            .then(response => {
              setPersons(persons.map(person => person.id !== id ? person : response.data))
              setNotification(`Information of '${newName}' was modified`)
            })
            .catch(error => {
              setErrorMessage(
                `Information of '${newName}' has already been removed from server`
              )
              setPersons(persons.filter(person => person.id !== id))
            })
        }
      }

      if (found === false) {
        pbService
          .create(nameObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNotification(`Added '${newName}'`)
          })
          .catch(error => {
            setErrorMessage(`Person validation failed: ${JSON.stringify(error.response.data)}`)
          })
      }

      setNewName('')
      setNewNumber('')
    }
  }

  const deleteName = (id, name) => {
    if (window.confirm("Delete " + name + " ?")) {
      pbService.deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
      setNotification(`Person '${name}' was deleted`)
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
      <Error message={errorMessage} />
      <Notification message={notification} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <Form addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Numbers persons={persons} newFilter={newFilter} deleteName={deleteName} />
    </div>
  )

}

export default App