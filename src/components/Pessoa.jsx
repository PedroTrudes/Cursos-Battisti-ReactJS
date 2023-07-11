import React from 'react'
// trabalhando com desestruturação de props
function Pessoa({nome, idade, prof, foto,}) {
  return (
    <div>
        <img src={foto}/>
        <br />
        <span>Nome: {nome}</span>
        <br />
        <span>Idade: {idade}</span>
        <br />
        <span>Profissão: {prof}</span>
    </div>
  )
}

export default Pessoa