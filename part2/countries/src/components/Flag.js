import React from 'react'

  const Flag = ({flagURL}) => {
    if (flagURL === null)  {
      return (
        <div><p>Flag missing</p></div>
     )
    }

      return (
        <div>
          <img src={flagURL} alt={"flag"}  width="200"/> 
          </div>
      )
    }


export default Flag
