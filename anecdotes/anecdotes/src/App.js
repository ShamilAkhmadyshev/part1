import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  // const points = Array(anecdotes.length).fill(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))


  // const copy = points.concat();

  const [selected, setSelected] = useState(0)
  const randomAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const increaseVotes = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  console.log(points)
  console.log(selected)
  const largest = Math.max(...points)
  console.log(largest)
  const largestIndex = points.indexOf(largest)
  const BestAnecdote = () => {
    if (largest <= 0) {
      return <h3>No best anecdote yet</h3>
    } else {
      return (
        <>
          <h3>Anecdote with most votes</h3>
          <div>{anecdotes[largestIndex]}</div>
          <div>It has {largest} vote(s)</div>
        </>
      )
    }
  }
  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>Has {points[selected]} vote(s)</div>
      <button onClick={randomAnecdote}>Random anecdote</button>
      <button onClick={increaseVotes}>Vote</button>
      <BestAnecdote />
      {/* <h3>Anecdote with most votes</h3>
      <div>{anecdotes[largestIndex]}</div>
      <div>It has {largest} vote(s)</div> */}
    </>
  );
}

export default App;
