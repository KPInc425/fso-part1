import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state 
  const [good, setGood] = useState(0);
  const [normal, setNormal] = useState(0);
  const [bad, setBad] = useState(0);

  const totalClicks = () => {
    return good + normal + bad;
  }

  const avgScore = () => {
    return ((good * 1) + (bad * -1)) / totalClicks();
  }

  const posFeedback = () => {
    return ((good / totalClicks()) * 100).toFixed(2);
  }

  return (
    <div>
      <DisplayHeading text={"Give Feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"Good"} />
      <Button handleClick={() => setNormal(normal + 1)} text={"Normal"} />
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"} />
      <DisplayHeading text={"Statistics"} />
      <DisplayCount text={"Good Count"} count={good} />
      <DisplayCount text={"Normal Count"} count={normal} />
      <DisplayCount text={"Bad Count"} count={bad} />
      <DisplayCount text={"Total Count"} count={totalClicks()} />
      <DisplayCount text={"Avg Score"} count={avgScore()} />
      <DisplayCount text={"Positive Feedback"} count={`${posFeedback()}%`} />
    </div>
  )
}

const DisplayHeading = ({ text }) => (<div><h1>{text}</h1></div>)

const DisplayCount = ({ text, count }) => (<div><p>{text}: {count}</p></div>)

const Button = ({ text, handleClick }) => (<div style={{display: "inline"}}><button onClick={handleClick}>{text}</button></div>)

export default App;
