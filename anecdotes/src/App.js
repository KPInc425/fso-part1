import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  // console.log(votes);

  const randomSelection = () => {
    let newChoice = Math.floor(Math.random() * (anecdotes.length - 1));
    // Make sure same anecdote isn't selected
    while (newChoice === selected) {
      newChoice = Math.floor(Math.random() * (anecdotes.length - 1));
    }
    return setSelected(newChoice);
  }

  const voteForDisplayed = () => {
    console.log(selected);
    console.log(votes[selected]);
    const tmpVotes = [...votes];
    tmpVotes[selected] += 1;
    console.log(tmpVotes);
    return setVotes(tmpVotes);

  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {votes[selected]} votes.</p>
      <div>
        <Button handleClick={voteForDisplayed} label="Vote" />
        <Button handleClick={randomSelection} label="Next Anecdote" />
      </div>
    </div>
  )
}

const Button = ({ handleClick, label }) => {
  return (
    <div style={{display: "inline"}}>
      <button onClick={handleClick}>
        {label}
      </button>
    </div>
  )
}

export default App;
