import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [username,setusername]=useState('sathak');
  const[users,setusers]=useState([10,20,30]);

  return (
    <div>
      <h1 className="">{count}</h1>
      <h2>{username}</h2>
      <h2>{users}</h2>

      <button onClick={() =>{
        setCount(count + 1);
        setusername("aman");
        setusers([34,33,45])
      }}>
        Increase
      </button>
      <button onClick={()=> setCount(count-1) }>decrease</button>
    </div>
  );
}

export default App;