import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/userCounter'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)


    function showStates(states){
        return states.map(state => <li kye={state.nome}>{state.nome} - {state.sigla}</li>)
    }
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <button className="btn" onClick={() => inc()}>+</button>
                <button className="btn" onClick={() => dec()}>-</button>
            </div>
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false }
                </ul>
            </div>
        </div>
    )
}

export default UseRef
