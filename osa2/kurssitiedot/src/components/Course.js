import React from 'react'

const Header = (props) => {

    return (
        <h1>{props.course.name}</h1>
    )

}

const Content = (props) => {

    return (
        <>
            {props.course.parts.map(part => <Part key={part.id} part={part} />)}
        </>
    )
}

const Part = (props) => {

    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = (props) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises
    return (
        <p><b>total of {props.course.parts.reduce(reducer, 0)} exercises</b></p>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}

export default Course