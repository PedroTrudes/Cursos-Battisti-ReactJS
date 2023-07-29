import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {} from 'react-dom'
import './App.css';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  return (
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/empresa' element={<Empresa />}/>
          <Route path='/contato' element={<Contato />}/>
        </Routes>

        <Footer />
      </Router>
  );
}

export default App;

/*
<header className="App-header">
        <h1>State lift</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome} />
      </header>

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

          <Condicional />
        <OutraLista itens={meusItens}/>
        
        <OutraLista itens={[]}/>
*/
