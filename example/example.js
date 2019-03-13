import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import useScrollPosition from '../useScrollPosition'

const Wrapper = styled.div`
  height: 10000rem;
  h1 {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-size: 10rem;
    font-family: sans-serif;
    font-style: italic;
    color: hotpink;
    text-align: center;
  }
`

export default function Example() {
  const scrollPosition = useScrollPosition()
  return (
    <Wrapper>
      <h1>{scrollPosition}</h1>
    </Wrapper>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
