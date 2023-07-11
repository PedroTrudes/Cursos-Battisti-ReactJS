import PropTypes from 'prop-types';

function ItemProp({marca, ano_lancamento}){
    //uso de fragment para não pegar nenhuma tag a mais
    return(
        <>
            <li>{marca} -  {ano_lancamento}</li>
        </>
    )
}

//pequena validação com ProtoTypes
ItemProp.protoTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number.isRequired
}

//setando um valor para a props caso não seja setado algum valor
ItemProp.defaultProps = {
    marca: "faltou  uma marca",
    ano_lancamento: 'NA'
}

export default ItemProp;