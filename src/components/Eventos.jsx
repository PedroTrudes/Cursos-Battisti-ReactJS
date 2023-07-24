import Button from "./evento/Button";
// o evento semmpre fica no componente pai

function Eventos({numero}){
    //estou criando duas function onde posso passar qualquer uma
    //no componente de forma variada.
    function meuEvento(){
        console.log(`Fui Ativado ${numero}`);
    }

    function segundoEvento(){
        console.log("ativando o segundo evento");
    }
    
    return(
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </>
    )
}

export default Eventos