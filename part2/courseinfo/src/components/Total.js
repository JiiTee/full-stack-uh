import React from 'react'

const Total  = ({parts}) => {
  return (
    <p>
      <b>
        Total of exercises {parts.reduce( (sum, part) => sum + part.exercises, 0)
      }
      </b>
    </p>
  )
}


export default Total