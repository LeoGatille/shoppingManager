import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from './sidebarActions';
import './sidebar.scss'
import { SidebarState } from './sibearReducers'

export type SidebarProps = {state: string}

export const Sidebar: React.FC<SidebarProps> = ({state}: SidebarProps) => {
    const sidebarState: SidebarState = useSelector<any, any>(state => state.sidebarReducer);
    const dispatch = useDispatch();
    const onSidebarClick = () => {
        dispatch(toggleSidebar(sidebarState.state))
    }
    // const bodyOverlyClass = 
    return (
        <>
            <section className={state}>
                {/* <button onClick={onSidebarClick}>Toggle sidebar state</button> */}
            </section>
            {/* <h1>{sidebarState}</h1> */}
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