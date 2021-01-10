import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(n1, n2) {
    return [...n1].map(function(e, i) {
        return `${e}${n2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const count = useRef(0);
    const input1 = useRef(0);
    const input2 = useRef(0);

    console.log(input1.current.value);

    /* NÚMERO DE VEZES QUE UM COMPONENTE É RENDERIZADO */
    useEffect(function () {
        count.current = count.current + 1;
        input2.current.focus();

    }, [value1])
    
    useEffect(function () {
        count.current = count.current + 1;
        input1.current.focus();
    }, [value2])
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1,value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    value={value1} onChange={e => setValue1(e.target.value)}
                    ref={input1}
                />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    value={value2} onChange={e => setValue2(e.target.value)}
                    ref={input2}/>
            </div>

        </div>
    )
}

export default UseRef
