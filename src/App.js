
import React,{ useState } from "react";

function App() {
  const alphabet1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
  const alphabet2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
  const alphabet3 = ["z", "x", "c", "v", "b", "n", "m"]

  const [capslock,setCapslock] =useState(false)
  const [text, setText] = useState("")
  console.log(text)
  return (
    <div>
      <div>
        <textarea value={text}> 
          
        </textarea>
      </div>
      <div>
        {alphabet1.map((item, index) => {
          return (
            <button value={ capslock?item.toUpperCase():item.toLowerCase()} onClick={(e) => setText(text + e.target.value)}>{capslock?item.toUpperCase():item.toLowerCase()}</button>
          )
        })}
      </div>
      <div>
        {alphabet2.map((item, index) => {
          return (
            <button value={ capslock?item.toUpperCase():item.toLowerCase()}onClick={(e) => setText(text + e.target.value)}>{capslock?item.toUpperCase():item.toLowerCase()}</button>
          )
        })}
      </div>
      <div>
        {alphabet3.map((item, index) => {
          return (
            <button value={ capslock?item.toUpperCase():item.toLowerCase()} onClick={(e) => setText(text + e.target.value)}>{capslock?item.toUpperCase():item.toLowerCase()}</button>
          )
        })}
      </div>
      <div>
        <button onClick={()=>{
          setText(text.slice(0,-1))
        }}>BackSpace</button>
        <button value=" " onClick={(e) => setText(text + e.target.value)}>Space</button>
        <button onClick={()=>{
          capslock?setCapslock(false):setCapslock(true)
        }}>capslock</button>
        
      </div>
    </div>
  )
}

export default App;
