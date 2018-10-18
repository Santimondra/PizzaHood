import * as React from 'react';
import { observer } from 'mobx-react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Redirect
} from 'react-router-dom'

import './Root.scss';

import { store } from '../../stores/Store';
import Matching from '../../components/matching/Matching';

interface IRootProps { }

@observer export class Root extends React.Component<IRootProps> {

    render() {
        return (
            <section>
                <article>
                <form id="personaUno" onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <select name="nombres" form="personaUno" onChange={(e) => {
                        store.setPersonaUno(e.target.value)

                    }}>
                        {store.personas.map((elem: any, index: number) =>
                            <option key={elem} id={elem.Nombre}>{elem.Nombre}</option>
                        )}
                    </select>
                    <button type="submit">select</button>
                </form>

                 <ul className="Persona Uno">
                    
                            <li>Nombre: <b>{store.personaUno.Nombre}</b></li>
                            <li>Pimenton: <b>{store.personaUno.Pimenton}</b></li>
                            <li>Cebolla: <b>{store.personaUno.Cebolla}</b></li>
                            <li>Champinon: <b>{store.personaUno.Champinon}</b></li>
                            <li>Tomate: <b>{store.personaUno.Tomate}</b></li>
                            <li>Queso: <b>{store.personaUno.Queso}</b></li>
                            <li>Pina: <b>{store.personaUno.Pina}</b></li>
                            <li>Maduro: <b>{store.personaUno.Maduro}</b></li>
                            <li>Maiz: <b>{store.personaUno.Maiz}</b></li>
                            <li>Jamon: <b>{store.personaUno.Jamon}</b></li>
                            <li>Pollo: <b>{store.personaUno.Pollo}</b></li>
                            <li>Tocineta: <b>{store.personaUno.Tocineta}</b></li>
                            <li>Aceitunas: <b>{store.personaUno.Aceitunas}</b></li>
                            <li>Anchoas: <b>{store.personaUno.Anchoas}</b></li>
                            <li>Pepperoni: <b>{store.personaUno.Pepperoni}</b></li>
                            <li>Salami: <b>{store.personaUno.Salami}</b></li>
                            <li>Jalapenos: <b>{store.personaUno.Jalapenos}</b></li>
                            <li>JamonSerrano: <b>{store.personaUno.JamonSerrano}</b></li>
                            <li>Chorizo: <b>{store.personaUno.Chorizo}</b></li>
                            <li>Albahaca: <b>{store.personaUno.Albahaca}</b></li>
                            <li>Carne: <b>{store.personaUno.Carne}</b></li>
                            <li>Oregano: <b>{store.personaUno.Oregano}</b></li>
                            <li>Rugula: <b>{store.personaUno.Rugula}</b></li>
                            <li>Cabano: <b>{store.personaUno.Cabano}</b></li>
                            <li>Berenjena: <b>{store.personaUno.Berenjena}</b></li>
                            <li>Mariscos: <b>{store.personaUno.Mariscos}</b></li>
                  
                </ul> 
                </article>
            </section>
        )
    }
}


/* const PrivateRoute = ({ component: Component, ...rest }:any) => (
    <Route {...rest} render={(props) => (
        store.isAuth ?
        (<Component{...props} />) : (<Redirect to={{ pathname: "/login" }}/>
        )
    )} />
  ) */