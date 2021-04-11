import react from 'react';
import FamiliaMembro from './MembroFamilia';

export default props => {

    return(
        <div>
            <FamiliaMembro nome="Giovana Beltrame" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Sarah" sobrenome="Martins" />
            <FamiliaMembro nome="Henry Cal" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Filipe Austin" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Jane" {...props} />
        </div>
    )
}