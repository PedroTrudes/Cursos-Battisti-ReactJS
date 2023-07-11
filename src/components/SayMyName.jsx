import React from 'react'

//Trabalhando com props de maneira simples
//dados vindo de onde o componente for invocado
function SayMyName(props) {
  return (
    <div>
        {props.nome}
    </div>
  )
}

export default SayMyName