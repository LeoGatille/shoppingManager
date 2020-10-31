import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from './sidebarActions';
import './sidebar.scss'
import { SidebarState } from './sibearReducers'

export type SidebarProps = { state: string }

export const Sidebar: React.FC<SidebarProps> = ({ state }: SidebarProps) => {
    const sidebarState: SidebarState = useSelector<any, any>(state => state.sidebarReducer);
    const dispatch = useDispatch();
    const onSidebarClick = () => {
        dispatch(toggleSidebar(sidebarState.state))
    }
    // const bodyOverlyClass = 
    return (
        <>
            <section className={'sibebar-container ' + state}>
                <div className="sidebar">
                    TITI
                    <div className="sidebar-item">
                        toto
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