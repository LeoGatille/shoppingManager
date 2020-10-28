import React, { ChangeEvent } from 'react';

interface NewNoteInputProps {
    addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
    console.log('react.useState => ', React.useState('toto'));

    //* const [state, setState()]
    //* Le param de useState définie le type du state : ici '' donc <string>
    const [note, setNote] = React.useState('');
    //* A chaque changement, le state est redéfini en fonction de la val de l'input
    //* Si la valeur entrée n'est pas ajoutée par setState() REACT ne la fait pas passer du VirtualDOM -> DOM
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        //* state = setState()
        setNote(event.target.value);
    };
    const onAddNoteClick = () => {
        addNote(note);
        setNote("");
    };
    return (
        <div>
            <input onChange={updateNote} value={note} type='text' name='note' placeholder='note' />
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
    );
};


interface NewNoteInputProps {
    addNote(note: string): void;
}

//* Crée une const qui prend addNote en param
//* addNote est une fonction de callback
export const TOTO: React.FC<NewNoteInputProps> = ({ addNote }) => {

    //* Récup deux const
    //* le state affiché qui est une string *COMMENT TYPESCRIPT LE SAIT ?*
    //* SetNote() qui permet de mettre à jour le state de note 
    const [note, setNote] = React.useState('');

    //* Récupère une valeur de type Event<input/>
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        //* Met à jour le state de 'const note' avec setNote() 
        setNote(event.target.value);
    };

    const onAddNoteClick = () => {
        //* Utilise la méthode passé en callback
        //* Lui passe la 'const note' récupérée avec React.useState()
        //* Passe donc l'état courrant à sa fonction de callback
        addNote(note);

        //* Set l'état courrant 'const note' 
        setNote("");
    };
    return (
        <div>
            <input onChange={updateNote} value={note} type='text' name='note' placeholder='note' />
            <button onClick={onAddNoteClick}>Add note</button>
        </div>
    );
};
