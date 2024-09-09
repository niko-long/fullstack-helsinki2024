import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const getRandomNmuber = (min, max) => {
  return Math.floor(Math.random()*(max - min) + min)
}

const findIndexMax = (arr) => {
  const maxValue = Math.max(...arr)
  const indices = [];
  arr.forEach((value, index) => {
    if (value === maxValue) {
    indices.push(index);
    // console.log("indices",indices)
    }
  });
  return Math.min(...indices)
}


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

  const [selected, setSelected] = useState(0)
  const [totalvotes, setTotalVotes]  = useState(new Uint8Array(anecdotes.length))
  

  const randomvotesClick = () => {
    const newVotes = [...totalvotes]
    newVotes[selected] += 1
    setTotalVotes(newVotes)
    // console.log(totalvotes)
  }
  const randomAnecdoteClick = () => {
    setSelected(getRandomNmuber(0, 7))
  }
  const mostVotes = findIndexMax(totalvotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <div>{anecdotes[selected]} </div>
      <Button handleClick = {randomvotesClick} text = {'votes'}/>
      <Button handleClick = {randomAnecdoteClick} text = {'next anecdote'}/>
      <div>votes number: {totalvotes[selected]}</div>

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[mostVotes]} </div>
      <div>votes number: {totalvotes[mostVotes]}</div>

    </div>
  )
}

export default App