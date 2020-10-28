import { Action } from "./actions"

export interface NotesState {
    notes: string[];
}
const initialState = {
    notes: []
}

export const notesReducer = (state: NotesState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                //*...state.notes, action.payload => [note1, note2, etc..., action.payload<note>]
                notes: [...state.notes, action.payload]
            }
        default:
            return state
    }
}