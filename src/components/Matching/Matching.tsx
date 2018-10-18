import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';

import './Matching.scss';

import { store } from '../../stores/Store';

interface IMatchingProps { }

@observer class Matching extends React.Component<IMatchingProps> {

    render() {
        return <section className="matching">
            

            <ul className="Persona Uno">
                {store.personaUno.map((elem: any, index: number) =>
                    <li key={elem}>
                        <h1>{elem.Nombre}</h1>
                        <p>{elem.Pimenton}</p>
                        <p>{elem.Cebolla}</p>
                        <p>{elem.Champinon}</p>
                        <p>{elem.Tomate}</p>
                        <p>{elem.Queso}</p>
                        <p>{elem.Pina}</p>
                        <p>{elem.Maduro}</p>
                        <p>{elem.Maiz}</p>
                        <p>{elem.Jamon}</p>
                        <p>{elem.Pollo}</p>
                        <p>{elem.Tocineta}</p>
                        <p>{elem.Aceitunas}</p>
                        <p>{elem.Anchoas}</p>
                        <p>{elem.Pepperoni}</p>
                        <p>{elem.Salami}</p>
                        <p>{elem.Jalapenos}</p>
                        <p>{elem.JamonSerrano}</p>
                        <p>{elem.Chorizo}</p>
                        <p>{elem.Albahaca}</p>
                        <p>{elem.Carne}</p>
                        <p>{elem.Oregano}</p>
                        <p>{elem.Rugula}</p>
                        <p>{elem.Cabano}</p>
                        <p>{elem.Berenjena}</p>
                        <p>{elem.Mariscos}</p>
                    </li>
                )}
            </ul>
        </section>
    }
}
export default Matching;