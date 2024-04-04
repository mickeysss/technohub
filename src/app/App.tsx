import React, { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';

import { Navbar, PageLoader, Sidebar } from 'widgets';
import { Button } from 'shared/ui/Button/Button';

import { classNames } from 'shared/lib/classNames/classNames';

import '../../assets/styles/index.scss';

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
                <Button type="button" onClick={toggleTheme}>TOGGLE</Button>
            </Suspense>
        </div>
    );
}

export default App;
