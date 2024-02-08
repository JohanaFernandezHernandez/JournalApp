
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved:'',
        notes: [],
        active: null,
        // active: {
        //     id: 'abcd',
        //     title: '',
        //     body: '',
        //     date: 1245,
        //     imageUrls: [], //https:foto1.jpg,....
        // }
        
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload);
            state.isSaving = false;
        },
        setAvtiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';

        },
        savingNewNote:(state) => {
            state.isSaving = true;

        },
        setNotes: (state, action) => {
            state.notes = action.payload;

        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';

        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if(note.id === action.payload.id){
                    return action.payload;
                }

                return note;

            });

            state.messageSaved = `${ action.payload.title}, actualizada correctamente`

        },
        deleteNodeById: (state, action) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setAvtiveNote, savingNewNote, setNotes, setSaving, updateNote, deleteNodeById} = journalSlice.actions;