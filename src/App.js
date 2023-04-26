import logo from './logo.svg';
import './App.css';
import MyPage from './components/MyPage';

function App() {
  return (
    <div className="App">
      <h1>React Context API</h1>
      <a 
      href="https://es.reactjs.org/docs/context.html" target="_blank" 
      rel="noferrer">
        Documentación
      </a>
      <MyPage/>
    </div>
  );
}

export default App;
