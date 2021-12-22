import React from 'react'

    
  const Filter = ({filterChangeHandler, value}) => {
    return (
    <div>
      filter shown with: 
      <input 
        value={value}
        onChange={filterChangeHandler}
      />
    </div>
    )
  }

export default Filter
