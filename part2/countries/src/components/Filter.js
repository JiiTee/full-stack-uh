import React from 'react'

    
  const Filter = ({filterChangeHandler, value}) => {
    return (
    <div>
      find countries: 
      <input 
        value={value}
        onChange={filterChangeHandler}
      />
    </div>
    )
  }

export default Filter
