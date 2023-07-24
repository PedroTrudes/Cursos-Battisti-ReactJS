import logo from './logo.svg';
import HelloWorld from './components/HelloWorld';
import Nome from './components/Nome';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Eventos from './components/Eventos';
import Forms from './components/Forms';
import Condicional from './components/Condicional';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Condicional />
      </header>
    </div>
  );
}

export default App;

/*

        <HelloWorld />
        <Nome />
        <h3>Props e Fragmets</h3>
        <SayMyName nome="Testando props"/>
        <SayMyName nome="Zé da manga" />
        <Pessoa 
        nome="Pedro" 
        idade="23" 
        prof="Desenvolvedor ReactJS" 
        foto={"https://via.placeholder.com/150"} />
        <List />
        <h3>Eventos</h3>
        <Eventos numero={1} />
        <h3>Formularios Com Eventos</h3>
        <Forms />
*/
