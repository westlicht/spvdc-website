import React, { PropTypes } from "react"

import _ from "lodash"

import styles from "./index.css"

const Spider = ({ axes, data }) => {
  const width = 500
  const height = 500
  const radius = width * 0.4
  const cx = width / 2
  const cy = height / 2

  const numAxes = axes.length
  const numTicks = 5

  const spiderPoint = (index, distance) => {
    return [
       Math.sin(Math.PI * 2 * index / numAxes) * radius * distance,
      -Math.cos(Math.PI * 2 * index / numAxes) * radius * distance,
    ]
  }

  return (
    <svg viewBox={[0, 0, width, height]}>
      {/* <circle cx={50} cy={50} r={10} fill="red" /> */}
      {
        // draw ticks
        _.range(numAxes).map(i => {
          return _.range(numTicks).map(j => {
            const ofs1 = spiderPoint(i, (j + 1) / numTicks)
            const ofs2 = spiderPoint((i + 1) % numAxes, (j + 1) / numTicks)
            return (<line x1={cx+ofs1[0]} y1={cy+ofs1[1]} x2={cx+ofs2[0]} y2={cy+ofs2[1]} className={ styles.ticks } />)
          })
        })
      }
      {
        // draw axes
        _.range(numAxes).map(i => {
          const ofs = spiderPoint(i, 1)
          return (<line x1={cx} y1={cy} x2={cx+ofs[0]} y2={cy+ofs[1]} className={ styles.axis } />)
        })
      }
      {
        // draw axes
        axes.map((title, i) => {
          const ofs = spiderPoint(i, 1.1)
          return (<text x={cx+ofs[0]} y={cy+ofs[1]} className={ styles.title }>{ title }</text>)
        })
      }
      {
        // draw data
        data.map(item => (
          [
            // draw lines
            ..._.range(numAxes).map(i => {
              const ofs1 = spiderPoint(i, item.values[i])
              const ofs2 = spiderPoint((i + 1) % numAxes, item.values[(i + 1) % numAxes])
              return (<line x1={cx+ofs1[0]} y1={cy+ofs1[1]} x2={cx+ofs2[0]} y2={cy+ofs2[1]} className={ styles.line } stroke={ item.color } />)
            }),
            // draw points
            ..._.range(numAxes).map(i => {
              const ofs = spiderPoint(i, item.values[i])
              return (<line x1={cx+ofs[0]} y1={cy+ofs[1]} x2={cx+ofs[0]} y2={cy+ofs[1]} className={ styles.point } stroke={ item.color } />)
            }),
          ]
        ))
      }
    </svg>
  )
}

Spider.propTypes = {
  className: PropTypes.string,
  axes: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  }))
}

export default Spider
