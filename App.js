// <div id="parent">
//     <div id="child">
//         <h1>am h1</h1>
//     </div>
// </div>


import React from 'react'
import ReactDOM from 'react-dom/client'

const HelW=()=>{
    return(
        <p>nested</p>
    )
}

const HeaderComp=()=>{
    return(
        <div id='container'>
        <HelW/>
        <h1>Hello Word</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeaderComp/>)