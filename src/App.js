import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Mypage from './pages/Mypage/Mypage';
import Ttust from './pages/Ttust/Ttust';
import Earn from './pages/Earn/Earn';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/ttust" element={<Ttust />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* < */}
    </div>
  );
}

export default App;
