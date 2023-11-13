import { BrowserRouter, Route, Routes, json } from 'react-router-dom';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
