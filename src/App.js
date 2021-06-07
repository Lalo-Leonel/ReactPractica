import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';
import Navigation from './components/Navigation';
 
import { todos } from './todos.json';
console.log(todos);


function App() {
  
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              5
            </span>
          </a>
                
        </nav>
        <Navigation/>
        <img src={logo} className="App-logo" alt="logo" />
        
        
    </div>
  );
}

export default App;
