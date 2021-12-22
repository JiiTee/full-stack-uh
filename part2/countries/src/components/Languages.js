import React from 'react'
import Language from './Language'

  const Languages = ({languages}) => {
    if (languages === null)  {
      return (
        <div><p>Languages missing</p></div>
     )
    }

      return (
        <div>
          <ul>
            {Object.values(languages).map(language => 
              <Language key={language} language = {language} />
            )}
          </ul>
        </div>
      )
    }


export default Languages
