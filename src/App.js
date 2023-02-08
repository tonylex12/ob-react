import logo from './logo.svg';
import GreetingF from './components/pure/GreetingF';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente GreetingF */}
        <GreetingF 
          name="Tony"
        />
      </header>
    </div>
  );
}

export default App;
