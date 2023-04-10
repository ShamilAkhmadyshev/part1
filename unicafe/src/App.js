import { useState } from 'react'




const Header = () => (<h1>Give feedback</h1>);
const Button = (props) => (<button onClick={props.func}>{props.text}</button>)
const StatisticLine = (props) => (<tr><td>{props.text}</td><td>{props.value}</td></tr>)
// const Statistics = (props) => {
//   return (
//     <>
//       <Result name="Good" result={props.good} />
//       <Result name="Neutral" result={props.neutral} />
//       <Result name="Bad" result={props.bad} />
//       <Result name="All" result={props.all} />
//       <Result name="Average" result={props.average} />
//       <Result name="Positive" result={props.positive} />
//     </>)
// }
const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (<h2>No feedback given yet</h2>)
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good" value={props.good} />
            <StatisticLine text="Neutral" value={props.neutral} />
            <StatisticLine text="Bad" value={props.bad} />
            <StatisticLine text="All" value={props.all} />
            <StatisticLine text="Average" value={props.average} />
            <StatisticLine text="Positive" value={props.positive} />
          </tbody>
        </table>
      </>)
  }
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleClickGood = () => {
    setGood(good + 1);
    setAllClicks(allClicks.concat("1"))
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAllClicks(allClicks.concat("2"))
  }
  const handleClickBad = () => {
    setBad(bad + 1);
    setAllClicks(allClicks.concat("3"))
  }
  const positivity = () => {
    const positivity = (good / (bad + good + neutral)) * 100
    if (positivity >= 0) {
      return positivity.toFixed(2) + "%"
    } else {
      return ": Not enough information"
    }
  }
  const average = () => {
    const average = (good - bad) / (good + neutral + bad)
    if (average >= 0) {
      return average.toFixed(2)
    } else if (average < 0) {
      return average.toFixed(2)
    } else {
      return ": Not enough information"
    }
  }
  return (
    <>
      <Header />
      <Button func={handleClickGood} text="Good" />
      <Button func={handleClickNeutral} text="Neutral" />
      <Button func={handleClickBad} text="Bad" />
      {/* <Statistics good={good} bad={bad} neutral={neutral} all={good + neutral + bad} average={average()} positive={positivity()} /> */}
      <Statistics allClicks={allClicks} good={good} bad={bad} neutral={neutral} all={good + neutral + bad} average={average()} positive={positivity()} />
    </>
  );
}

export default App;
