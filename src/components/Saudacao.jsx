function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Ola ${algumNome}, tudo bem?`
    }
    return (
        <>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}
//estamos dividindo o componente para somente mostrar o dado do component pai

export default Saudacao;