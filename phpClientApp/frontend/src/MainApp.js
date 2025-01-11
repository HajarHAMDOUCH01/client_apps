import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import TranslatotBotPage from './TranslatotBotPage'; 

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/TranslatotBotPage" element={<TranslatotBotPage />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
