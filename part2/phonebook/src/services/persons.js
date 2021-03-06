import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/persons'
// const baseUrl = 'https://obscure-inlet-84281.herokuapp.com/api/persons'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteById = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }
  
  // get rid of  "Assign object to a variable before exporting as module default  import/no-anonymous-default-export"

  const exportedObject = {
    getAll, 
    create, 
    update,
    delete: deleteById 
};

export default exportedObject