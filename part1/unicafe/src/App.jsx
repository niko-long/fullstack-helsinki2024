import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
 )

const Statistics = (props) => {
  if (props.allreviews.length === 0){
    return (
      <div>
        No Feedback given
      </div>
    );
  }
  const average = (props.good - props.bad)/props.allreviews.length;
  const positivePercentage = props.good / props.allreviews.length * 100
  return (
    <div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {props.allreviews.length}</div>
      <div>average {average.toFixed(2)}</div>
      <div>positive {positivePercentage.toFixed(1)}%</div>
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allreviews, setAll] = useState([])

  const goodReviewClick = () => {
    setGood(good + 1)
    setAll(allreviews.concat('G'))
  }
  const neutralReviewClick = () => {
    setNeutral(neutral + 1)
    setAll(allreviews.concat('N'))
  }
  const badReviewClick = () => {
    setBad(bad + 1)
    setAll(allreviews.concat('B'))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodReviewClick} text ='good'/>
      <Button handleClick={neutralReviewClick} text ='neutral'/>
      <Button handleClick={badReviewClick} text ='bad'/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} allreviews = {allreviews} />
    </div>
  )
}

export default App