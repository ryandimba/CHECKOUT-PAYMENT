
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> {}
      <header className="App-header"> {}
        <img src={logo} className="App-logo" alt="logo" /> {}
        <p>
          Edit <code>src/App.js</code> and save to reload. {}
        </p>
        <a
          className="App-link" {}
          href="https://reactjs.org" {}
          target="_blank" {}
          rel="noopener noreferrer" {}
        >
          Learn React {}
        </a>
      </header>
    </div>
  );
}

function handleClick() {
    alert('Button clicked!');
  }
  
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

export default App; 
