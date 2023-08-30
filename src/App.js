import './App.css';
import "./index.css"
import { Route, Routes } from 'react-router-dom';
import HomePage from './route/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*'  element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
