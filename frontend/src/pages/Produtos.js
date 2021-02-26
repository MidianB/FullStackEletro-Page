import React from 'react';

const Produtos = () => {
  const [produto, setProduto] = React.useState([])

  React.useEffect(async () => {
    const url = " http://localhost:3333/produtos";
    const response = await fetch(url)
    setProduto(await response.json())
  }, [])

  let destaque = (event) => {
    if (event.target.style.width === "260px") {
      event.target.style.width = "120px";
    }
    else {
      event.target.style.width = "260px";
    }
  }

  const redimensiona = (event) => {
    if (event.target.style.width === "120px") {
      event.target.style.width = "260px";
    }
    else {
      event.target.style.width = "120px";
    }
  }
  const cat = produto.map(cat => {
    const container = {}
    container['id'] = cat.id_categoria
    container['name'] = cat.categoria
    return container
  })
  const categoriaFinal = cat.map(JSON.stringify)
    .reverse()
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1
    }).reverse()
    .map(JSON.parse)

  let produt = document.getElementsByClassName('prod');
  const exibir = (event) => {
    let item = event.target.id;
    for (let i = 0; i < produt.length; i++) {
      if (item === produt[i].id) {
        produt[i].style.display = "inline-block";
      } else {
        produt[i].style.display = "none";
      }
    }
  }

  const exibirTodos = () => {
    for (let i = 0; i < produt.length; i++) {
      produt[i].style.display = "inline-block";
    }
  }

  return (

    <>

      
      <div className="container-fluid mt-5 row">

      <aside className="col-lg-3 col-sm-3">
        <button className="col-sm-12 btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorias
        </button>
        <div className="dropdown-menu col-sm-12" aria-labelledby="dropdownMenu2">
          <ul className="list-group">
            <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center"
              type="button" onClick={exibirTodos}>
              Todos
        <span className="badge badge-success badge-pill">12</span>
            </button>
            {categoriaFinal.map(categoria => {
              return (
                <button key={categoria.id} id={categoria.id} className="dropdown-item list-group-item d-flex justify-content-between align-items-center" type="button"
                  onClick={exibir}> {categoria.name} </button>
              )
            })}
          </ul>
        </div>
      </aside>


        <div className="col-lg-9 mt-1 ">
          <div className="row" id="produtos">
            {produto.map(element => {
              return (
                <div key={element.id_produto} className="prod produtos card col-sm-8 col-md-5 col-lg-3 mt-1 mr-1 border-light shadow align-items-center"
                  id={element.id_categoria}>
                  <img className="card-img-top img-thumbnail"
                    src={"/img/" + element.nomeimagem}
                    onMouseOver={destaque}
                    onMouseOut={redimensiona} />
                  <p className="card-text"> {element.descricao_produto + " " + element.marca} </p>

                  <p className="scard-text text-danger"> R$<strike>{element.preco_inicial}</strike>  </p>

                  <p className="card-text"> R$ {element.preco_desconto}  </p>
                </div>
              )
            })}
          </div>
        </div>
        <hr />
      </div>
      <hr />

    </>
  );
}

export default Produtos;