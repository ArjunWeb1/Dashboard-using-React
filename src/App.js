import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import UserProfile from './components/UserProfile';
import TableList from './components/TableList';
import Typography from './components/Typography';
import Icons from './components/Icons';
import Maps from './components/Maps';
import Notifications from './components/Notifications';
import Footer from './components/Footer';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'userProfile':
        return <UserProfile />;
      case 'tableList':
        return <TableList />;
      case 'typography':
        return <Typography />;
      case 'icons':
        return <Icons />;
      case 'maps':
        return <Maps />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Content />;
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar onSelect={setSelectedMenu} />
      <div className="main-content">
        <Header title={selectedMenu} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        {renderContent()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
