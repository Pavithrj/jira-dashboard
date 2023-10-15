import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthAccess from './Components/AuthAccess';
import SignUpPage from './Components/SignUpPage';
import DashBoardPage from './Components/DashBoard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthAccess />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
