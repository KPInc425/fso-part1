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
        value: good,
      },
      {
        name: "Normal Count",
        value: normal,
      },
      {
        name: "Bad Count",
        value: bad,
      },
      {
        name: "Total Count",
        value: totalClicks(),
      },
      {
        name: "Avg Score",
        value: avgScore() || 0,
      },
      {
        name: "Positive Feedback",
        value: `${posFeedback()}%`,
      },
    ]
  }



  return (
    <div>
      <DisplayHeading text={"Give Feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"Good"} />
      <Button handleClick={() => setNormal(normal + 1)} text={"Normal"} />
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"} />
      <Statistics stats={stats} total={totalClicks()} />

    </div>
  )
}

const DisplayHeading = ({ text }) => (<div><h1>{text}</h1></div>)

const StatisticLine = ({ text, value }) => (<div><p>{text}: {value}</p></div>)

const Button = ({ text, handleClick }) => (<div style={{display: "inline"}}><button onClick={handleClick}>{text}</button></div>)

const Statistics = (props) => {
  console.log(props);
  if (props.total > 0) {
    return (
      <div>
        <DisplayHeading text={props.stats.header} />
        <StatisticLine text={props.stats.counts[0].name} value={props.stats.counts[0].value} />
        <StatisticLine text={props.stats.counts[1].name} value={props.stats.counts[1].value} />
        <StatisticLine text={props.stats.counts[2].name} value={props.stats.counts[2].value} />
        <StatisticLine text={props.stats.counts[3].name} value={props.stats.counts[3].value} />
        <StatisticLine text={props.stats.counts[4].name} value={props.stats.counts[4].value} />
        <StatisticLine text={props.stats.counts[5].name} value={props.stats.counts[5].value} />
      </div>
    )
  } else {
    return (
      <div>
        <DisplayHeading text={props.stats.header} />
        <div>No Feedback Given...</div>
      </div>
    )
  }

}

export default App;
