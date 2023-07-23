import PropTypes from 'prop-types';

function ItemProp({marca, ano_lancamento}){
    //uso de fragment para não pegar nenhuma tag a mais
    return(
        <>
            <li>{marca} -  {ano_lancamento}</li>
        </>
    )
}


//Codigo usado para validação, sem precisar fazer if ou algo do tipo
//pequena validação com ProtoTypes
ItemProp.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}

//setando um valor para a props caso não seja setado algum valor
ItemProp.defaultProps = {
    marca: "faltou  uma marca",
    ano_lancamento: 'NA'
}

export default ItemProp;