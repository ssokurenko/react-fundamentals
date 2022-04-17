// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div
    id="one"
    className="box box--small"
    style={{fontStyle: 'italic', backgroundColor: 'blue'}}
  >
    small lightblue box
  </div>
)

const mediumBox = (
  <div
    id="two"
    className="box box--medium"
    style={{fontStyle: 'italic', backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)

const largeBox = (
  <div
    id="three"
    className="box box--large"
    style={{fontStyle: 'italic', backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)

const Box = ({size = 'medium', bg = 'yellow', children, ...restProps}) => (
  <div
    className={`box box--${size}`}
    style={{fontStyle: 'italic', backgroundColor: bg}}
    {...restProps}
  >
    {children}
  </div>
)

const App = () => (
  <>
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="small" bg="blue">
        SM
      </Box>
      <Box size="medium" bg="pink">
        MD
      </Box>
      <Box size="large" bg="orange">
        LG
      </Box>
    </div>
  </>
)

export default App
