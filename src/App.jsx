import React ,{useState} from 'react';
import axios from 'axios';
const my_Api = "http://numbersapi.com/";





const App = () =>{
  
  const [state, setstate] = useState("")

   async function fact (){
    let number = document.getElementById("input").value;
    if(number===""){
      setstate("Enter a number first")
    }
    else{
      axios.get(my_Api+number).then(
        (res)=>{
          setstate(res.data);
      })
    }
    
  };

    return(
    <>
    <div className="card">
    <h1>Get a Fact</h1>
    <input id ="input" placeholder="Enter a number"></input>
    <button className="btn" onClick={fact}>Learn something new</button>
    <div className="txt">
    {state}
    </div>
    </div>
    </>
)
}
export default App;                         