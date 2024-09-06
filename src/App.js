import logo from './logo.svg';
import './App.css';
import Helloboy from './components/Hello';
 var run={dog:"black",cat:"white"};

function App() {
  return (
    <div>
    <Helloboy name="rob" message="hi ther i am"></Helloboy>
    <Helloboy name="tom" message="hi dude i am"></Helloboy>
    <Helloboy run></Helloboy>
    </div>
    
  );
}

export default App;
