import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

    if (props.all === 0) {
        return (
            <>No feedback given</>
        )
    } else {
        return (
            <>
                <table>
                    <tbody>
                        <Statistic text="good" value={props.good} />
                        <Statistic text="neutral" value={props.neutral} />
                        <Statistic text="bad" value={props.bad} />
                        <Statistic text="all" value={props.all} />
                        <Statistic text="average" value={(props.good - props.bad) / props.all} />
                        <Statistic text="positive" value={props.good / props.all * 100 + " %"} />
                    </tbody>
                </table>
            </>
        )
    }

}

const Statistic = (props) => {
    return (
        <><tr><td>{props.text}</td><td>{props.value}</td></tr></>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)


    const handleGood = () => {
        setGood(good + 1)
        setAll(all + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
        setAll(all + 1)
    }
    return (
        <div>
            <h2>give feedback</h2>
            <Button onClick={handleGood} text="good" />
            <Button onClick={handleNeutral} text="neutral" />
            <Button onClick={handleBad} text="bad" />
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)