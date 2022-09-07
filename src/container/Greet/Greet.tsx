import React from 'react'
import PropTypes from 'prop-types'

type GreetProps = {
      name?: string
}
const Greet = (props:GreetProps) => {
  return (
    <div>Hello {props.name} </div>
  )
}

Greet.propTypes = {}

export default Greet