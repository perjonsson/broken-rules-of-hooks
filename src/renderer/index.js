import React from 'react'
import ReactDOM from 'react-dom'
import { ReactTinyLink } from 'react-tiny-link'

ReactDOM.render(
  <ReactTinyLink
    cardSize="small"
    showGraphic={true}
    maxLine={2}
    minLine={1}
    url="https://www.youtube.com/watch?v=xn2A_dXoIAA"
  />,
  document.getElementById('app')
);
