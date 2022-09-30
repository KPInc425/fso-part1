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
    return (good > 0) ? ((good / totalClicks()) * 100).toFixed(2): 0;
  }

  const stats = {
    header: "Statistics",
    counts: [
      {
        name: "Good Count",
        count: good,
      },
      {
        name: "Normal Count",
        count: normal,
      },
      {
        name: "Bad Count",
        count: bad,
      },
      {
        name: "Total Count",
        count: totalClicks(),
      },
      {
        name: "Avg Count",
        count: avgScore() || 0,
      },
      {
        name: "Positive Feedback",
        count: `${posFeedback()}%`,
      },
    ]
  }



  return (
    <div>
      <DisplayHeading text={"Give Feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"Good"} />
      <Button handleClick={() => setNormal(normal + 1)} text={"Normal"} />
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"} />
      <Statistics stats={stats} />

    </div>
  )
}

const DisplayHeading = ({ text }) => (<div><h1>{text}</h1></div>)

const DisplayCount = ({ text, count }) => (<div><p>{text}: {count}</p></div>)

const Button = ({ text, handleClick }) => (<div style={{display: "inline"}}><button onClick={handleClick}>{text}</button></div>)

const Statistics = (props) => {
  console.log(props);
  console.log(props.stats.counts[0].name);
  return (
    <div>
      <DisplayHeading text={props.stats.header} />
      <DisplayCount text={props.stats.counts[0].name} count={props.stats.counts[0].count} />
      <DisplayCount text={props.stats.counts[1].name} count={props.stats.counts[1].count} />
      <DisplayCount text={props.stats.counts[2].name} count={props.stats.counts[2].count} />
      <DisplayCount text={props.stats.counts[3].name} count={props.stats.counts[3].count} />
      <DisplayCount text={props.stats.counts[4].name} count={props.stats.counts[4].count} />
      <DisplayCount text={props.stats.counts[5].name} count={props.stats.counts[5].count} />
    </div>
  )
}

export default App;
