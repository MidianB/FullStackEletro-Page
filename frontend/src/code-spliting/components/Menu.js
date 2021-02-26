import React from 'react';

function Menu() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light shadow" id="menu">
      <div className="container" >
        <a className="navbar-brand" href="./Home">
          <img src="../img/Play.gif" alt="fullstackeletro" />
        </a>
        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="./Produtos">Produtos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="./Loja">Nossas Lojas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="./Contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}

export default Menu;