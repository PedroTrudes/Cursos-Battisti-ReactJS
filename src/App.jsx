import logo from './logo.svg';
import HelloWorld from './components/HelloWorld';
import Nome from './components/Nome';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Nome />
        <SayMyName nome="Testando props"/>
        <SayMyName nome="Zé da manga" />
        <Pessoa 
        nome="Pedro" 
        idade="23" 
        prof="Desenvolvedor ReactJS" 
        foto={"https://via.placeholder.com/150"} />

        <List />
        
      </header>
    </div>
  );
}

export default App;
