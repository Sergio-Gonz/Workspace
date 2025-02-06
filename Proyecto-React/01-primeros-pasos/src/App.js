import logo from './logo.svg';
import './App.css';
import Micomponente from './Micomponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a mi primer proyecto.
        </p>
    

        {/* cargar mi componente  */}
        <Micomponente />
      </header>


    

    </div>
  );
}

export default App;