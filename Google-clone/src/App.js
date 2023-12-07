import React, { useState } from 'react';

// Importando componentes
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Routes } from './components/Routes/Routes';

const App = () => {
  // Estado para controlar el tema oscuro
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        {/* Barra de navegación con opciones de tema oscuro */}
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />

        {/* Definición de las rutas de la aplicación */}
        <Routes />

        {/* Pie de página de la aplicación */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
