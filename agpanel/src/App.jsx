import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Panel from './pages/Panel';
import Marcas from './pages/Marcas';
import ProtectedRoute from './ProtectedRoute';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      

      
      <Route
        path="/Panel"
        element={
          <ProtectedRoute>
            <Panel />
          </ProtectedRoute>
        }
      />

      {/* Puedes agregar más rutas aquí */}
      <Route
          path="/Marcas"
          element={
            <ProtectedRoute>
              <Marcas/>
            </ProtectedRoute>
          }
        />
      </Routes>


   
   
    


    

    
  );
  
}
console.log("App cargado");

export default App;
