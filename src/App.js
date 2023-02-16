import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Index from './pages/Index'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/' element={<Index/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
