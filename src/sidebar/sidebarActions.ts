
export const openSidebar = () => {
    return { type: 'OPEN' }
}
export const closeSidebar = () => {
    return { type: 'CLOSE' }
}

export const toggleSidebar = (currentState: string) => {
    return { type: currentState};
}
// export const toggleSidebar = (currentState: string) => {
//     return { type: currentState === 'CLOSE' ? 'OPEN' : 'CLOSE' };
// }