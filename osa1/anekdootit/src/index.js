import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
    const [mostVoted, setMostVoted] = useState(0)

    const handleSelected = () => {
        setSelected(getRandomInt(0, props.anecdotes.length - 1))
    }

    const handleVote = () => {
        const x = selected
        const newPoints = [...points]
        newPoints[x] += 1
        if (newPoints[x] > newPoints[mostVoted]) {
            setMostVoted(x)
        }
        setPoints(newPoints)
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            {props.anecdotes[selected]}
            <br />has {points[selected]} votes
            <br /><button onClick={handleVote}>vote</button>
            <button onClick={handleSelected}>next anecdote</button>
            <h2>Anecdote with most votes</h2>
            {props.anecdotes[mostVoted]}
            <br />has {points[mostVoted]} votes
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)