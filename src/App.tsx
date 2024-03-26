import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { AboutPageLazy } from './pages/AboutPage/AboutPageLazy';
import { MainPageLazy } from './pages/MainPage/MainPageLazy';
import '../assets/styles/index.scss'
import { useTheme } from '../assets/styles/theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Main</Link>
      <Link to="/about">About us</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy/>}/>
          <Route path="/" element={<MainPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;