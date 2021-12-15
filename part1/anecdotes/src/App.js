import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const nAnecdotes = anecdotes.length
  const getRandomAnecdote = () => Math.floor(Math.random() * nAnecdotes)

  const [votes, setVotes] = useState(new Array(nAnecdotes).fill(0))
  const [selected, setSelected] = useState( getRandomAnecdote())


  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const handleVoteClick = () => {
    const newVotes = { ... votes}
    newVotes[selected]++;
    setVotes(newVotes)
  }

  const FullAnecdote  = ({heading, anecdote, nVotes}) => {
  
    return (
    <div>
      <h1>{heading}</h1>
      <p>{anecdote}</p>
      <p>has {nVotes} votes</p>
      </div>
    )
  }
  
  
  const findMaxVoteAnecdote = () =>
  {
    let maxVotes = 0
    let maxIndex = 0
    for (let i = 0; i < nAnecdotes; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i]
        maxIndex = i
      }
     }
     return maxIndex
  }

  let maxIndex = findMaxVoteAnecdote()

  return (
    <div>
      <FullAnecdote heading="Anecdote of the day" anecdote={anecdotes[selected]} nVotes={votes[selected]} />

      {votes[maxIndex] > 0 && 
        <FullAnecdote heading="Anecdote with most votes" anecdote={anecdotes[maxIndex]} nVotes={votes[maxIndex]} />
      }

      <Button handleClick={() => handleVoteClick(selected) } text="vote" />
      <Button handleClick={() => setSelected(getRandomAnecdote()) } text="next anecdote" />
    </div>
  )
}

export default App