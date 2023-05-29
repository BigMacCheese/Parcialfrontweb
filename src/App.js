import './App.css';
import Login from './components/login';
import LibrosLista from './components/libroslista';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<LibrosLista />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
