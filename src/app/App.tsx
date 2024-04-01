import React, { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';

import { Navbar, Sidebar } from 'widgets';

import { classNames } from 'shared/lib/classNames/classNames';

import '../../assets/styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
        <button onClick={toggleTheme}>TOGGLE</button>
      </Suspense>
    </div>
  );
};

export default App;