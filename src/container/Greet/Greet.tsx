import React from 'react'
import PropTypes from 'prop-types'
import { GreetProps } from './greet.types'

const Greet = (props:GreetProps) => {
  return (
    <div>Hello {props.name} </div>
  )
}

Greet.propTypes = {}

export default Greet