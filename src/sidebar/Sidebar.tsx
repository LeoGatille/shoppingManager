import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar, openSidebar, toggleSidebar } from './sidebarActions';
import './sidebar.scss'

export const Sidebar: React.FC<any> = (props) => {
    const sidebarState: any = useSelector<any, any>(state => state.sidebarReducer);
    // const [toDisplay, setToDisplay] = React.useState(sidebarState);
    const dispatch = useDispatch();
    const onSidebarClick = () => {
        dispatch(toggleSidebar(sidebarState))
    }
    return (
        <>
            <button onClick={onSidebarClick}>Toggle sidebar state</button>
            <section className={sidebarState.toLowerCase()}>
                toto
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