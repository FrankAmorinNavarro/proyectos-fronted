import React from 'react';

import { HashRouter, Routes, Route, Navigate } from "react-router-dom"; 
import loadable from '@loadable/component';


import { AuthProvider, useAuth } from '../project1/AuthContext'; 
import NewPassword from '../project1/NewPassword';


// Lazy load de tus componentes de página

// Lazy load de los componentes de página de PORTAFOLIO

const Home = loadable(() => import('../pages/Home'));
const Projects = loadable(() => import('../pages/Projects'));


export const FrontApp = () => {
  


  const ProtectedRoute = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Outlet /> : <Navigate to="/proyecto1" replace />;
  };

  const PublicRoute = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to="/menuprincipal1" replace /> : <Outlet />;
  };

  return (

    <HashRouter>
        <Routes>
          
          {/* Rutas del portafolio */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          {/* Ruta por defecto: si no encuentra nada, redirige al Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
    </HashRouter>
  );
};