import React from 'react'

const Filter = (props) => {
    return (
        <p>filter shown with <input value={props.newFilter} onChange={props.handleFilterChange}></input></p>
    )
}

export default Filter