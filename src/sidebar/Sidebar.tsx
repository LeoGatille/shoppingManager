import React from 'react';
import './sidebar.scss'
import { Link } from 'react-router-dom';

export type SidebarProps = { state: string }

export const Sidebar: React.FC<SidebarProps> = ({ state }: SidebarProps) => {

    return (
        <>
            <section className={'sibebar-container ' + state}>
                <div className="sidebar">
                    <div className="sidebar-items-container">
                        <div className="sidebar-item">
                            <Link to="/lists">
                                Mes listes
                        </Link>
                        </div>
                        <div className="sidebar-item">
                            <Link to="/join-list">
                                Rejoindre une liste
                        </Link>
                        </div>
                        <div className="sidebar-item">
                            <Link to="/connection">
                                Connexion
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



// export class Sidebar extends React.Component {

//     render() {
//         return (
//             <button>Toggle sidebar state</button>
//         )
//     }
// }