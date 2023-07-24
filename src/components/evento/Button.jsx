function Button(props) {
    //Pegando um evendo via props
    return(
        <>
        <button type={props.tipo} onClick={props.event} >{props.text}</button>
        </>
    )
}

export default Button;