
export const sidebarReducer = (state: string = 'CLOSE', action: any) => {
    switch (action.type) {
        case "CLOSE":
            return "OPEN";
        case "OPEN":
            return "CLOSE";
        default:
            return state;
    }
}