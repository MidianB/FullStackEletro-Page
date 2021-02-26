import React from 'react';


function Home() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>


      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/1.jpg" height="600px" className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            <h2 className="text-dark">APROVEITE O BLACK FRIDAY ATÉ O NATAL</h2>

          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/2.jpg" height="600px" className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
            
            <h2 className="text-dark">DESCONTOS DE ATÉ 50%</h2>

          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/3.jpg" height="600px" className="d-block w-100" alt="..."></img>
          <div className="carousel-caption d-none d-md-block">
           
            <h2 className="text-dark" >TODOS OS DIAS PROMOÇÕES ESPECIAIS</h2>

          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

  );
}

export default Home;