import React from "react";
import ItemProp from "./ItemProp";

function List() {
    return(
    <>
        <h4>Minha lista com fragments</h4>
        <ul>
            <ItemProp marca='Bugatti' ano_lancamento={2000}/>
            <ItemProp marca='Ferrari' ano_lancamento={2022}/>
            <ItemProp marca='renoult' ano_lancamento={2001}/>
            <ItemProp  />
        </ul>
    </>)
}

export default List