import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Home from './pages/Home';
import Personagem from './pages/Personagem';
import Inicio from './pages/Inicio';
import Loja from './pages/Loja';
import Praticar from './pages/Praticar';
import FeedLires from './components/FeedLires';
import EncerramentoL from './components/EncerramentoLires';
import Configuracoes from './pages/Configurações';
import Notificação from './pages/Notificação';
import Segurança from './pages/Segurança';


function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        {/* Define the routes for the application */}
        <Routes>
          <Route path="/" element={<Configuracoes />} />
          <Route path="/personagem" element={<FeedLires />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/user" element={<User />} />
          <Route path='/loja' element={<Home/>} />
          <Route path='/Praticar' element={<Loja/>} />
          <Route path='/Notificações' element={<Notificação/>} />
          <Route path='/Segurança' element={<Segurança />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;