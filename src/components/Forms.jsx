import { useState } from "react"
//Trabalhando com o hook  de useState
function Forms(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Usuario Cadastrado")
        console.log(name);
        console.log(senha)
    }

    const [name, setName] = useState()
    const [senha, setSenha] = useState()

    return(
        <div>
            <h6>Meu Cadastro:</h6>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="Nome"></label>
                    <input type="text" 
                    name="Nome" 
                    id="Nome" 
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="Senha"></label>
                    <input type="password" 
                    name="Senha" 
                    id="Senha" 
                    placeholder="Digite a sua senha" 
                    onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Forms