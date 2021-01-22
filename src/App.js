import './App.css';
import Stats from './components/Stats';
import AuthContext, { authContext } from './context/AuthContext';

function App() {
  return (
    <AuthContext>
    <div className="App">
     <Stats/>
    </div>
    </AuthContext>
  );
}

export default App;
