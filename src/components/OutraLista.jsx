function OutraLista({itens}){
    return(
        <>
        <h4>Lista de frameWorks em JS</h4>
        {itens.length > 0 ? (
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))): (
                <p>Não a dados na lista</p>
            )
        }
        </>
    )
}

export default OutraLista;