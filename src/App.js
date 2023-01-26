import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://img.freepik.com/vector-gratis/pila-plana-dibujada-mano-libros_23-2149331325.jpg?w=2000" className="App-logo" alt="logo" />
        <p>
          Hoy toca relajarse leyendo un poco
        </p>
        <a
          className="App-link"
          href="https://bibliotecas.malaga.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos a buscar la biblioteca mas cercana
        </a>
      </header>
    </div>
  );
}

export default App;
