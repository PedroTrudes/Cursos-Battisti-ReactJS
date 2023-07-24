import { useState } from "react"
import Button from "./evento/Button"


function Condicional(){
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault()
        console.log('Testando')
        setUserEmail(email);
    }

    function limparEmail(){
        setUserEmail("")
    }

    return(
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <input type="email" 
                placeholder="Digite o seu email" 
                onChange={(e) => setEmail(e.target.value)}
                />
                <Button tipo="submit" 
                event={enviarEmail} 
                text="Enviar email" />
                {userEmail &&  (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <Button tipo="submit" event={limparEmail}
                        text="Limpar state" />
                    </div>
                )}
            </form>
        </div>
    )
}


export default Condicional