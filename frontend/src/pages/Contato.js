import React, { lazy, Suspense } from 'react';
const InfoContato = lazy(() => import("../code-spliting/components/infoContato"));

const Comentarios = () => {
    const [comentario, setComentarios] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");

    React.useEffect(async () => {
        const url = " http://localhost:3333/contato";
        const response = await fetch(url);
        setComentarios(await response.json());
    }, [render])

    function registerComment(event) {
        event.preventDefault();
        console.log(event.target)

        const formData = { "nome": email, "msg": senha }
        const url = "http://localhost:3333/contato";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(dados => console.log(dados))
        setRender(!render);

        event.preventDefault();

        // Lógica de cadastro
        console.log("Cadastro efetuado!")

        setEmail("");
        setSenha("");
    }

    return (

        <div className="container mt-5">
            <Suspense fallback={
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }>
                <InfoContato />
                <form onSubmit={registerComment}>
                    <div className="form-group mt-5">
                        <label for="exampleInputEmail1">Nome</label>
                        <input type="text" name="nome" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu nome" value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu contato.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1"></label>
                        <input type="text" name="msg" className="form-control" id="exampleInputPassword1" placeholder="Sua Mensagem" value={senha}
                            onChange={(event) => setSenha(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-danger">Enviar</button>
                </form>
                <div className="row">
                    <div className="col-12 ">
                        {comentario.map(element => {
                            return (
                                <div key={element.id} className="card my-5 pl-2 shadow">
                                    <p> <b>Data: </b>{element.data}</p> <br />
                                    <p><b>Nome:</b> {element.nome} </p>
                                    <p><b>Comentário:</b> {element.msg} </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Suspense>
        </div>









    );
}

export default Comentarios;