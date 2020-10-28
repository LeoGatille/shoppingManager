import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toggleSidebar } from './sidebarActions';
import './sidebar.scss'
import {SidebarState} from './sibearReducers'

export const Sidebar: React.FC = () => {
    const sidebarState: SidebarState = useSelector<any, any>(state => state.sidebarReducer);
    // const [toDisplay, setToDisplay] = React.useState(sidebarState);
    const dispatch = useDispatch();
    const onSidebarClick = () => {
        dispatch(toggleSidebar(sidebarState.state))
    }
    return (
        <>
            <section className={sidebarState.className}>
                <button onClick={onSidebarClick}>Toggle sidebar state</button>
                
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