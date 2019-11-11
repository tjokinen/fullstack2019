import React from 'react'

const Filter = (props) => {
    return (
      <p>find countries <input value={props.filter} onChange={props.handleFilterChange}></input></p>
    )
  }

export default Filter