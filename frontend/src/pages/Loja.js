import React, { lazy, Suspense } from 'react';

const ListLoja = lazy(() => import("../code-spliting/components/listLoja"));

function Loja() {
  return (
    <>
      <div className="container mt-3">
        <h2>Nossas Lojas</h2>
        <Suspense fallback={
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }>
          <ListLoja />
        </Suspense>
      </div>
    </>







  );
}

export default Loja;