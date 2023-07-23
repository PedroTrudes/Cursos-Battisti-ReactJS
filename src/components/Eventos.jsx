import Button from "./evento/Button";

function Eventos({numero}){
    function meuEvento(){
        console.log(`Fui Ativado ${numero}`);
    }
    
    return(
        <>
            <p>Clique para disparar um evento:</p>
            <Button evento={meuEvento()} text="Primeiro evento" />
        </>
    )
}

export default Eventos