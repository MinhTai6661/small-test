
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/HomePage';
import { useState } from 'react';
import Container from './components/Container';


function App() {

  const [count, setCount] = useState(1)

  return (
    <div className="App"  >
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<h1>NOT FOUND</h1>} />
        </Routes>

      </Container>
    </div>
  );
}

export default App;
