import './App.css';
import CrudApi from './components/CrudApi';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext';


function App() {
  return (
    <div className="App">
      <h1>React Context API</h1>
      <a 
      href="https://es.reactjs.org/docs/context.html" target="_blank" 
      rel="noferrer">
        Documentación
      </a>
      <hr/>
      <CrudApi/>
      <hr/>
      <MyPageContext/>
      <hr/>
      <MyPage/>
    </div>
  );
}

export default App;
