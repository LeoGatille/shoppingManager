
export type SidebarState = {
    state: string;
    payload: string
}
const defaultSidebarState: SidebarState = { state: 'CLOSE_SIDEBAR', payload: 'close' }

export const sidebarReducer = (state: SidebarState = defaultSidebarState, action: any): SidebarState => {
    switch (action.type) {
        case "CLOSE_SIDEBAR":
            return {
                state: "OPEN_SIDEBAR",
                payload: 'open'
            };
        case "OPEN_SIDEBAR":
            return {
                state: "CLOSE_SIDEBAR",
                payload: 'close'
            };
        default:
            return state;
    }
}