import React , {useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {
const [myName,setMyname] = useState("Entertainment");

const changeName = ()=>{
 
  (myName === "Entertainment") ? setMyname("Vishwa Entertainment😊👌👍"):setMyname("Entertainment");
  
    // setMyname("Vishwa Entertainment😊👌👍");
  // console.log("Clicked");
}

  return (
    <div className="App">
      <h2>{myName}</h2>
      <Button variant="contained" onClick={changeName}>Click Me</Button>
    </div>
  );
}

export default App;
