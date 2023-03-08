import './App.css'


function App() {
 
const name="keke"

const array=["Aung",22,"male"]

const textRed ="textBlue"

const textBlue ="textBlue"

const boolean= false;//true

function Click(x,y){
  console.log(x,y);
} 

const item = ['Hello','Mingalapar','Hello World','Hi Bro','Hey Friend']


  return (

    <div className="App">
     <h1 className={boolean? textRed : textBlue}>{5+5} </h1>
  
     <p>{name.toUpperCase()}</p>
     <p>{array.join().toUpperCase()}</p>

     {
      boolean ?<p>I am true</p> : <p>I am not true</p>
     }

     {
      boolean ?<p>I am true</p> : null
     }
     {
      boolean && <p>I am true</p>
     }

     {/* <button onClick={()=> Click("Hello World")}>Hi</button>
     <button onClick={Click}>Hello</button> */}
     <button onClick={Click.bind(null,"Hello World","try it")}>Hey</button>


      {/* why need key in jsx looping (console error) 
    <div>
       {
        item.map(i => <p>{i}</p>)
       }

    </div> */}
    <div>
      {
        item.map((i,index)=><p key={index}>{i}</p>)
      }
    </div>
     
     
    </div>
  );
}

export default App;
