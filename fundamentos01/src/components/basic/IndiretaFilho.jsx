import React, {useState} from "react";

export default props => {

    const [nome, setNome] = useState('Melissa Kant')

    return(
        <div>
            <button onClick={() => {
                props.quandoClicar(nome)
            }}>
                Fornecer informarções do Aluno
            </button>
        </div>
    )
}