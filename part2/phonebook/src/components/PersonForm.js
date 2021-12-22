import React from 'react'

const PersonForm = ({handleNameChange, nameValue, handleNumberChange, numberValue, submitHandler}) => {

  return (
    <div>
      <form onSubmit={submitHandler}> 
        <div>
          name: 
          <input 
            value={nameValue}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={numberValue}
            onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
    </div>
  )

}

export default PersonForm
