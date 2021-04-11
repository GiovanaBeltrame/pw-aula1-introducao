import React, {cloneElement} from 'react';

export default props => {

    return(
        <div>
            {/*PARA UM ÚNICO ELEMENTO FILHO*/}
            {/* {cloneElement(props.children, {...props})}*/}

            {/*PARA VÁRIOS ELEMENTOS FILHOS*/}
            {props.children.map((child) =>{
                    return cloneElement(child, {...props})
            })}
        </div>
    )
}