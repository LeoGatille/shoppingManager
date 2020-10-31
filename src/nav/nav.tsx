import React from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import './nav.scss'
import logo from './../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../sidebar/sidebarActions';
import { SidebarState } from '../sidebar/sibearReducers';

export const Nav: React.FC = () => {

    const sidebarState: SidebarState = useSelector<any, any>(state => state.sidebarReducer);
    const dispatch = useDispatch();
    const onBurgerClick = () => {
        dispatch(toggleSidebar(sidebarState.state))
    }

    return (
        <>
            <header className="my-header">
                <div onClick={onBurgerClick} className="burger-container">
                    <FontAwesomeIcon  className="burger" icon={faBars} />
                </div>
                <img width="50px" src={logo} alt="shopping manager's logo metling a note book with a shopping kart" />
            </header>
            <Sidebar state={sidebarState.payload} />
            <section className={"body-overlay " + sidebarState.payload}></section>
        </>
    )
}