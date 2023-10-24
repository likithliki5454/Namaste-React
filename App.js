// <div id="parent">
//     <div id="child">
//         <h1>am h1</h1>
//     </div>
// </div>


const header = React.createElement('div', { id: "parent" },
  [React.createElement('div', { id: "child1" }, 
    React.createElement('h1', {}, 'am h1'))],
    [React.createElement('div', { id: "child2" }, 
    React.createElement('h2', {}, 'am h2'))],
    )

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(header)