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
  const [mostVotesSelected, setMaxVotes] = useState(0);
  let votesString = `This anecdote has ${votes[selected]} votes.`;
  let maxVotesString = `Currently in the lead with ${votes[mostVotesSelected]} votes.`;


  const randomSelection = () => {
    let newChoice = Math.floor(Math.random() * (anecdotes.length - 1));
    // Make sure same anecdote isn't selected
    while (newChoice === selected) {
      newChoice = Math.floor(Math.random() * (anecdotes.length - 1));
    }
    return setSelected(newChoice);
  }

  const voteForDisplayed = () => {
    // console.log(selected);
    // console.log(votes[selected]);
    const tmpVotes = [...votes];
    tmpVotes[selected] += 1;
    console.log(tmpVotes);
    setVotes(tmpVotes);
    getMostVotes(tmpVotes);
    return 1;
  }

  const getMostVotes = (newVotes) => {
    console.log(newVotes);
    let tmpVotes = [...newVotes];
    let mostVotes = {
      index: 0,
      votes: 0,
    };
    for (let i = 0; i < tmpVotes.length; i++) {
      console.log(tmpVotes[i]);
      if (tmpVotes[i] > mostVotes.votes) {
        mostVotes.index = i;
        mostVotes.votes = tmpVotes[i];
      }
    }
    console.log(mostVotes);
    return setMaxVotes(mostVotes.index);
  }

  return (
    <div>
      <DisplayHeader text={"Anecdote of the day..."} />
      <DisplayContent text={anecdotes[selected]} />
      <DisplayContent text={votesString} />
      <div>
        <Button handleClick={voteForDisplayed} label="Vote" />
        <Button handleClick={randomSelection} label="Next Anecdote" />
      </div>
      <DisplayHeader text={"Anecdote with the most votes..."} />
      <DisplayContent text={anecdotes[mostVotesSelected]} />
      <DisplayContent text={maxVotesString} />
    </div>
  )
}

const DisplayHeader = ({ text }) => {
  return (
    <div>
      <h1>{ text }</h1>
    </div>
  )
}

const DisplayContent = ({ text }) => {
  return (
    <div>
      <p>{ text }</p>
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
