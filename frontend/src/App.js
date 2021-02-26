import React from 'react';
import { lazy, Suspense } from 'react';
import "./App.css";
import Routes from './Routes.js';

const Menu = lazy(() => import('./code-spliting/components/Menu'))


function App() {
    return (
        <>
            <Suspense fallback={
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }>

                <Menu />
                <Routes />
            </Suspense>
        </>

    );
}

export default App;
