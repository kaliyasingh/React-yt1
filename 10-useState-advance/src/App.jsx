// import React from 'react'
// import { useState } from "react";

// const App = () => {
//   const[num,setNum]=useState({user:'sarthak',age:20})
//   const btnClicked =()=>{
//     setNum(prev=>({...prev,age:50}))
          
//   } 
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { useState } from "react";

// const App = () => {
//   const[num,setNum]=useState([10,20,30])
//   const btnClicked =()=>{
//     const newNum={...num}
//     newNum.push(99)
//     setNum(newNum)
          
//   } 
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from "react";

const App = () => {                     //batch update in react
  const [num, setNum] = useState(0);

  const btnClicked = () => {
    setNum(prev=>(prev+1))             // setNum(num + 1);
    setNum(prev=>(prev+1))             // setNum(num + 1);
    setNum(prev=>(prev+1))             // setNum(num + 1);

  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App;