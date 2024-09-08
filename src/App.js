import logo from './logo.svg';
import './App.css';
import Helloboy from './components/Hello';
 const run=[1,2,3];
 const person={
  name:"pasindu",
  message:"hi i am",
  emoji:"heart"
 }

function App() {
  return (
    <div>
    <Helloboy  person={person}></Helloboy>
    </div>
    
  );
}

export default App;
