
import React from 'react';
import './nav.scss';
import logo from './logo.png'
import { Link } from 'react-router-dom';
export class Nav extends React.Component<{}, {}> {

    render() {
        return <Header />
    }
}
function Header() {
    return <header className="nav">
        <img src={logo} alt="shopping manager's logo" height={50} />
    </header>
}
