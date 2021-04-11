import React, {Component} from 'react'
import './App.css'

import IndiretaPai from './components/basic/IndiretaPai'
import Estado from './components/basic/Estado'
import FamiliaClone from './components/basic/FamiliaClone'
import FamiliaMembroClone from './components/basic/MembroFamiliaClone'
import Familia from './components/basic/Familia'
import Card from './components/layout/Card'
import Propriedades from './components/basic/Propriedades'
import HelloWorld from './components/basic/HelloWorld'

class App extends Component {
    render() {
        return(
            <div classname="App">
                <h1>Aula 2 - Exemplos React</h1>

                <div className="Cards">

                    <Card titulo="Comunicação Indireta (de filho para pai)" cor="#f7673b">
                        <IndiretaPai />
                    </Card>

                    <Card titulo="Estado" cor="#ffb400">
                        <Estado />
                    </Card>

                    <Card titulo="Componentes aninhados (CloneElement)" cor="#82212e">
                        <FamiliaClone sobrenome="Kant">
                            <FamiliaMembroClone nome= "Giovana Beltrame"/>
                            <FamiliaMembroClone nome= "Sarah"/>
                            <FamiliaMembroClone nome= "Henry Cal"/>
                            <FamiliaMembroClone nome= "Filipe Austin"/>
                            <FamiliaMembroClone nome= "Jane"/>
            
                        </FamiliaClone>
                    </Card>

                    <Card titulo="Componentes aninhados (Comunicação direta)" cor="#d1495b">
                        <Familia sobrenome="Kant"/>
                    </Card>

                    <Card titulo="Propriedades" cor="#91cb3e">
                        <Propriedades nome="Giovana" sobrenome="Beltrame Kant" idade={37}/>
                    </Card>

                    <Card titulo="Hello World" cor="#226ce0">
                    <HelloWorld />
                    </Card>

                </div>

            </div>
        )
    }
}

export default App;
