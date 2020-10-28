
export type SidebarState = {
    state: string;
    className: string
}
const defaultSidebarState: SidebarState = { state: 'CLOSE_SIDEBAR', className: 'close' }

export const sidebarReducer = (state: SidebarState = defaultSidebarState, action: any): SidebarState => {
    switch (action.type) {
        case "CLOSE_SIDEBAR":
            return {
                state: "OPEN_SIDEBAR",
                className: 'open'
            };
        case "OPEN_SIDEBAR":
            return {
                state: "CLOSE_SIDEBAR",
                className: 'close'
            };
        default:
            return state;
    }
}