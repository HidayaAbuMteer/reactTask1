import logo from './logo.svg';
import './App.css';
import MyName  from './MyName';
import React from 'react';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import Task6 from './Task6';
import Task7 from './Task7';
import Task8 from "./Task8";
import Task9 from "./Task9";
import Task10 from "./Task10";
import Task11 from "./Task11";
import Task12 from "./Task12";
import Task13 from "./Task13";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Parent from "./Parent";
import Child from "./Child";





function App() {
const students=["student1","student2","student3","student4",];
const numbers = [1,2,3,4,5];
const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cards=[
  {photo:"/download.jpg",title:"card 1",description:"this is the first card."},
  {photo:"/download.jpg",title:"card 2",description:"this is the second card."},
  {photo:"/download.jpg",title:"card 3",description:"this is the third card."}
]

  return (
    <div className="App">
     <MyName/>
      <Task2 />
      <Task3/>
      <Task4/>
      <Task5/>
      <Task6/>
      <Task7 isLoggedIn={true}/>
      <Task8 isSuccess={true} />
      <Task9 items={students} />
      <Task10 items={students} />
      <Task11 items={numbers} />
      <Task12 items={numbers10} />
      <Task13 cards={cards}/>
      
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
<Parent/>
<Child/>
    </div>
  
 
  );
}

export default App;
 