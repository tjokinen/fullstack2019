import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'
//const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
  axios.delete(baseUrl+'/'+id)
}

const modifyPerson = (id, modifiedObject) => {
  return axios.put(baseUrl+'/'+id, modifiedObject)
}

export default { 
  getAll, 
  create,
  deletePerson,
  modifyPerson
}