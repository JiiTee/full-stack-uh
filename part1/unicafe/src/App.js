import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine  = ({name, value}) => {
  
  return <tr><td>{name}</td><td>{value}</td></tr>

}

const Statistics = ({good, neutral, bad }) => {
  let all = good + neutral + bad
  let average = (good * 1 + bad * -1 ) / all

    if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table><tbody>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="all" value={all}/>
        <StatisticLine name="average" value={average}/>
        <StatisticLine name="positive" value={(good/all * 100).toString().concat(" ", "%")}/>
        </tbody></table>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good +1)} text="good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="neutral" />
      <Button handleClick={() => setBad(bad +1)} text="bad" />

      <Statistics good ={good} neutral={neutral} bad={bad} />
    </div>
    
  )
}

export default App