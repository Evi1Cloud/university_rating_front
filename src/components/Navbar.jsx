import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ activeTab }) => {
  const tabs = [
    { name: 'Ввод параметров', path: '/input' },
    { name: 'Анализ и визуализация', path: '/analysis' },
    { name: 'История', path: '/history' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span ClassName="class-title">Рейтинг</span>
      </div>

      <div className="nav-center">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className={`nav-link ${activeTab === tab.name ? 'active' : ''}`}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <div className="nav-right">
        <div className="user-icon">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;
