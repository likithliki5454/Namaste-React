// <div id="parent">
//     <div id="child">
//         <h1>am h1</h1>
//     </div>
// </div>


import React from 'react'
import ReactDOM from 'react-dom/client'

const header = React.createElement('div', { id: "parent" },
    React.createElement('div', { id: "child1" }, 
    React.createElement('h1', {}, 'am h1'))
    )

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(header)