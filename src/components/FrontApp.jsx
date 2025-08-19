
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import loadable from '@loadable/component';

// Importa tu Contexto
import { AuthProvider, useAuth } from '../project1/AuthContext'; 
import NewPassword from '../project1/NewPassword';


// Lazy load de tus componentes de página
const Home = loadable(() => import('../pages/Home'));
const Projects = loadable(() => import('../pages/Projects'));
const Login = loadable(() => import('../project1/Login'));
const MenuPrincipal = loadable(() => import('../project1/MenuPrincipal'));
const Register = loadable(() => import ('../project1/Register'));

const HomeTwo = loadable(() => import('../project2/HomeTwo'));


export const FrontApp = () => {
  

  // === ¡LA SOLUCIÓN! DEFINIMOS LOS GUARDIANES AQUÍ DENTRO ===
  // =========================================================
  // Al estar definidos dentro de `FrontApp`, cuando los usemos en las rutas,
  // ya estarán dentro del alcance del <AuthProvider> y podrán usar el hook `useAuth`.

  const ProtectedRoute = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Outlet /> : <Navigate to="/proyecto1" replace />;
  };

  const PublicRoute = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to="/menuprincipal1" replace /> : <Outlet />;
  };
  // =========================================================

  return (


    <BrowserRouter>
      {/* AuthProvider envuelve a las Rutas */}
      <AuthProvider>
        <Routes>
          
          {/* Rutas Públicas Generales */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          {/* Rutas de Autenticación (ahora usando el guardián interno) */}
          <Route element={<PublicRoute />}>
            <Route path="/proyecto1" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/newcontraseña" element={<NewPassword/>}/>
            <Route path="/proyecto2" element={<HomeTwo/>}/>
          </Route>

          {/* Rutas Privadas (ahora usando el guardián interno) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/menuprincipal1" element={<MenuPrincipal />} />
          </Route>
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
