import React, { PropTypes } from "react"

const Puzzle = ({ operation, onChangeOperation }) => {
  const isCorrect = operation === 'divide'
  const tick = '\u2714'
  const cross = '\u2718'
  return (
    <div>
      <p>
        10
        {' '}
        <select size={1} value={operation} onChange={e => onChangeOperation(e.target.value)}>
          <option value="">--- Choose operation ---</option>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">÷</option>
        </select>
        {' '}
        2 = 5
        {' '}
        {isCorrect && <span style={{color: 'green' }}>{tick}</span>}
        {operation && !isCorrect && <span style={{color: 'red' }}>{cross}</span>}
      </p>
    </div>
  )
}

Puzzle.propTypes = {
  operation: PropTypes.string,
  onChangeOperation: PropTypes.func,
}

export default Puzzle
